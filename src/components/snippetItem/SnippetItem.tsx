import { Snippet, SnippetKind } from "src/types/types";

import Icons from "../icons/Icons";

interface SnippetItemProps {
  snippet: Snippet;
}

const SnippetItem = ({ snippet }: SnippetItemProps) => {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", JSON.stringify(snippet));
        console.log("dragging");
      }}
      className={
        "flex cursor-pointer flex-col gap-1 rounded-md bg-white p-2"
        //  + (outlined ? " border border-gray-300" : "")
      }
    >
      <div className={"flex items-center justify-between"}>
        <div className={"flex flex-nowrap items-center gap-1"}>
          {kindIcon(snippet.type)}
          <p className={"text-sm font-medium"}>{"asdf"}</p>
        </div>

        <button>
          <Icons.Kebab />
        </button>
      </div>

      <div className={"flex flex-col gap-2 overflow-hidden"}>
        {snippet.content && <p className={"text-xs"}>{snippet.content}</p>}
        {/* {image && <img src={image} alt={title} draggable={false} />} */}
      </div>
    </div>
  );
};

const kindIcon = (kind: SnippetKind) => {
  switch (kind) {
    case SnippetKind.Document:
      return <Icons.Document />;
    case SnippetKind.Chart:
      return <Icons.Chart />;
    case SnippetKind.Image:
      return <Icons.Image />;
    default:
      return <></>;
  }
};

export default SnippetItem;
