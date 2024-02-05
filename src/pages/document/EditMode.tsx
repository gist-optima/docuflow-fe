import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Button from "src/components/button/Button";
import Chat from "src/components/chat/Chat";
import Icons from "src/components/icons/Icons";
import Profile from "src/components/profile/Profile";
import SearchVectorButton from "src/components/searchVectorButton/SearchVectorButton";
import Snippet from "src/components/snippet/Snippet";
import { peoples, snippets as dummySnippets } from "src/dummy/dummy";
import { SnippetKind } from "src/types/types";

interface EditModeProps {
  setMode: Dispatch<SetStateAction<"edit" | "view">>;
}

const EditMode = ({ setMode }: EditModeProps) => {
  const [showBottomSheet, setShowBottomSheet] = useState(true);
  const [snippets, setSnippets] = useState(dummySnippets);
  const snippetContainerRef = useRef<HTMLDivElement>(null);
  const snippetCenterRef = useRef<number[]>([]);

  useEffect(() => {
    const container = snippetContainerRef.current;
    if (container) {
      snippetCenterRef.current = Array.from(container.children).map((child) => {
        const rect = child.getBoundingClientRect();
        return rect.top + rect.height / 2;
      });
    }

    return () => {
      snippetCenterRef.current = [];
    };
  }, [snippets, window.innerHeight, window.innerWidth]);

  return (
    <div className={"flex flex-col items-center"}>
      <div className={"grid w-10/12 items-start gap-4"}>
        <div className={"flex flex-col gap-3"}>
          <div className={"flex justify-between"}>
            <Button icon={<Icons.Branch />}>
              <p className={"ml-1 mr-3 text-sm"}>main</p>

              <Icons.Triangle />
            </Button>
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

          <div
            className={
              "flex flex-col items-center rounded-lg border border-gray-300 p-5 pt-10"
            }
            onDrop={(e) => {
              console.log(e);
              const data = e.dataTransfer.getData("text/plain");
              console.log(data);
              const pageY = e.pageY;

              if (data) {
                const snippet = JSON.parse(data);

                const index = snippetCenterRef.current.findIndex(
                  (center) => pageY < window.scrollY + center,
                );

                setSnippets((prev) => {
                  const newSnippets = [...prev];
                  newSnippets.splice(index, 0, snippet);
                  return newSnippets;
                });
              }
            }}
            onDragOver={(e) => {
              e.preventDefault();
            }}
          >
            <p className={"text-2xl font-bold"}>
              {"기후 변화와 이를 해결하기 위한 기술들"}
            </p>

            <div
              className={"flex flex-col items-center gap-3"}
              ref={snippetContainerRef}
            >
              {snippets.map((snippet, index) => (
                <div
                  key={snippet.id}
                  className={"w-fit rounded-md border border-gray-400 p-3"}
                >
                  {snippet.content ? (
                    <p key={snippet.id}>{snippet.content}</p>
                  ) : snippet.image ? (
                    <img key={snippet.id} src={snippet.image} alt="image" />
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>

            <div
              className={
                "flex w-full justify-center rounded-md border border-dashed border-[#B0CDFB] p-4"
              }
            >
              <p>여기에 정보 조각을 끌어다 놓으세요.</p>
            </div>
          </div>
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
            <Snippet
              key={snippet.id}
              {...snippet}
              outlined
              style={{
                minWidth: "300px",
                width: "300px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditMode;
