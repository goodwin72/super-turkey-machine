import React, { Component } from 'react';
import '../styles/Footer.css';
import WSUgotemEmote from '../assets/img/wsugotem-emote.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="col">
          <p>Created by Jared Goodwin</p>
          <p>© 2018</p>
        </div>

        <div className="col">
          <a href={"https://i.imgur.com/oAqvdAL.gif"}>
            <img src={WSUgotemEmote} alt={"Emote icon from WSU Gotem"} height={30} width={25}/>
          </a>
        </div>

        <div className="col">
          <p>hi james</p>
        </div>
      </footer>
    )
  }
}

export default Footer;