import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/home-page.component';
import ShopPage from './pages/shoppage/shop-page.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
