import { Dispatch, SetStateAction, useState } from "react";
import Button from "src/components/button/Button";
import Icons from "src/components/icons/Icons";
import Liquifier from "src/components/liquifier/Liquifier";
import { DetailedProject, Version } from "src/types/types";

import UserSection from "./UserSection";
import Viewer from "./Viewer";

const title = "기후 변화와 이를 해결하기 위한 기술들";

interface ViewModeProps {
  setMode: Dispatch<SetStateAction<"edit" | "view">>;
  project: DetailedProject;
}

const ViewMode = ({ setMode, project }: ViewModeProps) => {
  const [currentVersion, setCurrentVersion] = useState<Version>(
    project.Version[0],
  );

  return (
    <div className={"flex flex-col items-center"}>
      <div className={"grid w-10/12 grid-cols-[1fr_300px] items-start gap-4"}>
        <div className={"flex flex-col gap-3"}>
          <div className={"flex justify-between"}>
            <select
              className={
                "flex items-center gap-1 rounded-md border border-solid border-gray-300 bg-slate-100 p-[6px]"
              }
              value={currentVersion.id}
              onChange={(e) =>
                setCurrentVersion(
                  project.Version.find(
                    (version) => version.id === Number(e.target.value),
                  )!,
                )
              }
            >
              {project.Version.map((version) => (
                <option key={version.id} value={version.id}>
                  {version.tag} - {version.description}
                </option>
              ))}
            </select>

            <div className={"flex gap-2"}>
              <Liquifier versionId={currentVersion.id} projectId={project.id} />

              <Button
                icon={<Icons.Write />}
                className={"border-0 bg-[#0DA200]"}
                onClick={() => setMode("edit")}
              >
                <p className={"text-sm text-white"}>이어서 작업하기</p>
              </Button>
            </div>
          </div>

          <Viewer projectId={project.id} versionId={currentVersion.id} />
        </div>

        <UserSection project={project} />
      </div>
    </div>
  );
};

export default ViewMode;
