import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Layout from "./layout/Layout";
import DocumentPage from "./pages/document/DocumentPage";
import IssuePage from "./pages/issue/IssuePage";
import LoginForm from "./pages/login/loginPage";
import SignupForm from "./pages/login/signupPage";
import MainPage from "./pages/main/MainPage";
import PullRequestPage from "./pages/pullrequest/pullRequestPage";
import PullRequestListPage from "./pages/pullRequestList/PullRequestListPage";
import ToolPage from "./pages/tool/ToolPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/project/:id/document" element={<DocumentPage />} />
            <Route
              path="/project/:id/pullrequests"
              element={<PullRequestListPage />}
            />
            <Route
              path="/project/:id/pullrequest/:pullRequestId"
              element={<PullRequestPage />}
            />
            <Route path="/project/:id/issue" element={<IssuePage />} />
            <Route path="/project/:id/tool" element={<ToolPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
