import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { getProjects } from "src/apis/project-api";
import ProjectItem from "src/components/projectItem/ProjectItem";
import useNeedSignIn from "src/hooks/useNeedSignIn";
import { modalListAtom } from "src/store";
import { Project, QueryKey } from "src/types/types";

import ProjectCreateModal from "./ProjectCreateModal";

const MainPage = () => {
  useNeedSignIn();

  const { data } = useQuery({
    queryKey: [QueryKey.GetProjects],
    queryFn: getProjects,
  });

  const [modalList, setModalList] = useAtom(modalListAtom);

  const handleAddNewProject = () => {
    setModalList((prev) => [
      ...prev,
      <ProjectCreateModal key={"projectCreateModal"} />,
    ]);
  };

  return (
    <div className={"flex justify-center"}>
      <div className={"flex w-10/12 flex-col"}>
        <div className={"grid grid-cols-3 gap-4"}>
          <button
            className="rounded-md bg-white p-4 shadow-md transition duration-300 hover:shadow-lg"
            onClick={handleAddNewProject}
          >
            <p>Add New</p>
          </button>
          {data &&
            data.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
