import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '@pages/auth/login/login';

export const App: React.FC = () => (

  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>


)

export default App;
