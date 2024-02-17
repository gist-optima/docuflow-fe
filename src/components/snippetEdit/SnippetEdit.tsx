import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { updateSnippet } from "src/apis/version-api";
import { Snippet } from "src/types/types";

interface SnippetEditProps {
  snippet: Snippet;
  projectId: number;
  versionId: number;
}

const SnippetEdit = ({ snippet, projectId, versionId }: SnippetEditProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(snippet.content);

  const save = useMutation({
    mutationFn: updateSnippet,
    onSuccess: () => {
      setIsEditing(false);
    },
  });

  const handleSave = () => {
    save.mutate({
      projectId,
      versionId,
      snippetId: snippet.id,
      content,
      type: snippet.type,
      order: snippet.order,
      containerId: snippet.containerId,
    });
  };

  return (
    <div
      id={`${snippet.containerId}-${snippet.order}`}
      className={"w-full"}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", JSON.stringify(snippet));
        console.log("dragging");
      }}
    >
      {isEditing ? (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onBlur={() => handleSave()}
          className={"w-full"}
        />
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className={"w-full p-2 text-left hover:bg-gray-100"}
        >
          <p className={"text-sm"}>{content}</p>
        </button>
      )}
    </div>
  );
};

export default SnippetEdit;
