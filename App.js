import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css'; 
import Body from './components/Body';
import Home from './components/Home';
import Blog from './components/Blog';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {nama: 'tutor blending', aplikasi:'photoshop'}
  }

  _ubahnama = () => this.setState({nama: 'tutor manipulasi', aplikasi: 'adobe after effect'})
  _ubahnama2 = (namabaru) => this.setState({ nama: namabaru })
  _ubahaplikasi2 = (aplikasibaru) => this.setState({ aplikasi: aplikasibaru })

  render() {
    return (
      <div className='App'>
        <hr></hr>
        <div className='header'>
          <strong>tutorial desain dan editing</strong>
        </div>
        <hr></hr>
        <div>
          nama : {this.state.nama}
        </div>
        <div>
          aplikasi : {this.state.aplikasi}
        </div>
        <Body
        _ubahnama={this._ubahnama}
        _ubahnama2={this._ubahnama2}
        _ubahaplikasi2={this._ubahaplikasi2}
        ></Body>
        <br></br>
        <Blog />
        <Home />
      </div>
    );
  }
}

export default App;
