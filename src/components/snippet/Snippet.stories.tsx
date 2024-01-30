import { Meta, StoryFn } from "@storybook/react";
import { SnippetKind } from "src/types/types";

import Snippet from "./Snippet";

export default {
  title: "components/module",
  component: Snippet,
} as Meta<typeof Snippet>;

const Template: StoryFn<typeof Snippet> = (args) => <Snippet {...args} />;

export const Default = Template.bind({});
Default.args = {
  kind: SnippetKind.Document,
  title: "IPCC 5차 평가 보고서",
  content:
    "본 보고서에 따르면, 지난 10년간 지구 평균 온도는 전 세계적으로 0.8°C 상승했으며, 이는 주로 인간 활동에 의한 온실 가스 배출 증가에 기인합니다. 이러한 온난화 현상은 해수면 상승, 극심한 기상 이변, 그리고 생물 다양성의 감소와 같은 심각한 환경적, 사회적 영향을 초래하고 있습니다. 보고서는 긴급한 기후 변화 대응 조치의 필요성을 강조하며, 재생 가능 에너지 사용 증대, 탄소 배출 감소 정책, 그리고 국제적 협력의 강화를 주요 해결책으로 제시합니다.",
};
