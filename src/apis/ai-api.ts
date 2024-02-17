import { apiGetter } from "./interceptor";

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
