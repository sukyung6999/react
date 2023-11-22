import React, { useEffect, useState } from "react";

const CounterA = React.memo(({count}) => {
  useEffect(() => {
    console.log(`CounterA Update - count : ${count}`)
  })
  return <div>{count}</div>
})
const CounterB = ({obj}) => {
  useEffect(() => {
    console.log(`CounterB Update - obj : ${obj.count}`)
  })
  return <div>{obj.count}</div>
}

const areEqual = (prevProps, nextProps) => {
  // if (prevProps.obj.count === nextProps.obj.count) {
  //   return true // 이전 프롭스와 현재 프롭스가 같다 => 리렌더링을 일으키지 않게 됨
  // } 
  // return false // 이전 프롭스와 현재 프롭스가 다른다 => 리렌더링을 일으키게 됨
  return prevProps.obj.count === nextProps.obj.count 
}

const MemoizedCounterB = React.memo(CounterB, areEqual)

function OptimizeTest() {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1
  })
 
  return (
    <div style={{padding: 50}}>
      <div>
        <h2>counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>  
      <div>
        <h2>counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({count: obj.count})}>B button</button>
      </div>
    </div>
  )
}
export default OptimizeTest;