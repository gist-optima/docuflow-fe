import { Gitgraph } from "@gitgraph/react";

interface IssueGraphProps {}

const IssueGraph = ({}: IssueGraphProps) => {
  return (
    <div className={"rounded-lg border border-gray-300 p-5"}>
      <Gitgraph options={{}}>
        {(gitgraph) => {
          const master = gitgraph.branch("main");
          master.commit("첫번째 분기");
          const introduction = gitgraph.branch("서론 작성");
          const body = gitgraph.branch("본론 작성");
          body.commit("본론 틀 작성");
          const conclusion = gitgraph.branch("결론 작성");
          introduction.commit("서론 틀 작성");
          conclusion.commit("결론 틀 작성");
          // const paper_reading = gitgraph.branch("논문 리딩 결과");

          // Merge `newFeature` into `master`
          // introduction.merge(paper_reading);
        }}
      </Gitgraph>
    </div>
  );
};

export default IssueGraph;
