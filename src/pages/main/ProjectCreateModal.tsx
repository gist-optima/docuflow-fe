import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import toast from "react-hot-toast";
import { createProject } from "src/apis/project-api";
import Button from "src/components/button/Button";
import Modal from "src/components/modal/Modal";
import { modalListAtom } from "src/store";
import { QueryKey } from "src/types/types";

interface ProjectCreateModalProps {}

const ProjectCreateModal = ({}: ProjectCreateModalProps) => {
  const [, setModalList] = useAtom(modalListAtom);

  const handleCloseModal = () => {
    setModalList((prev) => prev.slice(0, -1));
  };

  const queryClient = useQueryClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = (e.target as HTMLFormElement).projectName.value;
    const description = (e.target as HTMLFormElement).projectDescription.value;

    try {
      const response = await createProject({ name, description });

      toast.success("Project created successfully");
      queryClient.invalidateQueries({
        queryKey: [QueryKey.GetProjects],
      });
      setModalList((prev) => prev.slice(0, -1));
    } catch (error) {
      toast.error("Failed to create project");
    }
  };

  return (
    <Modal>
      <form onSubmit={handleSubmit} className={"flex flex-col gap-2"}>
        <h1 className="text-xl font-semibold">Create New Project</h1>

        <div className="flex flex-col">
          <label htmlFor="projectName" className="text-sm text-gray-500">
            Project Name
          </label>
          <input
            type="text"
            name="projectName"
            id="projectName"
            className="rounded-md border border-gray-300 p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="projectDescription" className="text-sm text-gray-500">
            Project Description
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            className="rounded-md border border-gray-300 p-2"
          />
        </div>

        <div className="flex justify-end gap-2">
          <Button
            type="button"
            className="rounded-md border border-gray-300 p-2"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="rounded-md bg-blue-500 p-2 text-white"
          >
            Create
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ProjectCreateModal;
