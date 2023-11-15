import { BrowserRouter, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

function App() {
  return (
    <BrowserRouter> 
      <MainTitleText>수경의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage/>} />
        <Route path="post-write" element={<PostWritePage/>} />
        <Route path="post/:postId" element={<PostViewPage/>} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
