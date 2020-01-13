import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';

import { Home, Cart } from './containers';
import { Header, Footer } from './components';

const App = () => (
  <HashRouter>
    <main>
      <div className='content'>
      {/* <div>
        <h1>hello world!</h1>
        <img className="container__image" alt="react logo" src={reactLogo} />
        <p>If you see this everything is working!</p>
      </div>
      <ul className="left">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul> */}
        <Header/>
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </div>
      <Footer/>
    </main>
  </HashRouter>
);

export default App;
