import { useAtom } from "jotai";
import { Outlet } from "react-router-dom";
import Header from "src/components/header/Header";
import { modalListAtom } from "src/store";

const Layout = () => {
  const [modalList, setModalList] = useAtom(modalListAtom);

  return (
    <>
      <Header />
      <Outlet />
      {modalList.map((modal, index) => (
        <div
          className={
            "animate-fadeIn fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.3)]"
          }
          onClick={() => setModalList([])}
          key={index}
          style={{
            zIndex: 10 + index,
          }}
        >
          {modal}
        </div>
      ))}
    </>
  );
};

export default Layout;
