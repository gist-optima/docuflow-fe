import { Version } from "src/types/types";

interface VersionSelectorProps {
  selectedVersion: Version;
  setSelectedVersion: React.Dispatch<React.SetStateAction<Version>>;
  versions: Version[];
}

const VersionSelector = ({
  selectedVersion,
  setSelectedVersion,
  versions,
}: VersionSelectorProps) => {
  return (
    <select
      className={
        "flex items-center gap-1 rounded-md border border-solid border-gray-300 bg-slate-100 p-[6px]"
      }
      value={selectedVersion.id}
      onChange={(e) =>
        setSelectedVersion(
          versions.find((version) => version.id === Number(e.target.value))!,
        )
      }
    >
      {versions.map((version) => (
        <option key={version.id} value={version.id}>
          {version.description}
        </option>
      ))}
    </select>
  );
};

export default VersionSelector;
