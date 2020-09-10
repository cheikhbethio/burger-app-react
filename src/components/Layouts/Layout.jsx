import React from 'react';
import Aux from '../../wrappers/Wrapper';
import classes from './Layout.css'

const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar SideBar Backdrop </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;