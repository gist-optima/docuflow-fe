import { queries } from "@storybook/testing-library";

import { apiGetter, apiPoster } from "./interceptor";

export const generateContainers = async ({
  queryKey,
}: {
  queryKey: [
    string,
    {
      title: string;
    },
  ];
}) => {
  const [, { title }] = queryKey;

  const { data } = await apiGetter<object[]>("/ai/generate-container/" + title);

  return data;
};

export const generateQuery = async ({
  focusedContainer,
  guidingVector,
}: {
  focusedContainer: string;
  guidingVector: string;
}) => {
  const { data } = await apiPoster<string[]>("/ai/generate-query", {
    focusedContainer,
    guidingVector,
  });

  return data;
};

export const regenerateQuery = async ({
  allContents,
  focusedContainer,
  guidingVector,
  previousQuery,
  shownSnippets,
  prefferedSnippet,
  n,
}: {
  allContents: string[];
  focusedContainer: string;
  guidingVector: string;
  previousQuery: string;
  shownSnippets: string[];
  prefferedSnippet: string;
  n: string;
}) => {
  const { data } = await apiPoster("/ai/regenerate-query", {
    allContents,
    focusedContainer,
    guidingVector,
    previousQuery,
    shownSnippets,
    prefferedSnippet,
    n,
  });

  return data;
};

export const googleSearch = async ({
  search,
  n,
}: {
  search: string;
  n: number;
}) => {
  const { data } = await apiGetter<object>(
    "/ai/google-search?search=" + search + "&n=" + n,
  );

  return data;
};
