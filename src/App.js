import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { photoList: state.photoList };
};
class App extends Component {


renderPhotoLibrary(){
    const photoElmList = [];
        console.log(this.props.photoList);
        this.props.photoList.map(el => {
            photoElmList.push(<span id={el.id} key={el.id}><img src={el.logo} className="App-logo" alt="logo" /></span>);
        });
    return photoElmList;
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.renderPhotoLibrary()}
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
