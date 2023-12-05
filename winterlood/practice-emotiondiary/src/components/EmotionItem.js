import React from "react";

function EmotionItem({
  onClick,
  emotion,
  emotion_id,
  emotion_img,
  emotion_description
}) {
  return (
    <div 
      key={emotion_id}
      onClick={() => onClick(emotion_id)} 
      className={["EmotionItem", emotion === emotion_id ? `EmotionItem_on_${emotion}` : 'EmotionItem_off' ].join(" ")} >
      <img src={emotion_img} alt="" />
      <span>{emotion_description}</span>
    </div>
  )
}
export default React.memo(EmotionItem);