import React, { useEffect, useState } from 'react';

const UnmountComponent = () => {
  useEffect(() => {
    console.log('mount쥬')
    return () => {
      console.log('Unmount이쥬?');
    }
  }, [])
  return <p>Unmount Testing Component</p>
}

function LifeCycle() {
  const [state, setState] = useState(false);
  const toggle = () => setState(!state)

  return (
    <div style={{padding: 20}}>
      <button onClick={() => setState(toggle)}>ON/OFF</button>
      {state && <UnmountComponent/>}
    </div>
  )
}
export default LifeCycle;