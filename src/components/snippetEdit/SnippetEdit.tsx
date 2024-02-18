import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { deleteSnippet, updateSnippet } from "src/apis/version-api";
import { QueryKey, Snippet } from "src/types/types";

interface SnippetEditProps {
  snippet: Snippet;
  projectId: number;
  versionId: number;
}

const SnippetEdit = ({ snippet, projectId, versionId }: SnippetEditProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(snippet.content);

  const queryClient = useQueryClient();

  const save = useMutation({
    mutationFn: updateSnippet,
    onSuccess: () => {
      setIsEditing(false);
      queryClient.invalidateQueries({
        queryKey: [QueryKey.GetVersion],
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteSnippet,
    onSuccess: () => {
      setIsEditing(false);
      queryClient.invalidateQueries({
        queryKey: [QueryKey.GetVersion],
      });
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate({
      projectId,
      versionId,
      snippetId: snippet.id,
    });
  };

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
      className={"relative w-full p-2"}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", JSON.stringify(snippet));
      }}
    >
      {isEditing ? (
        <>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onBlur={() => handleSave()}
            className={"w-full"}
            rows={7}
          />
          <button
            onClick={handleDelete}
            className={
              "absolute right-0 top-[-10px] text-red-500 hover:text-red-700"
            }
          >
            <p className={"text-xs"}>Delete</p>
          </button>
        </>
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
