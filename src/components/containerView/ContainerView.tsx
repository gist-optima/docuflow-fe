import { Container, Snippet } from "src/types/types";

interface ContainerViewProps {
  container: Container;
}

const ContainerView = ({ container }: ContainerViewProps) => {
  const children: (Snippet | Container)[] = [
    ...container.Snippet,
    ...container.child,
  ].sort((a, b) => a.order - b.order);

  return (
    <div className={"container-style w-full gap-2"}>
      <p className={"text-lg font-bold"}>{container.name}</p>

      {children.map((child, index) => {
        if (Object.hasOwn(child, "indicator")) {
          // child is Snippet
          return (
            <p key={Math.random()} className={"text-sm"}>
              {(child as Snippet).content}
            </p>
          );
        } else {
          return (
            <ContainerView key={Math.random()} container={child as Container} />
          );
        }
      })}
    </div>
  );
};

export default ContainerView;
