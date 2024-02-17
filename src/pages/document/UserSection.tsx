import { useAtom } from "jotai";
import { useEffect } from "react";
import Profile from "src/components/profile/Profile";
import { modalListAtom } from "src/store";
import { DetailedProject, Project } from "src/types/types";

import UserAddModal from "./UserAddModal";

interface UserSectionProps {
  project: DetailedProject;
}

const UserSection = ({ project }: UserSectionProps) => {
  const [, setModalList] = useAtom(modalListAtom);

  const handleAddClick = () => {
    setModalList((prev) => [
      ...prev,
      <UserAddModal key={"UserAddModal"} projectId={project.id} />,
    ]);
  };

  return (
    <section className={"flex flex-col rounded-lg bg-slate-100 p-3"}>
      <Profile
        name={project.name}
        description={project.description}
        variant={"organization"}
      />

      <div className={"my-3 border-b border-gray-300"} />

      <div className={"flex justify-between"}>
        <p className={"text-sm"}>People</p>
        <button
          className={"rounded-md bg-white p-1 px-2"}
          onClick={handleAddClick}
        >
          <p className={"text-xs"}>Add</p>
        </button>
      </div>

      <div className={"mt-3 flex flex-col gap-2"}>
        {project.users.map((people, index) => (
          <Profile key={index} name={people.name} description={""} />
        ))}
      </div>

      <div className={"my-3 border-b border-gray-300"} />

      <p className={"mb-3 text-sm"}>Chats</p>
    </section>
  );
};

export default UserSection;
