import styled, { CSSProperties } from "styled-components";

const ReadTheDocs = styled.p<{
  $color?: CSSProperties["color"];
}>`
  color: ${({ $color }) => $color ?? "red"};
`;

function App() {
  return (
    <div className="App">
      <button className={"h-10 w-10 rounded-md bg-slate-100"} />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
