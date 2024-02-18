import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getProject } from "src/apis/project-api";
import { QueryKey } from "src/types/types";

const PullRequestListPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useQuery({
    queryKey: [QueryKey.GetProject, { id: id || "" }],
    queryFn: getProject,
    enabled: !!id,
  });

  return (
    <div className={"flex flex-col items-center"}>
      <div className={"flex w-10/12 flex-col gap-2"}>
        <p className={"text-2xl font-medium"}>병합 요청 목록</p>

        {data &&
          data.PullRequest.map((pr) => (
            <div className={"mt-4 flex flex-col gap-4"} key={pr.id}>
              <Link to={`/project/${id}/pullrequest/${pr.id}`}>
                <div
                  className={
                    "flex items-center justify-between rounded-lg border border-gray-300 p-2 px-5"
                  }
                >
                  <div className={"flex items-center gap-2"}>
                    <p className={"rounded-md bg-blue-100 p-1"}>{pr.toTag}</p>
                    <p>←</p>
                    <p className={"rounded-md bg-green-100 p-1"}>
                      {pr.fromTag}
                    </p>
                  </div>

                  <p>{pr.title}</p>

                  <div className={"h-3 w-3 rounded-full bg-yellow-300"} />
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PullRequestListPage;
