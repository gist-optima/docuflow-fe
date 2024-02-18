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
  n: number;
}) => {
  const { data } = await apiPoster<string[]>("/ai/regenerate-query", {
    allContents,
    focusedContainer,
    guildingVector: guidingVector,
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

export const extractSnippet = async ({
  articles,
  allContents,
  focusedContainer,
  guildingVector,
  shownSnippets,
  prefferedSnippet,
}: {
  articles: string[];
  allContents: string;
  focusedContainer: string;
  guildingVector: string;
  shownSnippets: string;
  prefferedSnippet: string;
}) => {
  const { data } = await apiPoster<string[][]>("/ai/extract-snippet", {
    articles,
    allContents,
    focusedContainer,
    guildingVector,
    shownSnippets,
    prefferedSnippet,
  });

  return data;
};

export const modulizeDocument = async ({
  allArticles,
}: {
  allArticles: string;
}) => {
  const { data } = await apiPoster<{
    snippets: string[][];
    "all contents": object;
  }>("/ai/modulizer", {
    allArticles,
  });

  return data;
};

export const liquifySnippets = async ({ snippets }: { snippets: string[] }) => {
  const { data } = await apiPoster<{ result: string }>("/ai/liquifier", {
    snippets,
  });

  return data;
};
