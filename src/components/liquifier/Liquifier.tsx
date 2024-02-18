import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import toast from "react-hot-toast";
import { liquifySnippets } from "src/apis/ai-api";
import { getVersion } from "src/apis/version-api";
import { modalListAtom } from "src/store";
import { QueryKey } from "src/types/types";
import { stringifyContainer } from "src/utils/utils";

import Button from "../button/Button";
import Icons from "../icons/Icons";
import LiquifierShowModal from "./LiquifierShowModal";

interface LiquifierProps {
  versionId: number;
  projectId: number;
}

const Liquifier = ({ versionId, projectId }: LiquifierProps) => {
  const { data } = useQuery({
    queryKey: [QueryKey.GetVersion, { versionId, projectId }],
    queryFn: getVersion,
  });

  const [, setModalList] = useAtom(modalListAtom);

  const handleLiquify = async () => {
    if (!data) return;

    const { result } = await toast.promise(
      liquifySnippets({
        snippets: stringifyContainer(data.firstLayerContainer[0]),
      }),
      {
        loading: "문서 내보내는 중...",
        success: "문서 내보내기 완료",
        error: "문서 내보내기 실패",
      },
    );

    setModalList((prev) => [
      ...prev,
      <LiquifierShowModal key={"LiquifierShowModal"} content={result} />,
    ]);
  };

  return (
    <Button icon={<Icons.Export />} onClick={handleLiquify}>
      <p className={"text-sm"}>문서 내보내기</p>
    </Button>
  );
};

export default Liquifier;
