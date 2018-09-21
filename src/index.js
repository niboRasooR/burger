import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//Reititystä... tehdään app-const ja
// kääritään se reitittimen sisään

// ja APP.js:ään  import route jne (ks lisää app.js)

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

// Renderiin consti sisään
ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();
