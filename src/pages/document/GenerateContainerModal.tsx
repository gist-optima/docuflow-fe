import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useState } from "react";
import toast from "react-hot-toast";
import { generateContainers } from "src/apis/ai-api";
import { createContainer } from "src/apis/version-api";
import Button from "src/components/button/Button";
import Modal from "src/components/modal/Modal";
import { modalListAtom } from "src/store";
import { QueryKey } from "src/types/types";

interface GenerateContainerModalProps {
  projectId: number;
  versionId: number;
}

const GenerateContainerModal = ({
  projectId,
  versionId,
}: GenerateContainerModalProps) => {
  const [, setModalList] = useAtom(modalListAtom);
  const [containers, setContainers] = useState<object[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = await toast.promise(
      generateContainers({
        queryKey: [
          QueryKey.GenerateContainer,
          {
            title: e.currentTarget.titleInput.value,
          },
        ],
      }),
      {
        loading: "컨테이너 생성 중...",
        success: "컨테이너 생성 완료",
        error: "컨테이너 생성 실패",
      },
    );

    setContainers(data);
  };

  const recursivelyCreateContainer = async (
    container: object,
    parentId?: number,
  ) => {
    Object.keys(container).forEach(async (title, index) => {
      // @ts-ignore
      if (container[title]) {
        const data = await createContainer({
          projectId,
          versionId,
          name: title,
          parentId,
          order: index,
        });
        // @ts-ignore
        await recursivelyCreateContainer(container[title], data.id);
      } else {
        await createContainer({
          projectId,
          versionId,
          name: title,
          parentId,
          order: index,
        });
      }
    });
  };

  const queryClient = useQueryClient();

  const handleContainerClick = async (container: object) => {
    const data = await createContainer({
      projectId,
      versionId,
      name: " ",
      order: 0,
    });

    await recursivelyCreateContainer(container, data.id);

    toast.loading("Generating container...", {
      duration: 2000,
    });

    setTimeout(() => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.GetVersion],
      });
      setModalList((prev) => prev.slice(0, -1));
    }, 2000);
  };

  return (
    <Modal className={"max-h-[80vh] w-[600px]"}>
      <form className={"flex gap-2"} onSubmit={handleSubmit}>
        <input className={"border border-gray-300"} name={"titleInput"} />
        <Button type={"submit"}>
          <div>Generate</div>
        </Button>
      </form>

      <div className={"mt-5 grid w-full grid-cols-3"}>
        {containers.slice(0, 3).map((container, index) => (
          <button
            key={index}
            onClick={() => handleContainerClick(container)}
            className={
              "flex max-h-[60vh] flex-col items-start overflow-scroll rounded-md hover:bg-slate-100"
            }
          >
            <ContainerTitle container={container} />
          </button>
        ))}
      </div>
    </Modal>
  );
};

const ContainerTitle = ({ container }: { container: object }) => {
  return (
    <div className={"ml-2"}>
      {Object.keys(container).map((title) =>
        // @ts-ignore
        container[title] ? (
          <div key={title} className={"ml-2 text-start"}>
            <div className={"text-sm"}>{title}</div>
            <ContainerTitle
              container={
                // @ts-ignore
                container[title]
              }
            />
          </div>
        ) : (
          <div key={title} className={"text-start text-sm"}>
            {title}
          </div>
        ),
      )}
    </div>
  );
};

export default GenerateContainerModal;
