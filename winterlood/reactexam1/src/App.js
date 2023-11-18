import './App.css';
import React from 'react';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';

function App() {
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    initialValue: 5
  }
  return (
    <Container>
      <div>
        <MyHeader/>
        <Counter {...counterProps}/>
      </div>
    </Container>
  );
}

export default App;
