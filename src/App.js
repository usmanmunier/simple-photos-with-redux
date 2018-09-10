import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            photoList: [
                {
                    logo: logo,
                    id: 1
                }, {
                    logo: logo,
                    id: 2
                }
            ]
        }
    }

renderPhotoLibrary(){
    const photoElmList = [];
        console.log(this.state.photoList);
        this.state.photoList.map(el => {
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

export default App;
