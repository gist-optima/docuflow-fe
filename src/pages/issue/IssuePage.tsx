import { Gitgraph, Mode } from "@gitgraph/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "src/apis/project-api";
import Button from "src/components/button/Button";
import Icons from "src/components/icons/Icons";
import VersionSelector from "src/components/versionSelector/VersionSelector";
import { QueryKey, Version } from "src/types/types";

import IssueGraph from "./IssueGraph";
import VersionCreatePanel from "./VersionCreatePanel";

interface IssuePageProps {}

const IssuePage = () => {
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
          <Button icon={<Icons.Branch />}>
            <p className={"ml-1 mr-3 text-sm"}>main</p>

            <Icons.Triangle />
          </Button>
          <div className={"flex gap-2"}>
            <Button icon={<Icons.Export />}>
              <p className={"text-sm"}>문서 내보내기</p>
            </Button>

            <Button icon={<Icons.Branch />} className={"border-0 bg-[#0DA200]"}>
              <p className={"text-sm text-white"}>병합 요청하기</p>
            </Button>
          </div>
        </div>
        <div className={"flex gap-4"}>
          <IssueGraph />

          {data && <VersionCreatePanel project={data} />}
        </div>
      </div>
    </div>
  );
};

export default IssuePage;
