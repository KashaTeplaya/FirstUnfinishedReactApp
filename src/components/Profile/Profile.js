import React from 'react';
import classes from "./Profile.module.css"
import MyPosts from '../MyPosts/MyPosts';
const Profile = (props) => {
 
  return(
    <div className= {classes.content}>
        <img src ="https://pbs.twimg.com/profile_images/793021684064419840/RjEjM6z5_400x400.jpg"></img>
        <div>ava + description</div>
        
        <MyPosts postData = {props.postData} addPost={props.addPost}/>
      </div>
  );
}

export default Profile;
