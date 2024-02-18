import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getProject } from "src/apis/project-api";
import { checkBranchDiff } from "src/apis/version-api";
import Button from "src/components/button/Button";
import Modal from "src/components/modal/Modal";
import { DetailedProject, QueryKey, Version } from "src/types/types";
import { parseBranches } from "src/utils/utils";

interface MergeRequestModalProps {
  project: DetailedProject;
}

const MergeRequestModal = ({ project }: MergeRequestModalProps) => {
  const [currentBranch, setCurrentBranch] = useState<string>();
  const [diffBranch, setDiffBranch] = useState<string>();
  const [branches, setBranches] = useState<string[]>(
    parseBranches(project.Version),
  );

  const handleMergeRequest = async () => {
    if (!currentBranch || !diffBranch) {
      toast.error("브랜치를 선택해주세요.");
      return;
    }

    // await checkBranchDiff({
    //   projectId: project.id,
    //   versionId: project.Version[0].id,
    //   containerId: project.Version[0].Container.id,
    //   currentBranch,
    // });
  };

  return (
    <Modal className={"flex flex-col gap-4"}>
      <div className={"flex gap-6"}>
        <select
          className={
            "flex items-center gap-1 rounded-md border border-solid border-gray-300 bg-slate-100 p-[6px]"
          }
          value={currentBranch}
          onChange={(e) => setCurrentBranch(e.target.value)}
        >
          <option disabled selected value={""}>
            현재 브랜치
          </option>
          {branches.map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>

        <select
          className={
            "flex items-center gap-1 rounded-md border border-solid border-gray-300 bg-slate-100 p-[6px]"
          }
          value={diffBranch}
          onChange={(e) => setDiffBranch(e.target.value)}
        >
          <option disabled selected value={""}>
            비교 브랜치
          </option>
          {branches.map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>
      </div>

      <Button
        className={"flex w-full justify-center bg-green-200 "}
        onClick={handleMergeRequest}
      >
        <p>병합 요청하기</p>
      </Button>
    </Modal>
  );
};

export default MergeRequestModal;
