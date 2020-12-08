import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Cart } from './pages/';
import { Header } from './containers/';

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart/">
            <Cart />
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default App;
