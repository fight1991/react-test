import React from 'react';
import Parent from '@/pages/parent'
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as numActions from '@/actions/count'
function App(props) {
  return (
    <div className="App">
    <div>{props.counter}</div>
    <button onClick={() => props.counterActions.addNum(2)} style={{color: 'red'}}>增加数据</button>
    <button onClick={() => props.counterActions.reduceNum(3)} style={{color: 'green'}}>减少数据</button>
      <Parent></Parent>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    user: state.user
  }
}
const mapActionsToProps = (dispatch) => {
  return {
    counterActions: bindActionCreators(numActions, dispatch)
  }
}
export default connect(mapStateToProps, mapActionsToProps)(App);
