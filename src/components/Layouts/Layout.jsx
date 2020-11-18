/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import Aux from '../../wrappers/Wrapper';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

class Layout extends Component {
    state = { showSideDrawer: false };

    sideDrawerClose = () => {
      this.setState({ showSideDrawer: false });
    }

    toggleSidedrawer = () => {
      this.setState({ showSideDrawer: !this.state.showSideDrawer });
    }

    render() {
      return (
        <Aux>
          <Toolbar toggleSidedrawer={this.toggleSidedrawer} />
          <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClose} />
          <main className={classes.Content}>
            {this.props.children}
          </main>
        </Aux>
      );
    }
}

export default Layout;

// <SideDrawer open={this.state.showSideDrawer} closed={this.state.sideDrawerClose}/>
