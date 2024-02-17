import { useQuery } from "@tanstack/react-query";
import { getVersion } from "src/apis/version-api";
import ContainerView from "src/components/containerView/ContainerView";

interface ViewerProps {
  projectId: number;
  versionId: number;
}

const Viewer = ({ projectId, versionId }: ViewerProps) => {
  const { data } = useQuery({
    queryKey: [
      "version",
      {
        projectId,
        versionId,
      },
    ],
    queryFn: getVersion,
  });

  return (
    <div>
      {data?.firstLayerContainer[0] && (
        <ContainerView container={data.firstLayerContainer[0]} />
      )}
    </div>
  );
};

export default Viewer;
