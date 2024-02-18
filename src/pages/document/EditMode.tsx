import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import {
  extractSnippet,
  generateQuery,
  googleSearch,
  regenerateQuery,
} from "src/apis/ai-api";
import { getVersion } from "src/apis/version-api";
import Button from "src/components/button/Button";
import Icons from "src/components/icons/Icons";
import Liquifier from "src/components/liquifier/Liquifier";
import SearchVectorButton from "src/components/searchVectorButton/SearchVectorButton";
import SnippetItem from "src/components/snippetItem/SnippetItem";
import { focusedContainerAtom, preferredSnippetAtom } from "src/store";
import {
  DetailedProject,
  QueryKey,
  Snippet,
  SnippetKind,
  Version,
} from "src/types/types";
import { getFocusedContainers, stringifyContainer } from "src/utils/utils";

import Editor from "./Editor";

interface EditModeProps {
  setMode: Dispatch<SetStateAction<"edit" | "view">>;
  project: DetailedProject;
}

const EditMode = ({ setMode, project }: EditModeProps) => {
  const [currentVersion, setCurrentVersion] = useState<Version>(
    project.Version[0],
  );

  const [showBottomSheet, setShowBottomSheet] = useState(true);
  const [guidingVector, setGuidingVector] = useState<string>("");
  const [focusedContainer, setFocusedContainer] = useAtom(focusedContainerAtom);
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [preferredSnippet] = useAtom(preferredSnippetAtom);
  const [previousQuery, setPreviousQuery] = useState<string>("");

  const { data } = useQuery({
    queryKey: [
      QueryKey.GetVersion,
      { projectId: project.id, versionId: currentVersion.id },
    ],
    queryFn: getVersion,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!data) return;

    e.preventDefault();

    console.log(currentVersion);

    const focusedContainerStack =
      focusedContainer && data
        ? getFocusedContainers(focusedContainer, data.Container)
        : [];

    const queries = await toast.promise(
      snippets.length > 0
        ? regenerateQuery({
            allContents: stringifyContainer(data.firstLayerContainer[0]),
            focusedContainer: focusedContainerStack.join(" "),
            guidingVector,
            previousQuery,
            shownSnippets: snippets.map((snippet) => snippet.content),
            prefferedSnippet: preferredSnippet,
            n: 3,
          })
        : generateQuery({
            focusedContainer: focusedContainerStack.join(" "),
            guidingVector,
          }),
      {
        loading: "쿼리 생성 중...",
        success: "쿼리 생성 완료",
        error: "쿼리 생성 실패",
      },
    );

    const searchResults = await toast.promise(
      Promise.all(
        queries.map((query) => googleSearch({ search: query, n: 3 })),
      ),
      {
        loading: "검색 중...",
        success: "검색 완료",
        error: "검색 실패",
      },
    );

    console.log(searchResults);

    const stringifiedContents = stringifyContainer(data.firstLayerContainer[0]);

    const extractedSnippets = await toast.promise(
      extractSnippet({
        articles: searchResults
          .reduce<string[]>((acc, cur) => [...acc, ...Object.values(cur)], [])
          .filter((article) => article.length > 0),
        allContents: stringifiedContents.join(" "),
        focusedContainer: focusedContainerStack.join(" "),
        guildingVector: guidingVector,
        shownSnippets: snippets.map((snippet) => snippet.content).join(" "),
        prefferedSnippet: preferredSnippet,
      }),
      {
        loading: "정보 조각 추출 중...",
        success: "정보 조각 추출 완료",
        error: "정보 조각 추출 실패",
      },
    );

    console.log("snippets", extractedSnippets);

    const newSnippets: Snippet[] = [];

    extractedSnippets.flat().forEach((result, index) => {
      const snippet: Snippet = {
        id: index,
        indicator: "",
        type: SnippetKind.Document,
        // @ts-ignore
        content: result,
        order: -1,
        createdAt: "",
        containerId: -1,
      };
      newSnippets.push(snippet);
    });

    setSnippets(newSnippets);

    setPreviousQuery(guidingVector);
  };

  return (
    <div className={"flex flex-col items-center"}>
      <div className={"grid w-10/12 items-start gap-4"}>
        <div className={"flex flex-col gap-3"}>
          <div className={"flex justify-between"}>
            <select
              className={
                "flex items-center gap-1 rounded-md border border-solid border-gray-300 bg-slate-100 p-[6px]"
              }
              value={currentVersion.id}
              onChange={(e) =>
                setCurrentVersion(
                  project.Version.find(
                    (version) => version.id === Number(e.target.value),
                  )!,
                )
              }
            >
              {project.Version.map((version) => (
                <option key={version.id} value={version.id}>
                  {version.description}
                </option>
              ))}
            </select>

            <div className={"flex gap-2"}>
              <Liquifier versionId={currentVersion.id} projectId={project.id} />

              <Button
                icon={<Icons.Send />}
                className={"border-0 bg-[#006BB9]"}
                onClick={() => setMode("view")}
              >
                <p className={"text-sm text-white"}>완료</p>
              </Button>
            </div>
          </div>

          <Editor projectId={project.id} versionId={currentVersion.id} />
        </div>
      </div>

      <div
        className={
          "fixed left-0 flex h-[300px] w-full flex-col bg-gray-300 bg-opacity-80 " +
          (showBottomSheet ? "bottom-0" : "bottom-[-300px]")
        }
      >
        <button
          onClick={() => setShowBottomSheet(!showBottomSheet)}
          className={
            "absolute left-6 top-[-28px] flex h-7 w-[72px] items-end  justify-center rounded-tl-lg rounded-tr-lg bg-gray-300 bg-opacity-80"
          }
        >
          <Icons.UpAngle />
        </button>

        <div className={"ml-6 mt-3 flex gap-2"}>
          <SearchVectorButton
            keyword={"주장에 대한 근거로 사용할 정보"}
            onClick={() => setGuidingVector("주장에 대한 근거로 사용할 정보")}
          />
          <SearchVectorButton
            keyword={"시각 자료"}
            onClick={() => setGuidingVector("시각 자료")}
          />
          <SearchVectorButton
            keyword={"통계 자료"}
            onClick={() => setGuidingVector("통계 자료")}
          />
          <SearchVectorButton
            keyword={"관련 용어의 정의"}
            onClick={() => setGuidingVector("관련 용어의 정의")}
          />
          <SearchVectorButton
            keyword={"관련 연구 결과"}
            onClick={() => setGuidingVector("관련 연구 결과")}
          />
          <SearchVectorButton
            keyword={"뉴스 기사"}
            onClick={() => setGuidingVector("뉴스 기사")}
          />
          <SearchVectorButton
            keyword={"관련 사례"}
            onClick={() => setGuidingVector("관련 사례")}
          />
        </div>

        <form className={"mb-3 ml-6 mt-2 flex gap-2"} onSubmit={handleSubmit}>
          <input
            type={"text"}
            value={guidingVector}
            onChange={(e) => setGuidingVector(e.target.value)}
            className={
              "w-[500px] rounded-md border border-gray-400 p-2 text-sm"
            }
            placeholder={"원하시는 정보의 방향성을 간단히 입력하세요"}
          />

          <Button className={"px-5"}>
            <p className={"text-sm"}>검색</p>
          </Button>
        </form>

        <div className={`flex gap-1 overflow-x-scroll`}>
          <div className={"w-5 shrink-0"} />
          {snippets.map((snippet, index) => (
            <SnippetItem key={snippet.id} snippet={snippet} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditMode;
