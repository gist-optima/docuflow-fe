import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import DocumentPage from "./pages/document/DocumentPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>

      <DocumentPage />
    </div>
  );
}

export default App;
