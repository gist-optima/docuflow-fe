import { Gitgraph, Mode } from "@gitgraph/react";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "src/apis/project-api";
import Button from "src/components/button/Button";
import Icons from "src/components/icons/Icons";
import VersionSelector from "src/components/versionSelector/VersionSelector";
import { modalListAtom } from "src/store";
import { DetailedProject, QueryKey, Version } from "src/types/types";

import IssueGraph from "./IssueGraph";
import MergeRequestModal from "./MergeRequestModal";
import VersionCreatePanel from "./VersionCreatePanel";

interface IssuePageProps {}

const IssuePage = () => {
  const [, setModalList] = useAtom(modalListAtom);

  const { id } = useParams<{ id: string }>();

  const { data } = useQuery({
    queryKey: [QueryKey.GetProject, { id: id || "" }],
    queryFn: getProject,
    enabled: !!id,
  });

  return (
    <div className={"flex justify-center"}>
      <div className={"flex w-10/12 flex-col gap-4"}>
        <div className={"flex justify-between"}>
          <div className={"flex gap-2"}>
            <Button
              icon={<Icons.Branch />}
              className={"border-0 bg-[#0DA200]"}
              onClick={() =>
                setModalList((prev) => [
                  ...prev,
                  <MergeRequestModal
                    key={"MergeRequestModal"}
                    project={data as DetailedProject}
                  />,
                ])
              }
            >
              <p className={"text-sm text-white"}>병합 요청하기</p>
            </Button>
          </div>
        </div>
        <div className={"grid grid-cols-[1fr_200px] gap-4"}>
          <IssueGraph />

          {data && <VersionCreatePanel project={data} />}
        </div>
      </div>
    </div>
  );
};

export default IssuePage;
