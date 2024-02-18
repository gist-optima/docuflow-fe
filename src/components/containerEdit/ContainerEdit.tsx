import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { focusedContainerAtom, overlayedContainerIdAtom } from "src/store";
import { Container, Snippet } from "src/types/types";
import { twMerge } from "tailwind-merge";

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
  const [focusedContainer, setFocusedContainer] = useAtom(focusedContainerAtom);
  const [overlayedContainerId] = useAtom(overlayedContainerIdAtom);

  return (
    <div
      className={twMerge(
        "container-style w-full gap-2",
        focusedContainer?.id === container.id ? "focused-container" : "",
        overlayedContainerId === container.id ? "bg-blue-100" : "",
      )}
      id={`${container.id}-0`}
      onClick={(e) => {
        e.stopPropagation();
        setFocusedContainer(container);
      }}
    >
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
