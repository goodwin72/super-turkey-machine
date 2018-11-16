import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

//React Static needs this.
export default App;

if(typeof document !== 'undefined'){
    ReactDOM.render(<App />, document.getElementById('root'));
}
