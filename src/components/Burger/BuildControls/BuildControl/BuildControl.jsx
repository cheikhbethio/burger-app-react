import React from 'react';
import cssClasses from './BuildControl.css';

const buildControl = (props) => (
  <div className={cssClasses.BuildControl}>
    <div className={cssClasses.Label}>{props.label}</div>
    <button
      type="button"
      className={cssClasses.Less}
      onClick={props.remove}
      disabled={props.disabled}
    >Less
    </button>
    <button type="button" className={cssClasses.More} onClick={props.add}>More</button>
  </div>
);
export default buildControl;
