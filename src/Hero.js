import React, { Component } from 'react';
import './styles/Hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <header>
          <h1>{this.props.header}</h1>
          <p>{this.props.description}</p>
        </header>
      </div>
    );
  }
}

export default Hero;