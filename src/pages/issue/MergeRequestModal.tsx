import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createPullRequest, getProject } from "src/apis/project-api";
import { checkBranchDiff, getVersion } from "src/apis/version-api";
import Button from "src/components/button/Button";
import Modal from "src/components/modal/Modal";
import { modalListAtom } from "src/store";
import { DetailedProject, QueryKey, Version } from "src/types/types";
import { parseBranches } from "src/utils/utils";

interface MergeRequestModalProps {
  project: DetailedProject;
}

const MergeRequestModal = ({ project }: MergeRequestModalProps) => {
  const [, setModalList] = useAtom(modalListAtom);
  const [currentBranch, setCurrentBranch] = useState<string>();
  const [diffBranch, setDiffBranch] = useState<string>();
  const [branches, setBranches] = useState<string[]>(
    parseBranches(project.Version),
  );

  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: [
      QueryKey.GetVersion,
      { projectId: project.id, versionId: project.Version[0].id },
    ],
    queryFn: getVersion,
  });

  const handleMergeRequest = async () => {
    if (!currentBranch || !diffBranch) {
      toast.error("브랜치를 선택해주세요.");
      return;
    }

    const currentBranchVersions = project.Version.filter(
      (version) => version.tag === currentBranch,
    );

    const newestCurrentBranchVersion = currentBranchVersions.reduce(
      (prev, curr) => {
        return new Date(prev.createdAt) > new Date(curr.createdAt)
          ? prev
          : curr;
      },
    );

    const diffBranchVersions = project.Version.filter(
      (version) => version.tag === diffBranch,
    );

    const newestDiffBranchVersion = diffBranchVersions.reduce((prev, curr) => {
      return new Date(prev.createdAt) > new Date(curr.createdAt) ? prev : curr;
    });

    if (!data) {
      toast.error("버전을 찾을 수 없습니다");
      return;
    }

    const pullRequest = await createPullRequest({
      projectId: project.id,
      title: `${currentBranch}에서 ${diffBranch}(으)로 병합 요청`,
      description: `병합 요청: ${currentBranch}에서 ${diffBranch}(으)로 병합 요청`,
      fromTag: diffBranch,
      toTag: currentBranch,
    });

    toast.success("병합 요청이 완료되었습니다.");

    setModalList((prev) => prev.slice(0, -1));
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
