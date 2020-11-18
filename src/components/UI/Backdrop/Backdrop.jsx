/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import cssClasses from './Backdrop.css';

// eslint-disable-next-line jsx-a11y/click-events-have-key-events
const backdrop = (props) => (props.show ? <div className={cssClasses.Backdrop} onClick={props.clicked} /> : null);

export default backdrop;
