import React from 'react';
import classes from "./../Diologs.module.css"


   
const Message = (props) => {
  
    return (
        <div className={classes.message}>
            {props.message}
            {/* <img src={props.imgData}></img> */}
        </div>
    );
}
export default Message;
