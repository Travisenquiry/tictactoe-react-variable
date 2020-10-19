import React from 'react';
import './NameComponent.css';

const NameComponent = (props) => {
    return (
        <div className="name-input-div">
            Enter name for {props.player}
            <input className={props.player}></input>
        </div>
    )
}

export default NameComponent;