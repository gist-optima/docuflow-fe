import toast from "react-hot-toast";
import Button from "src/components/button/Button";

import ApprovalImage from "./assets/approval.png";
import GrammarImage from "./assets/grammar.png";
import PlagiarismImage from "./assets/plagiarism.png";
import PostManagementImage from "./assets/post-management.png";

const ToolCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={"relative rounded-lg border border-gray-300 bg-slate-100 p-3"}
    >
      <div className={"flex items-center gap-4"}>
        <img src={image} alt={title} width={"60px"} />

        <div className={"flex flex-col"}>
          <p className={"text-lg font-medium"}>{title}</p>
          <p className={"text-sm"}>{description}</p>
        </div>
      </div>

      <Button
        className={"absolute right-2 top-2 bg-white px-3 py-1"}
        onClick={() => {
          toast.error("준비중입니다.");
        }}
      >
        <p className={"text-sm"}>설치하기</p>
      </Button>
    </div>
  );
};

const ToolPage = () => {
  return (
    <div className={"flex flex-col items-center"}>
      <div className={"flex w-10/12 flex-col gap-2"}>
        <p className={"text-2xl font-medium"}>자동화 툴 플러그인 설치</p>
        <p className={"text-gray-500"}>
          자동화 툴을 프로젝트에 연결하여 업무의 생산성을 더욱 높여보세요
        </p>

        <div className={"mt-4 grid w-full grid-cols-2 gap-4"}>
          <ToolCard
            image={GrammarImage}
            title={"문법 검사 자동화"}
            description={
              "병합 과정에서 틀린 문법이 있다면 자동으로 수정해드려요"
            }
          />
          <ToolCard
            image={PlagiarismImage}
            title={"표절 검사 자동화"}
            description={
              "표절한 문서로 분류되지 않는지 자동으로 검사해요. 그리고 출처를 밝히지 않은 부분이 있다면 알려드려요."
            }
          />
          <ToolCard
            image={ApprovalImage}
            title={"결재 파이프라인"}
            description={
              "결재받을 문서가 있다면 결재 파이프라인을 통해 직접 찾아가지 않고도 결재받을 수 있어요."
            }
          />
          <ToolCard
            image={PostManagementImage}
            title={"사후 문서 관리"}
            description={
              "문서를 작성할 때 사용한 정보 조각의 데이터가 변경되거나 유효하지 않게될 때 자동으로 반영해드려요."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ToolPage;
