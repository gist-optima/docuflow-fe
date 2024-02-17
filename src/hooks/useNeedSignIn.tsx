import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useNeedSignIn = (redirectPath: string = "/login") => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate(redirectPath);
    }
  }, [navigate]);
};

export default useNeedSignIn;
