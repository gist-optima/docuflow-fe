import {
  Gitgraph,
  GitgraphProps,
  templateExtend,
  TemplateName,
} from "@gitgraph/react";
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
    gitgraph: any,
    versions: Version[],
  ): void => {
    const branches: { [tag: string]: any } = {};

    // 기본 브랜치를 생성하고 초기 커밋을 추가합니다.
    const master = gitgraph.branch("main");
    master.commit("Initial commit");

    versions.forEach((version) => {
      let branch: any;

      if (branches[version.tag]) {
        branch = branches[version.tag];
      } else {
        branch = master.branch(version.tag);
        branches[version.tag] = branch;
      }
      branch.commit({
        subject: version.description,
        hash: version.id.toString(),
      });
    });
  };

  if (data === undefined) return <></>;

  return (
    <div className={"rounded-lg border border-gray-300 p-5"}>
      <Gitgraph
        options={{
          author: " ", // to hide the author label for each commit
          template: templateExtend(TemplateName.Metro, {
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
