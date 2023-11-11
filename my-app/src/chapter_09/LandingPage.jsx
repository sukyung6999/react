import { useState } from "react";
import ToolBar from "./ToolBar";

function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogout = () => {
    setIsLoggedIn(false);
  }

  const onClickLogin = () => {
    setIsLoggedIn(true);
  }
  
  return (
    <div>
      <ToolBar 
      isLoggedIn={isLoggedIn}
      onClickLogout={onClickLogout}
      onClickLogin={onClickLogin} />
      <div style={{padding: 16}}>소플과 함께하는 리액트 공부!</div>
    </div>
  )
}

export default LandingPage;