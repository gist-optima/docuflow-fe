import { Dispatch, SetStateAction, useState } from "react";
import Button from "src/components/button/Button";
import Chat from "src/components/chat/Chat";
import Icons from "src/components/icons/Icons";
import Profile from "src/components/profile/Profile";
import Snippet from "src/components/snippet/Snippet";
import { peoples, snippets } from "src/dummy/dummy";
import { SnippetKind } from "src/types/types";

interface EditModeProps {
  setMode: Dispatch<SetStateAction<"edit" | "view">>;
}

const EditMode = ({ setMode }: EditModeProps) => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  return (
    <div className={"flex flex-col items-center"}>
      <div className={"grid w-10/12 grid-cols-[1fr_300px] items-start gap-4"}>
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
              "flex flex-col items-center gap-3 rounded-lg border border-gray-300 p-5"
            }
          >
            <p className={"text-2xl font-bold"}>
              {"기후 변화와 이를 해결하기 위한 기술들"}
            </p>

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

            <div
              className={
                "flex w-full justify-center rounded-md border border-dashed border-[#B0CDFB] p-4"
              }
            >
              <p>여기에 정보 조각을 끌어다 놓으세요.</p>
            </div>
          </div>
        </div>

        <div className={"flex flex-col gap-2 rounded-lg bg-slate-100 p-3"}>
          <p className={"text-sm"}>Searched Modules</p>

          {snippets.map((snippets, index) => (
            <Snippet key={snippets.id} {...snippets} outlined />
          ))}

          <div className={"flex justify-center"}>
            <button className={"flex"} onClick={() => setShowBottomSheet(true)}>
              <p className={"text-[#5F5F5F] underline"}>더 불러오기</p>
              <Icons.DownArrow />
            </button>
          </div>
        </div>
      </div>

      {showBottomSheet && (
        <div
          className={
            "fixed bottom-0 left-0 h-full w-full bg-black bg-opacity-50"
          }
        ></div>
      )}
    </div>
  );
};

export default EditMode;
