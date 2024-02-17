import { Version } from "src/types/types";

import { apiGetter, apiPatcher, apiPoster } from "./interceptor";

export const getVersion = async ({
  queryKey,
}: {
  queryKey: [
    string,
    {
      projectId: number;
      versionId: number;
    },
  ];
}) => {
  const { projectId, versionId } = queryKey[1];

  const { data } = await apiGetter<Version>(
    `/project/${projectId}/version/${versionId}`,
  );

  return data;
};

export const createVersion = async ({
  projectId,
  parentVersionId,
  description,
}: {
  projectId: number;
  parentVersionId: number;
  description: string;
}) => {
  const { data } = await apiPoster<Version>(
    `/project/${projectId}/version?parentVersionId=${parentVersionId}`,
    {
      description,
    },
  );

  return data;
};

export const createContainer = async ({
  projectId,
  versionId,
  name,
  parentId,
  order,
}: {
  projectId: number;
  versionId: number;
  name: string;
  parentId?: number;
  order: number;
}) => {
  const { data } = await apiPoster<Version>(
    `/project/${projectId}/version/${versionId}/container`,
    {
      name,
      parentId,
      order,
    },
  );

  return data;
};

export const createSnippet = async ({
  projectId,
  versionId,
  content,
  type,
  order,
  containerId,
}: {
  projectId: number;
  versionId: number;
  content: string;
  type: string;
  order: number;
  containerId?: number;
}) => {
  const { data } = await apiPoster<Version>(
    `/project/${projectId}/version/${versionId}/snippet`,
    {
      content,
      type,
      order,
      containerId,
    },
  );

  return data;
};

export const updateSnippet = async ({
  projectId,
  versionId,
  snippetId,
  content,
  type,
  order,
  containerId,
}: {
  projectId: number;
  versionId: number;
  snippetId: number;
  content: string;
  type: string;
  order: number;
  containerId?: number;
}) => {
  const { data } = await apiPatcher<Version>(
    `/project/${projectId}/version/${versionId}/snippet/${snippetId}`,
    {
      content,
      type,
      order,
      containerId,
    },
  );

  return data;
};

export const deleteContainer = async ({
  projectId,
  versionId,
  containerId,
}: {
  projectId: number;
  versionId: number;
  containerId: number;
}) => {
  const { data } = await apiPoster<Version>(
    `/project/${projectId}/version/${versionId}/container/${containerId}`,
  );

  return data;
};

export const deleteSnippet = async ({
  projectId,
  versionId,
  snippetId,
}: {
  projectId: number;
  versionId: number;
  snippetId: number;
}) => {
  const { data } = await apiPoster<Version>(
    `/project/${projectId}/version/${versionId}/snippet/${snippetId}`,
  );

  return data;
};
