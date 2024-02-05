import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import DocumentPage from "./pages/document/DocumentPage";
import PullRequestPage from "./pages/pullrequest/pullRequestPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="mb-4 " />
        <Routes>
          <Route path="/document" element={<DocumentPage />} />
          <Route path="/pullrequest" element={<PullRequestPage />} />
        </Routes>
      </BrowserRouter>
      <div className="mb-4 " />
    </div>
  );
}

export default App;
