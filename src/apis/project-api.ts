import { DetailedProject, Project, User } from "src/types/types";

import { apiGetter, apiPatcher, apiPoster } from "./interceptor";

export const getProjects = async ({ queryKey }: { queryKey: [string] }) => {
  const [,] = queryKey;

  const { data } = await apiGetter<Project[]>("/project");
  return data;
};

export const getProject = async ({
  queryKey,
}: {
  queryKey: [string, { id: string }];
}) => {
  const [, { id }] = queryKey;

  const { data } = await apiGetter<DetailedProject>(`/project/${id}`);
  return data;
};

export const createProject = async ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  const { data } = await apiPoster<Project>("/project", {
    name,
    description,
  });
  return data;
};

export const addUserToProject = async ({
  projectId,
  userId,
}: {
  projectId: number;
  userId: number;
}) => {
  const { data } = await apiPatcher(`/project/${projectId}/user`, {
    userId,
  });

  return data;
};
