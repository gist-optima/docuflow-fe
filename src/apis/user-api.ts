import { User } from "src/types/types";

import { apiGetter } from "./interceptor";

export const searchUsers = async ({ keyword }: { keyword: string }) => {
  const { data } = await apiGetter<User[]>("/user/search", {
    params: {
      keyword,
    },
  });

  return data;
};
