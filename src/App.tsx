import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '@pages/auth/login/login';
import { RequestPrice } from '@pages/requestPrice/requestPrice';

export const App: React.FC = () => (

  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/requestprice" component={RequestPrice} />
    </Switch>
  </BrowserRouter>


)

export default App;
