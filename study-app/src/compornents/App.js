import React, { Component } from 'react';
import { connect } from 'react-redux'

import { increment, decrement, multiplication } from '../actions'

class App extends Component{
  render() {
    const props = this.props

    return(
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
        <button onClick={props.multiplication}>*</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  multiplication: () => dispatch(multiplication()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)