import React, { useState } from "react";

function App(props) {
  let [count, setCount] = useState(1);
  return (
    <div>
      <h1>
        {props.title} kkb {count}
      </h1>
      <button onClick={() => setCount(count + 1)}>累加</button>
    </div>
  );
}

export default <App title="SSR"></App>;
