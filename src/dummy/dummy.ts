import { SnippetKind } from "src/types/types";

export const peoples: {
  name?: string;
  description?: string;
  image?: string;
}[] = [
  {
    name: "Dohyun-Ko",
    description: "Front-end Developer",
    image: "https://i.pravatar.cc/300",
  },
  {
    name: "IkJun Choi",
    description: "Mobile-App Developer",
    image: "https://i.pravatar.cc/301",
  },
  {
    name: "Inseon Hwang",
    description: "AI Engineer",
    image: "https://i.pravatar.cc/302",
  },
  {
    name: "ParkJumyung",
    description: "AI Engineer",
    image: "https://i.pravatar.cc/303",
  },
  {
    name: "Siwon Park",
    description: "Back-end Developer",
    image: "https://i.pravatar.cc/304",
  },
];

export const snippets: {
  id: number;
  title: string;
  content?: string;
  image?: string;
  kind: SnippetKind;
}[] = [
  {
    id: 1,
    kind: SnippetKind.Document,
    title: "기후 변화란?",
    content:
      "기후 위기, 기후 비상사태 혹은 기후 변화는 지구 온난화처럼 지구의 평균 기온이 점진적으로 상승하면서 전지구적 기후 패턴이 급격하게 변화하는 상태를 의미합니다. 이러한 변화는 주로 인간 활동으로 인한 온실 가스 배출 증가가 주요 원인으로 지목되며, 이는 탄소 배출, 화석 연료 사용, 산림 파괴 등 다양한 인간의 활동에서 비롯됩니다. 이로 인해 극한 기상 현상이 빈번하게 발생하고, 해수면 상승, 빙하의 녹음, 생태계 변화 등 다양한 부정적 영향을 초래하고 있습니다. 이에 대응하기 위해 전 세계적으로 온실 가스 감축, 재생 가능 에너지의 활용 증가, 탄소 중립 목표 설정 등 다양한 노력이 진행되고 있습니다. 기후 위기에 대한 대응은 더 이상 미룰 수 없는 중요한 과제가 되었으며, 국제 사회의 긴밀한 협력과 각국의 적극적인 참여가 요구됩니다.",
  },
  {
    id: 2,
    kind: SnippetKind.Image,
    title: "기후 변화 그래프",
    image: "https://i.pravatar.cc/310",
  },
  {
    id: 3,
    kind: SnippetKind.Document,
    title: "기후 변화 대응 방안",
    content:
      "기후 변화에 대응하는 주요 대책으로는 온실 가스 배출을 감소시키는 것이 중요한데, 이를 위해 화석 연료 사용을 줄이고 재생 가능 에너지로의 전환, 에너지 효율성 향상, 산림 보호 및 조림 활동, 지속 가능한 농업 방법 채택, 그리고 탄소 포집 및 저장 기술의 발전이 포함됩니다. 또한, 기후 변화는 국경을 넘는 문제이므로 국제 협력을 강화하고, 교육을 통해 대중의 인식을 높이는 것도 필수적입니다. 이와 함께, 정부 차원에서 정책과 법률을 마련하여 이러한 변화를 촉진하고, 재생 가능 에너지 및 지속 가능한 프로젝트에 대한 투자와 재정 지원을 확대하는 것도 중요한 역할을 합니다. 이러한 조치들은 서로 연계되어 있으며, 효과적인 기후 변화 대응을 위해 함께 진행되어야 합니다.",
  },
];
