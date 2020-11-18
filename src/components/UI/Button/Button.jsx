import React from 'react';
import cssClasses from './Button.css';

const button = (props) => (
  // eslint-disable-next-line react/button-has-type
  <button
    disabled={props.disabled}
    onClick={props.clicked}
    className={[cssClasses.Button, cssClasses[props.btnType]].join(' ')}
  > {props.children}
  </button>
);

export default button;
