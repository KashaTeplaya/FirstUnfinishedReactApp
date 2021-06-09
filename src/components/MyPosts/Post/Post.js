import React from 'react';
import classes from "./Post.module.css"
const Post = (props) => {
  return(
    <div>
          <div className={classes.content}>
            <img src="https://archilab.online/images/1/123.jpg"/>
          <span className={classes.content}>{props.message}</span>
          <div>
          <span  className={classes.content}>{props.likeCount} Likes </span>
          </div>
          
          </div>
      </div>
  );
}

export default Post;
