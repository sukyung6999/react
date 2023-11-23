import { useEffect, useState } from "react";

function MountCmt () {
  useEffect(() => {
    console.log('mount')

    return () => console.log('unmount')
  })
  return <p>Unmount Testing Component</p>
}

function LifeCycle() {
  const [state, setState] = useState(false);
  const toggle = () => setState(!state);

  return (
    <div style={{padding: 20}}>
      <button onClick={() => toggle()}>ON/OFF</button>
      {state && <MountCmt/>}
    </div>
  )
}
export default LifeCycle;