import React from "react";

function EmotionItem({
  onClick,
  isSelected,
  emotion_id,
  emotion_img,
  emotion_description
}) {
  return (
    <div 
      key={emotion_id}
      onClick={() => onClick(emotion_id)}
      className={["EmotionItem", isSelected ? `EmotionItem_on_${emotion_id}` : 'EmotionItem_off' ].join(" ")} >
      <img src={emotion_img} alt="" />
      <span>{emotion_description}</span>
    </div>
  )
}
export default React.memo(EmotionItem);