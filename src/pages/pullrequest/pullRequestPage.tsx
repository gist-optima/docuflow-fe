import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject, getPullRequest } from "src/apis/project-api";
import { getVersion } from "src/apis/version-api";
import Icons from "src/components/icons/Icons";
import SnippetItem from "src/components/snippetItem/SnippetItem";
import { peoples, snippets } from "src/dummy/dummy";
import { QueryKey } from "src/types/types";

import ShowDiff from "./ShowDiff";

const PullRequestPage = () => {
  const { pullRequestId, id } = useParams<{
    pullRequestId: string;
    id: string;
  }>();

  const { data: pullRequest } = useQuery({
    queryKey: [
      QueryKey.GetPullRequest,
      { pullRequestId: Number(pullRequestId), projectId: Number(id) },
    ],
    queryFn: getPullRequest,
    enabled: !!id,
  });

  const { data: project } = useQuery({
    queryKey: [QueryKey.GetProject, { id: id || "" }],
    queryFn: getProject,
  });

  const { data: version } = useQuery({
    queryKey: [
      QueryKey.GetVersion,
      { projectId: Number(id), versionId: project?.Version[0].id || 0 },
    ],
    queryFn: getVersion,
    enabled: !!project,
  });

  if (!pullRequest) return <></>;
  if (!project) return <></>;
  if (!version) return <></>;

  return (
    <ShowDiff
      pullRequest={pullRequest}
      project={project}
      containerId={version.firstLayerContainer[0].id}
    />
  );
};

export default PullRequestPage;
