import { useState } from "react";
import Button from "src/components/button/Button";
import Chat from "src/components/chat/Chat";
import Icons from "src/components/icons/Icons";
import Profile from "src/components/profile/Profile";

import EditMode from "./EditMode";
import ViewMode from "./ViewMode";

const DocumentPage = () => {
  const [mode, setMode] = useState<"edit" | "view">("view");

  return mode === "view" ? (
    <ViewMode setMode={setMode} />
  ) : (
    <EditMode setMode={setMode} />
  );
};

export default DocumentPage;
