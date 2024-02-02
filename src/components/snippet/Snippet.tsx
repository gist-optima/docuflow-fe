import { SnippetKind } from "src/types/types";
import { CSSProperties } from "styled-components";

import Icons from "../icons/Icons";

interface SnippetProps {
  kind: SnippetKind;
  title: string;
  content?: string;
  image?: string;
  style?: CSSProperties;
  outlined?: boolean;
}

const Snippet = ({
  kind,
  title,
  content = "",
  image = "",
  style,
  outlined = false,
}: SnippetProps) => {
  return (
    <div
      className={
        "flex cursor-pointer flex-col gap-1 rounded-md bg-white p-2" +
        (outlined ? " border border-gray-300" : "")
      }
      style={style}
    >
      <div className={"flex items-center justify-between"}>
        <div className={"flex flex-nowrap items-center gap-1"}>
          {kindIcon(kind)}
          <p className={"text-sm font-medium"}>{title}</p>
        </div>

        <button>
          <Icons.Kebab />
        </button>
      </div>

      <div className={"flex flex-col gap-2"}>
        {content && <p className={"text-xs"}>{content}</p>}
        {image && <img src={image} alt={title} />}
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

export default Snippet;
