import React from 'react';
import ReactDOM from 'react-dom';

const Action = (props) => {
    return(
        <div>
            <button className="big-button" onClick={props.decision} disabled={props.hasOptions>0 ? false : true}>What should I do?</button>
        </div>
    );
}

export default Action;