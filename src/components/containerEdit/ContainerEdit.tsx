import { useEffect, useRef } from "react";
import { Container, Snippet } from "src/types/types";

import SnippetEdit from "../snippetEdit/SnippetEdit";

interface ContainerEditProps {
  container: Container;
  projectId: number;
  versionId: number;
}

const ContainerEdit = ({
  container,
  projectId,
  versionId,
}: ContainerEditProps) => {
  const children: (Snippet | Container)[] = [
    ...container.Snippet,
    ...container.child,
  ].sort((a, b) => a.order - b.order);

  return (
    <div className={"container-style w-full gap-2"} id={`${container.id}-0`}>
      <p className={"text-lg font-bold"}>{container.name}</p>

      {children.map((child, index) => {
        if (Object.hasOwn(child, "indicator")) {
          // child is Snippet
          return (
            <SnippetEdit
              key={Math.random()}
              snippet={child as Snippet}
              projectId={projectId}
              versionId={versionId}
            />
          );
        } else {
          return (
            <ContainerEdit
              key={child.id}
              container={child as Container}
              projectId={projectId}
              versionId={versionId}
            />
          );
        }
      })}
    </div>
  );
};

export default ContainerEdit;
