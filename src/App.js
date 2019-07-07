import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/home-page.component';
import ShopPage from './pages/shoppage/shop-page.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
