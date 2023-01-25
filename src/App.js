import { useState, useEffect } from "react";

function Hello() {
  // 함수 만들어서 길게 작성
  // function byFn() {
  //   console.log("bye!");
  // }
  // function hiFn() {
  //   console.log("created!");
  //   return byFn;
  // }
  // useEffect(hiFn, []);

  // useEffect 내부에 모두 작성
  useEffect(()=>{
    console.log("hi!");
    return () => console.log("bye!");
  }, []);

  return (
    <h1>Hello</h1>
  );
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  }
  return (
    <div>
      {showing ? <Hello></Hello> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
