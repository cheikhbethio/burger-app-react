import React, { Component } from 'react'
import Aux from '../../../wrappers/Wrapper';
import cssClasses from './Modal.css'
import Backdrop from '../Backdrop/Backdrop.jsx';


class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.show !== nextProps.show || this.props.children !== nextProps.children;
    }
    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} />
                <div
                    className={cssClasses.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    };
}

export default Modal;