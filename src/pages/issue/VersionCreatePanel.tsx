import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { createVersion } from "src/apis/version-api";
import Button from "src/components/button/Button";
import VersionSelector from "src/components/versionSelector/VersionSelector";
import { DetailedProject, QueryKey, Version } from "src/types/types";

interface VersionCreatePanelProps {
  project: DetailedProject;
}

const VersionCreatePanel = ({ project }: VersionCreatePanelProps) => {
  const [selectedVersion, setSelectedVersion] = useState<Version>(
    project.Version[0],
  );

  const queryClient = useQueryClient();

  const createVersionMutation = useMutation({
    mutationFn: createVersion,
    onSuccess: () => {
      toast.success("논점이 생성되었습니다.");

      queryClient.invalidateQueries({
        queryKey: [QueryKey.GetProject],
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const issueName = e.currentTarget.issueName.value;
    const tagName = e.currentTarget.tagNameA.value;

    createVersionMutation.mutate({
      projectId: project.id,
      parentVersionId: selectedVersion.id,
      description: issueName,
      tag: tagName,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={"flex flex-col gap-1 rounded-lg border border-gray-300 p-5"}
    >
      <p className={"font-medium"}>논점 생성하기</p>

      <p className={"mt-2 text-xs"}>논점 이름</p>
      <input
        className={"rounded-lg border border-gray-400 p-1 text-xs"}
        name={"issueName"}
        placeholder={"논점 이름 입력"}
      />

      <p className={"mt-2 text-xs"}>태그</p>
      <input
        className={"rounded-lg border border-gray-400 p-1 text-xs"}
        name={"tagNameA"}
        placeholder={"태그 입력"}
      />

      <p className={"mt-2 text-xs"}>기반 브랜치 선택</p>

      <VersionSelector
        versions={project.Version}
        selectedVersion={selectedVersion}
        setSelectedVersion={setSelectedVersion}
      />

      {/* <p className={"mt-2 text-xs"}>논점에 대한 설명</p>
      <textarea
        className={"rounded-lg border border-gray-400 p-1 text-xs"}
        placeholder={"논점에 대한 설명 입력"}
      /> */}

      {/* <p className={"required mt-2 text-xs"}>태그</p>
      <div className={"flex justify-between text-xs"}>
        <label className={"flex items-center gap-2"}>
          <input type="radio" name={"tag"} />
          <p>서론</p>
        </label>
        <label className={"flex items-center gap-2"}>
          <input type="radio" name={"tag"} />
          <p>본론</p>
        </label>
        <label className={"flex items-center gap-2"}>
          <input type="radio" name={"tag"} />

          <p>결론</p>
        </label>
      </div> */}

      <Button
        type={"submit"}
        className={"mt-5 flex justify-center border-0 bg-[#0DA200] text-white"}
      >
        <p className={"text-sm"}>생성하기</p>
      </Button>
    </form>
  );
};

export default VersionCreatePanel;
