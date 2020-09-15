import React, { Component } from 'react';
import Aux from '../../wrappers/Wrapper';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css'

class Layout extends Component {
    state = {showSideDrawer: true};
    sideDrawerClose = () => {
       this.setState({ showSideDrawer: false});
    }
    render () { 
       return (
        <Aux>            
            <Toolbar/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.state.sideDrawerClose}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
    )}
}

export default Layout;