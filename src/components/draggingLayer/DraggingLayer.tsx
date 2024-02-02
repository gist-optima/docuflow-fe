import { useAtom } from "jotai";
import { useState } from "react";
import { draggedItemAtom } from "src/store";

interface DraggingLayerProps {}

const DraggingLayer = ({}: DraggingLayerProps) => {
  const [draggedItem, setDraggedItem] = useAtom(draggedItemAtom);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className={"fixed h-full w-full"}
      onMouseMove={(e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }}
    >
      {draggedItem && (
        <div
          className={"fixed"}
          style={{
            top: `${mousePosition.y}px`,
            left: `${mousePosition.x}px`,
          }}
        >
          {draggedItem}
        </div>
      )}
    </div>
  );
};

export default DraggingLayer;
