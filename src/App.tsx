import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import DocumentPage from "./pages/document/DocumentPage";
import IssuePage from "./pages/issue/IssuePage";
import LoginForm from "./pages/login/loginPage";
import SignupForm from "./pages/login/signupPage";
import PullRequestPage from "./pages/pullrequest/pullRequestPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route
            path="/document"
            element={
              <>
                <Header />
                <DocumentPage />
              </>
            }
          />
          <Route
            path="/pullrequest"
            element={
              <>
                <Header />
                <PullRequestPage />
              </>
            }
          />
          <Route
            path="/issue"
            element={
              <>
                <Header />
                <IssuePage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
