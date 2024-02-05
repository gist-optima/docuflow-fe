import React, { useEffect, useRef, useState } from "react";
import Icons from "src/components/icons/Icons";
import Snippet from "src/components/snippet/Snippet";
import { peoples, snippets } from "src/dummy/dummy";

const PullRequestPage = () => {
  const leftDivRef = useRef<HTMLDivElement>(null);
  const [rightDivHeight, setRightDivHeight] = useState("auto");
  const [loadedImages, setLoadedImages] = useState(0);

  // centerPosition 상태를 직접 업데이트하는 대신, 이미지 로드 시나 윈도우 리사이즈 시에 위치를 재계산
  const [positions, setPositions] = useState<number[]>([]);

  const snippetContainerRef = useRef<HTMLDivElement>(null);

  const updatePositions = () => {
    if (leftDivRef.current) {
      // Snippets의 중앙 위치를 다시 계산
      for (let i = 0; i < leftDivRef.current.children.length; i++) {
        const child = leftDivRef.current.children[i];
        const childTop = (child as HTMLElement).offsetTop;
        const childHeight = child.clientHeight;
        setPositions((prev) => {
          const newPositions = [...prev];
          newPositions[i] = childTop - childHeight / 1.2;
          console.log(newPositions);
          return newPositions;
        });
      }
      console.log(positions);
    }
    if (snippetContainerRef.current) {
      setRightDivHeight(`${snippetContainerRef.current.offsetHeight}px`);
    }
  };

  // 이미지 로딩 완료 핸들러
  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    // 모든 이미지가 로드될 때마다 위치 재계산
    updatePositions();
  }, [leftDivRef.current, loadedImages, rightDivHeight]);

  useEffect(() => {
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, [positions]);

  return (
    <div className={"flex flex-col items-center"}>
      <div className={"grid w-10/12 grid-cols-[1fr_300px] items-start gap-4"}>
        <div className={"flex flex-col gap-3"}>
          {" "}
          {/* 왼쪽 div에 ref 연결 */}
          <div
            className={
              "flex flex-col items-center gap-3 rounded-lg border border-gray-300 p-5"
            }
            ref={snippetContainerRef}
          >
            <p className={"text-2xl font-bold"}>
              {"기후 변화와 이를 해결하기 위한 기술들"}
            </p>
            <div className="flex  flex-col items-center gap-3" ref={leftDivRef}>
              {snippets.map((snippet, index) => (
                <div
                  key={snippet.id}
                  className={`border-nonep-3 w-fit rounded-md border-none p-4 ${snippet.content ? "bg-green-100" : ""}`}
                >
                  {snippet.content ? (
                    <p key={snippet.id} className="leading-6">
                      {snippet.content}
                    </p>
                  ) : snippet.image ? (
                    <img
                      key={snippet.id}
                      src={snippet.image}
                      alt="image"
                      onLoad={handleImageLoad}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 오른쪽 div에 동적으로 높이 설정 */}
        <div
          style={{ height: rightDivHeight }}
          className={"flex flex-col gap-2 rounded-lg bg-slate-100 p-3"}
        >
          <p className={"text-lg"}>AI 변화 감지</p>
          {positions.map((center, index) => (
            <div key={index}>
              <div
                style={{
                  position: "relative",
                  top: `${center}px`,
                  height: "fit-content",
                  width: "100%",
                }}
                className={"rounded-lg bg-green-50 p-3"}
              >
                <p>Snippet 위치에 맞춘 새로운 Div</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PullRequestPage;
