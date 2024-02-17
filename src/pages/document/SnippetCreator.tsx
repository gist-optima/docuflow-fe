interface SnippetCreatorProps {
  projectId: number;
  versionId: number;
  containerId?: number;
}

const SnippetCreator = ({
  projectId,
  versionId,
  containerId,
}: SnippetCreatorProps) => {
  return (
    <div
      className={
        "flex flex-col items-center rounded-lg border border-gray-300 p-5 pt-10"
      }
    >
      <textarea
        className={
          "h-40 w-full resize-none rounded-lg border border-gray-300 p-5"
        }
      />
    </div>
  );
};

export default SnippetCreator;
