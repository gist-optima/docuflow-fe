import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { addUserToProject } from "src/apis/project-api";
import { searchUsers } from "src/apis/user-api";
import Modal from "src/components/modal/Modal";
import { QueryKey, User } from "src/types/types";

interface UserAddModalProps {
  projectId: number;
}

const UserAddModal = ({ projectId }: UserAddModalProps) => {
  const [keyword, setKeyword] = useState("");
  const [searched, setSearched] = useState<Omit<User, "name">[]>([]);

  useEffect(() => {
    searchUsers({ keyword }).then((res) => setSearched(res));
  }, [keyword]);

  const queryClient = useQueryClient();

  const handleUserSelect = (userId: number) => {
    addUserToProject({ projectId, userId })
      .then(() => {
        toast.success("유저가 추가되었습니다");
        queryClient.invalidateQueries({
          queryKey: [QueryKey.GetProject],
        });
      })
      .catch(() => {
        toast.error("유저 추가에 실패했습니다");
      });
  };

  return (
    <Modal className={"w-80"}>
      <div className={"flex flex-col gap-2"}>
        <p className={"text-lg font-medium"}>
          추가할 유저 이메일을 검색해주세요
        </p>

        <input
          value={keyword}
          placeholder={"유저 이메일"}
          onChange={(e) => setKeyword(e.target.value)}
          className="rounded-md border border-gray-300 p-2"
        />
      </div>

      <div className={"mt-4 flex w-full flex-col"}>
        {searched.map((user) => (
          <button
            onClick={() => handleUserSelect(user.id)}
            key={user.id}
            className={"flex w-full p-2 hover:bg-blue-100"}
          >
            <p>{user.email}</p>
          </button>
        ))}
      </div>
    </Modal>
  );
};

export default UserAddModal;
