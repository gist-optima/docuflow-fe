import { Gitgraph, GitgraphProps, templateExtend } from "@gitgraph/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "src/apis/project-api";
import { QueryKey, Version } from "src/types/types";

interface IssueGraphProps {}

const IssueGraph = ({}: IssueGraphProps) => {
  const { id } = useParams<{ id: string }>();

  const { data } = useQuery({
    queryKey: [QueryKey.GetProject, { id: id || "" }],
    queryFn: getProject,
    enabled: !!id,
  });

  const generateGraphFromVersions = (
    gitgraph: GitgraphCore,
    versions: Version[],
  ): void => {
    const branches: { [tag: string]: GitgraphBranch } = {};

    // 기본 브랜치를 생성하고 초기 커밋을 추가합니다.
    const master = gitgraph.branch("main");
    master.commit("Initial commit");

    versions.forEach((version) => {
      let branch: GitgraphBranch;

      // 태그에 해당하는 브랜치가 이미 존재하는지 확인합니다.
      if (branches[version.tag]) {
        branch = branches[version.tag];
      } else {
        // 새로운 태그 브랜치를 생성합니다.
        branch = master.branch(version.tag);
        branches[version.tag] = branch;
      }

      // 해당 태그 브랜치에 커밋을 추가합니다.
      branch.commit({
        subject: version.description,
        hash: version.id.toString(),
        // 커밋 옵션을 추가할 수 있습니다. 예: author, date 등
      });
    });
  };

  if (data === undefined) return <></>;
  else console.log(data?.Version);

  return (
    <div className={"rounded-lg border border-gray-300 p-5"}>
      <Gitgraph
        options={{
          mode: "compact",
          template: templateExtend("metro", {
            colors: [
              "gray",
              "orange",
              "green",
              "blue",
              "purple",
              "red",
              "cyan",
            ],
            // …
          }),
        }}
      >
        {(gitgraph) => {
          if (data?.Version) {
            generateGraphFromVersions(gitgraph, data.Version);
          }
        }}
      </Gitgraph>
    </div>
  );
};

export default IssueGraph;
