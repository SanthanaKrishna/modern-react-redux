import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GoeLoaction from '../src/geoLocation/index';
import ImageSearch from '../src/imageSearch/index';
import VideoSearch from '../src/videoSearch/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<VideoSearch />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
