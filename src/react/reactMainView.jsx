import { useState } from "react";

export function ReactMainView() {
  const [state, setState] = useState({
    count: 0,
  });

  function handleClick() {
    setState({ count: state.count + 1 });
  }

  return (
    <div>
      <button onClick={handleClick}>count: {state.count}</button>
    </div>
  );
}
