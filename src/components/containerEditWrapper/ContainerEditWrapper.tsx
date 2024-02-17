import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { createSnippet, updateSnippet } from "src/apis/version-api";
import { Container, QueryKey, Snippet } from "src/types/types";
import { DFSCenter } from "src/utils/utils";

import ContainerEdit from "../containerEdit/ContainerEdit";

interface ContainerEditWrapperProps {
  container: Container;
  projectId: number;
  versionId: number;
}

const ContainerEditWrapper = ({
  container,
  projectId,
  versionId,
}: ContainerEditWrapperProps) => {
  const snippetContainerRef = useRef<HTMLDivElement>(null);
  const snippetCenterRef = useRef<
    { top: number; bottom: number; containerId: number; order: number }[]
  >([]);

  useEffect(() => {
    const wrapper = snippetContainerRef.current;
    if (wrapper) {
      snippetCenterRef.current = DFSCenter(wrapper);
    }

    console.log(snippetCenterRef.current);

    return () => {
      snippetCenterRef.current = [];
    };
  }, [container, window.innerHeight, window.innerWidth]);

  const queryClient = useQueryClient();

  const createSnippetMutation = useMutation({
    mutationFn: createSnippet,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.GetVersion],
      });
    },
  });

  const updateSnippetMutation = useMutation({
    mutationFn: updateSnippet,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.GetVersion],
      });
    },
  });

  return (
    <div
      ref={snippetContainerRef}
      onDrop={(e) => {
        const data = e.dataTransfer.getData("text/plain");
        const pageY = e.pageY;

        console.log(data);

        if (data) {
          const snippet: Snippet = JSON.parse(data);

          let index = 0;
          let minGap = Infinity;

          snippetCenterRef.current.forEach((position, i) => {
            if (
              pageY < window.scrollY + position.bottom &&
              pageY > window.scrollY + position.top
            ) {
              if (position.bottom - position.top < minGap) {
                minGap = position.bottom - position.top;
                index = i;
              }
            }
          });

          const item = snippetCenterRef.current[index];

          console.log(pageY, item.containerId, item.order);

          const order =
            item?.containerId ===
            snippetCenterRef.current[index + 1]?.containerId
              ? (item?.order + snippetCenterRef.current[index + 1]?.order) / 2
              : item?.order + 1;

          if (snippet.indicator) {
            updateSnippetMutation.mutate({
              projectId,
              versionId,
              snippetId: snippet.id,
              content: snippet.content,
              type: snippet.type,
              order: order || 0,
              containerId: item?.containerId || undefined,
            });
          } else {
            createSnippetMutation.mutate({
              projectId,
              versionId,
              containerId: item?.containerId || undefined,
              type: snippet.type,
              order: order || 0,
              content: snippet.content,
            });
          }
        }
      }}
      onDragOver={(e) => {
        e.preventDefault();

        // console.log(e);
      }}
    >
      <ContainerEdit
        container={container}
        projectId={projectId}
        versionId={versionId}
      />

      <div
        className={
          "flex w-full justify-center rounded-md border border-dashed border-[#B0CDFB] p-4"
        }
      >
        <p>여기에 정보 조각을 끌어다 놓으세요.</p>
      </div>
    </div>
  );
};

export default ContainerEditWrapper;
