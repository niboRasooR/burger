import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducer);

//Reititystä... tehdään app-const ja
// kääritään se reitittimen sisään

// ja APP.js:ään  import route jne (ks lisää app.js)

const app = (
    <Provider store={store}>
         <BrowserRouter>
              <App />
          </BrowserRouter>
    </Provider>
   
);

// Renderiin consti sisään
ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();
