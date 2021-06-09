import React from 'react';
import classes from "./Diologs.module.css"
import Message from './Message/Message';
import DiologItem from './DialogItem/DialogItem';
const Diologs = (props) => {
   
    let dialogRef = React.createRef();
    let allertDialog = ()=>{
        alert(dialogRef.current.value)
    }
    let diologElement = props.dialogData.
    map(d => <DiologItem personName={d.name} id={d.id} />)

    let messageElement = props.messageData
    .map(m => <Message message={m.messageText} imgData={m.imgData} />)
    return (
        <div className={classes.diologs}>
            <div className={classes.dialogsItem}>
               {diologElement}
            </div>
            <div className={classes.messages}>
               {messageElement} 
               {/* {imgElement} */}
            </div>
            <div>
                <textarea ref={dialogRef}>

                </textarea>
            </div>
            <div>
                <button onClick={allertDialog}>SEND</button>
            </div>


        </div>
    );
}

export default Diologs;
