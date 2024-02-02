import { Dispatch, SetStateAction } from "react";
import Button from "src/components/button/Button";
import Chat from "src/components/chat/Chat";
import Icons from "src/components/icons/Icons";
import Profile from "src/components/profile/Profile";
import { peoples, snippets } from "src/dummy/dummy";

const title = "기후 변화와 이를 해결하기 위한 기술들";

interface ViewModeProps {
  setMode: Dispatch<SetStateAction<"edit" | "view">>;
}

const ViewMode = ({ setMode }: ViewModeProps) => {
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
                icon={<Icons.Write />}
                className={"border-0 bg-[#0DA200]"}
                onClick={() => setMode("edit")}
              >
                <p className={"text-sm text-white"}>이어서 작업하기</p>
              </Button>
            </div>
          </div>

          <div
            className={
              "flex flex-col gap-3 rounded-lg border border-gray-300 p-5"
            }
          >
            <p className={"text-2xl font-bold"}>{title}</p>

            {snippets.map((snippet, index) =>
              snippet.content ? (
                <p key={snippet.id}>{snippet.content}</p>
              ) : snippet.image ? (
                <img key={snippet.id} src={snippet.image} alt="image" />
              ) : (
                <></>
              ),
            )}
          </div>
        </div>

        <div className={"flex flex-col rounded-lg bg-slate-100 p-3"}>
          <Profile
            name={"OPTIMA"}
            description={"KPMG 아이디어톤"}
            image={"https://i.pravatar.cc/300"}
            variant={"organization"}
          />

          <div className={"my-3 border-b border-gray-300"} />

          <p className={"text-sm"}>Pe ople</p>

          <div className={"mt-3 flex flex-col gap-2"}>
            {peoples.map((people, index) => (
              <Profile
                key={index}
                name={people.name}
                description={people.description}
                image={people.image}
              />
            ))}
          </div>

          <div className={"my-3 border-b border-gray-300"} />

          <p className={"mb-3 text-sm"}>Chats</p>

          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ViewMode;
