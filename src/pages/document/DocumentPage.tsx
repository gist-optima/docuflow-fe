import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useParams } from "react-router-dom";
import { getProject } from "src/apis/project-api";
import Button from "src/components/button/Button";
import Chat from "src/components/chat/Chat";
import Icons from "src/components/icons/Icons";
import Profile from "src/components/profile/Profile";
import useNeedSignIn from "src/hooks/useNeedSignIn";
import { DetailedProject, Project, QueryKey } from "src/types/types";

import EditMode from "./EditMode";
import ViewMode from "./ViewMode";

const DocumentPage = () => {
  useNeedSignIn();
  const [mode, setMode] = useState<"edit" | "view">("view");

  const { id } = useParams<{ id: string }>();

  const { data } = useQuery({
    queryKey: [QueryKey.GetProject, { id: id || "" }],
    queryFn: getProject,
    enabled: !!id,
  });

  if (!data) return <></>;

  return mode === "view" ? (
    <ViewMode setMode={setMode} project={data} />
  ) : (
    <EditMode setMode={setMode} project={data} />
  );
};

export default DocumentPage;
