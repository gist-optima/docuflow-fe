import styled, { CSSProperties } from "styled-components";

const ReadTheDocs = styled.p<{
  $color?: CSSProperties["color"];
}>`
  color: ${({ $color }) => $color ?? "red"};
`;

function App() {
  return (
    <div className="App">
      <button className={"w-10 h-10 bg-slate-100 rounded-md"} />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
