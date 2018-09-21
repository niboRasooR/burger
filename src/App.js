import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout'
import BurgerBuilder from './containers/BurgerBuilder'


import Checkout from './containers/Checkout/Checkout'


// <BurgerBuilder pois ja Route tilalle

//   "/ " ladataan aina
//   silloin järjestys on oltava /checkout ja sitten /
// mutta kun käyttää exact sanaa niin  "/" estyy

// Switch tekee sen että ladataan vain yksi komponentti
// eli tässä se, joka vastaa jotain polkua

// BurgerBuilderin sisäisest komponentit eivät saa
// pääsyä Routen erikois-propeihin, mutta katso
// Burger.js !!! Siellä advanced ominaisuus, jolla se onnistuu
// injektoimalla
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route  path="/checkout" component={Checkout} />
            <Route  path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
