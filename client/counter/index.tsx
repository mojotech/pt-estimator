import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as counter from '~/counter/store';
import * as store from '~/store';

type Props = 
  ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

class Counter extends React.Component<Props> {

  handleIncrement = () => this.props.increment();
  handleDecrement = () => this.props.decrement();

  render() {
    const { count } = this.props;
    return (
      <div>
        <p>{count}</p>
        <button onClick={this.handleIncrement}>
          increment
        </button>
        <button onClick={this.handleDecrement}>
          decrement
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: store.State) => ({
  count: state.counter
});

const mapDispatchToProps = (dispatch: store.Dispatch) => ({
  increment: () => dispatch(counter.increment()),
  decrement: () => dispatch(counter.decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
