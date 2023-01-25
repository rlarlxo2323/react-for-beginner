// import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  console.log("i run all time");
  const iRunOnlyOne = () => {
    console.log("i run one time");
  };
  useEffect(iRunOnlyOne, []);
  useEffect(() => {
    console.log("search....");
  }, [keyword])
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
      <h1 className={styles.title}>
        {counter}
      </h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
