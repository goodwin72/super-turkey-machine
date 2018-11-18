import React, { Component } from 'react';
import '../styles/Hero.css';
import '../styles/Common.css';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero-wrapper">
          <header>
            <h1>{this.props.header}</h1>
            <p>{this.props.description}</p>
          </header>
          {this.props.children}
          </div>
      </div>
    );
  }
}

export default Hero;