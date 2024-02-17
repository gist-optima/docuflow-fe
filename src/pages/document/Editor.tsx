import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { createContainer, getVersion } from "src/apis/version-api";
import ContainerEdit from "src/components/containerEdit/ContainerEdit";
import ContainerEditWrapper from "src/components/containerEditWrapper/ContainerEditWrapper";
import ContainerView from "src/components/containerView/ContainerView";
import { modalListAtom } from "src/store";
import { Container, QueryKey, Snippet } from "src/types/types";

import GenerateContainerModal from "./GenerateContainerModal";

interface EditorProps {
  projectId: number;
  versionId: number;
}

const Editor = ({ projectId, versionId }: EditorProps) => {
  const { data } = useQuery({
    queryKey: [
      QueryKey.GetVersion,
      {
        projectId,
        versionId,
      },
    ],
    queryFn: getVersion,
  });
  const [, setModalList] = useAtom(modalListAtom);

  const queryClient = useQueryClient();

  const createContainerMutation = useMutation({
    mutationFn: createContainer,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.GetVersion],
      });
    },
  });

  const createContainerHandler = () => {
    setModalList((prev) => [
      ...prev,
      <GenerateContainerModal
        key={"GenerateContainerModal"}
        projectId={projectId}
        versionId={versionId}
      />,
    ]);
  };

  return (
    <div
      className={"flex flex-col gap-3 rounded-lg border border-gray-300 p-5"}
    >
      {data?.firstLayerContainer[0] ? (
        <ContainerEditWrapper
          container={data.firstLayerContainer[0]}
          projectId={projectId}
          versionId={versionId}
        />
      ) : (
        <div className={"flex w-full justify-center"}>
          <button
            className={
              "rounded-lg border border-gray-300 p-2 hover:bg-slate-100"
            }
            onClick={createContainerHandler}
          >
            Create Container Frame
          </button>
        </div>
      )}
    </div>
  );
};

export default Editor;
