/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Aux from '../Wrapper';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => class extends Component {
        // eslint-disable-next-line react/state-in-constructor
        state = {
          error: null,
        }

        // eslint-disable-next-line react/no-deprecated
        componentWillMount() {
          this.reqInterceptor = axios.interceptors.request.use((req) => {
            this.setState({ error: null });
            return req;
          });
          this.resInterceptor = axios.interceptors.response.use((res) => res, (error) => {
            this.setState({ error });
          });
        }

        componentWillUnmount() {
          axios.interceptors.request.eject(this.reqInterceptor);
          axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmHandler = () => {
          this.setState({ error: null });
        }

        render() {
          return (
            <Aux>
              <Modal
                show={this.state.error}
                closeModal={this.errorConfirmHandler}
              >
                {this.state.error ? this.state.error.message : null}
              </Modal>
              <WrappedComponent {...this.props} />
            </Aux>
          );
        }
};

export default withErrorHandler;
