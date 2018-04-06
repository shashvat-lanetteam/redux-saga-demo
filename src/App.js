import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {testForSaga} from './actionMethods/testActionMethods';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class App extends Component {
    constructor(){
        super();
        this.state={counter:0}
    }
    incr=()=>{

      this.setState((state)=>{
          console.log('state',state,this.state);
          return{counter:state.counter+1}
      });
      debugger;
        this.setState((state)=>{
            console.log('state',state,this.state);
            return {counter:state.counter+1}
        });
        debugger;
        this.setState((state)=>{
            console.log('state',state,this.state);
            return {counter:state.counter+1}
        });
        debugger;
    };

  render() {
      console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <img src='favicon.ico' />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            <button onClick={this.props.gg}>click me!</button>
            {this.state.counter}
            <button onClick={this.incr}>incr+3</button>
        </p>
      </div>
    );
  }
}
const gg=()=>{return{type:'testing'}};
const mapStateToProps=(state)=>{return state};
// const mapDispatchToProps=(dispatch)=>bindActionCreators({testForSaga},dispatch);
export default connect(mapStateToProps,({testForSaga,gg}))(App);
