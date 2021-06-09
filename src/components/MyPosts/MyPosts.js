import React from 'react';
import classes from "./MyPosts.module.css"
import Post from './Post/Post';


const MyPosts = (props) => {
let postElement = props.postData
.map(p => <Post message={p.postMessage} likeCount={p.likeCount}/> )
let postRef = React.createRef();

 let addPost = () =>{
   let addtxt = postRef.current.value;
   props.addPost(addtxt) 
 }

 debugger;

  return(
  
    <div>
        <div>
         <span className={classes.item}>My posts</span> 
          <div>
            <textarea ref={postRef}></textarea>
            <button onClick={addPost}>Опубликовать</button>
          </div>
          <div>
          {postElement}
          </div>
        </div>
      </div>
  );
}

export default MyPosts;
