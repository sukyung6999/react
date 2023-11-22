import { useState } from "react";

function LifeCycle() {
  const [state, setState] = useState(false);
  const toggle = () => setState(!state);

  return (
    <div style={{padding: 20}}>
      <button onClick={() => toggle()}>ON/OFF</button>
      {state && <p>Unmount Testing Component</p>}
    </div>
  )
}
export default LifeCycle;