import { useNavigate } from "react-router-dom";
import { Project } from "src/types/types";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/project/${project.id}/document`)}
      className="rounded-md bg-white p-4 shadow-md transition duration-300 hover:shadow-lg"
    >
      <h1 className="text-xl font-semibold">{project.name}</h1>
      <p className="text-sm text-gray-500">{project.description}</p>
    </button>
  );
};

export default ProjectItem;
