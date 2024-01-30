import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <button className={"h-10 w-10 rounded-md bg-slate-100"} />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
