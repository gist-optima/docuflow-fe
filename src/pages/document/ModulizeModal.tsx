import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useState } from "react";
import toast from "react-hot-toast";
import { generateContainers, modulizeDocument } from "src/apis/ai-api";
import { createContainer, createSnippet } from "src/apis/version-api";
import Button from "src/components/button/Button";
import Modal from "src/components/modal/Modal";
import { modalListAtom } from "src/store";
import { QueryKey, SnippetKind } from "src/types/types";

interface ModulizeModalProps {
  projectId: number;
  versionId: number;
}

const ModulizeModal = ({ projectId, versionId }: ModulizeModalProps) => {
  const [, setModalList] = useAtom(modalListAtom);

  const queryClient = useQueryClient();

  const recursivelyCreateDocument = async (
    container: object,
    parentId?: number,
  ) => {
    Object.keys(container).forEach(async (title, index) => {
      // @ts-ignore
      if (typeof container[title] === "object") {
        const data = await createContainer({
          projectId,
          versionId,
          name: title,
          parentId,
          order: index,
        });
        // @ts-ignore
        await recursivelyCreateDocument(container[title], data.id);
      } else {
        await createSnippet({
          projectId,
          versionId,
          // @ts-ignore
          content: container[title],
          containerId: parentId,
          order: index,
          type: SnippetKind.Document,
        });
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = await toast.promise(
      modulizeDocument({
        allArticles: e.currentTarget.document.value,
      }),
      {
        loading: "글 분해 중...",
        success: "글 분해 완료",
        error: "글 분해 실패",
      },
    );

    await recursivelyCreateDocument(data["all contents"]);

    toast.loading("글 조합 중...", {
      duration: 2000,
    });

    setTimeout(() => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.GetVersion],
      });
    }, 2000);

    setModalList((prev) => prev.slice(0, -1));
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

  return (
    <Modal className={"max-h-[80vh] w-[600px]"}>
      <form className={"flex w-full gap-2"} onSubmit={handleSubmit}>
        <textarea
          name="document"
          id="document"
          className={"w-full rounded-md p-2"}
          placeholder={"문서를 입력해주세요"}
          rows={10}
        />
        <Button type={"submit"}>
          <div>생성</div>
        </Button>
      </form>
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

export default ModulizeModal;
