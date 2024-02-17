import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Button from "src/components/button/Button";
import Chat from "src/components/chat/Chat";
import Icons from "src/components/icons/Icons";
import Profile from "src/components/profile/Profile";
import SearchVectorButton from "src/components/searchVectorButton/SearchVectorButton";
import SnippetItem from "src/components/snippetItem/SnippetItem";
import { peoples, snippets as dummySnippets } from "src/dummy/dummy";
import {
  DetailedProject,
  Project,
  SnippetKind,
  Version,
} from "src/types/types";

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
              <Button icon={<Icons.Export />}>
                <p className={"text-sm"}>문서 내보내기</p>
              </Button>

              <Button
                icon={<Icons.Send />}
                className={"border-0 bg-[#006BB9]"}
                onClick={() => setMode("view")}
              >
                <p className={"text-sm text-white"}>커밋 & 푸시</p>
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
          <SearchVectorButton keyword={"주장에 대한 근거로 사용할 정보"} />
          <SearchVectorButton keyword={"시각 자료"} />
          <SearchVectorButton keyword={"통계 자료"} />
          <SearchVectorButton keyword={"관련 용어의 정의"} />
        </div>

        <input
          className={
            "mb-3 ml-6 mt-1 w-[500px] rounded-md border border-gray-400 p-1 text-xs"
          }
          placeholder={"원하시는 정보의 종류를 간단히 입력하세요"}
        />

        <div className={`flex gap-1 overflow-x-scroll`}>
          <div className={"w-5 shrink-0"} />
          {dummySnippets.map((snippet, index) => (
            <SnippetItem key={snippet.id} snippet={snippet} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditMode;
