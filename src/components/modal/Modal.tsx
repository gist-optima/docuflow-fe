import { useAtom } from "jotai";
import { HTMLAttributes, useEffect } from "react";
import { modalListAtom } from "src/store";
import { twMerge } from "tailwind-merge";

const Modal = ({ className, children }: HTMLAttributes<HTMLDivElement>) => {
  const [, setModalList] = useAtom(modalListAtom);

  useEffect(() => {
    const listenBackEvent = (e: any) => {
      (() => setModalList((prev) => prev.slice(0, -1)))();
    };
    if (window.history.state.name !== "preventBack") {
      window.history.pushState(
        {
          name: "preventBack",
        },
        "",
        window.location.href,
      );
    }

    window.addEventListener("popstate", listenBackEvent);
    return () => {
      window.removeEventListener("popstate", listenBackEvent);
    };
  }, []);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={twMerge(
        "relative flex flex-col items-center rounded-lg bg-white p-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Modal;
