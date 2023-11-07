import React from "react";

const styles = {
  wrapper: {
    margin: 9,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold"
  },
  commentText: {
    color: "black",
    fontSize: 16
  }
}

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img 
        src="https://commons.wikimedia.org/wiki/File:F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg" 
        style={styles.image} alt="" />
      </div>

      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  )
}

export default Comment;