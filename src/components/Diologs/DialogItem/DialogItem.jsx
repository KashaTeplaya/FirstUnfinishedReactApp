import React from 'react';
import classes from "./../Diologs.module.css"
import { NavLink } from 'react-router-dom';

const DiologItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.diolog + ' ' + classes.active}>
            <NavLink to={path}>{props.personName}</NavLink>
        </div>
    );
}
export default DiologItem;
