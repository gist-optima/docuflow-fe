import { Gitgraph, Mode } from "@gitgraph/react";
import Button from "src/components/button/Button";
import Icons from "src/components/icons/Icons";

interface IssuePageProps {}

const IssuePage = () => {
  return (
    <div className={"flex justify-center"}>
      <div className={"flex w-10/12 flex-col gap-4"}>
        <div className={"flex justify-between"}>
          <Button icon={<Icons.Branch />}>
            <p className={"ml-1 mr-3 text-sm"}>main</p>

            <Icons.Triangle />
          </Button>
          <div className={"flex gap-2"}>
            <Button icon={<Icons.Export />}>
              <p className={"text-sm"}>문서 내보내기</p>
            </Button>

            <Button icon={<Icons.Branch />} className={"border-0 bg-[#0DA200]"}>
              <p className={"text-sm text-white"}>병합 요청하기</p>
            </Button>
          </div>
        </div>
        <div className={"flex gap-4"}>
          <div className={"rounded-lg border border-gray-300 p-5"}>
            <Gitgraph options={{}}>
              {(gitgraph) => {
                const master = gitgraph.branch("main");
                master.commit("첫번째 분기");
                const introduction = gitgraph.branch("서론 작성");
                const body = gitgraph.branch("본론 작성");
                body.commit("본론 틀 작성");
                const conclusion = body.branch("결론 작성");
                introduction.commit("서론 틀 작성");
                // const paper_reading = gitgraph.branch("논문 리딩 결과");

                // Merge `newFeature` into `master`
                // introduction.merge(paper_reading);
              }}
            </Gitgraph>
          </div>

          <div
            className={
              "flex flex-col gap-1 rounded-lg border border-gray-300 p-5"
            }
          >
            <p className={"font-medium"}>논점 생성하기</p>

            <p className={"mt-2 text-xs"}>논점 이름</p>
            <input
              className={"rounded-lg border border-gray-400 p-1 text-xs"}
              placeholder={"논점 이름 입력"}
            />

            <p className={"mt-2 text-xs"}>기반 브랜치 선택</p>
            <Button icon={<Icons.Branch />}>
              <p className={"ml-1 mr-3 text-sm"}>main</p>

              <Icons.Triangle />
            </Button>

            <p className={"mt-2 text-xs"}>논점에 대한 설명</p>
            <textarea
              className={"rounded-lg border border-gray-400 p-1 text-xs"}
              placeholder={"논점에 대한 설명 입력"}
            />

            <p className={"required mt-2 text-xs"}>태그</p>
            <div className={"flex justify-between text-xs"}>
              <label className={"flex items-center gap-2"}>
                <input type="radio" />
                <p>서론</p>
              </label>
              <label className={"flex items-center gap-2"}>
                <input type="radio" />
                <p>본론</p>
              </label>
              <label className={"flex items-center gap-2"}>
                <input type="radio" />
                <p>결론</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuePage;
