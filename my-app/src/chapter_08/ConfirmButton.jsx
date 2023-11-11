import React, { useState } from "react";

/* 1) class 컴포넌트로 만든 경우
  class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmed: false,
    }

    this.handleConfirm = this.handleConfirm.bind(this);
  }
  

  handleConfirm() {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }))
  }

  render() {
    return (
      <button
      onClick={this.handleConfirm}
      disabled={this.state.isConfirmed}
      >
        {this.state.isConfirmed ? '확인됨' : '확인하기'}
      </button>
    )
  }
} */
/* 2) class field syntax 사용하기
  class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmed: false,
    }
  }
  
  handleConfirm = () => {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }))
  }


  render() {
    return (
      <button
      onClick={this.handleConfirm}
      disabled={this.state.isConfirmed}
      >
        {this.state.isConfirmed ? '확인됨' : '확인하기'}
      </button>
    )
  }
} */

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(!isConfirmed);
  }

  return (
    <button 
    onClick={handleConfirm}
    disabled={isConfirmed}
    >
      {isConfirmed ? '확인됨' : '확인하기'}
    </button>
  )
}

export default ConfirmButton;