import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "이수경",
    comment: "안녕하세요, 수경입니다."
  },
  {
    name: "이수수",
    comment: "수수깡~ 새우깡 먹고 싶어요~"
  },
  {
    name: "이경이",
    comment: "저는 쌀새우깡이 좋더라구요~"
  },
]

function CommentList(props) {
  return (
    <div>
      {comments.forEach((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment}/>
        )
      } )}
    </div>
  )
}

export default CommentList;