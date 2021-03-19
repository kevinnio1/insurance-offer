import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '@pages/auth/login/login';
import { RequestPrice } from '@pages/requestPrice/requestPrice';
import { Plan } from '@pages/plan/plan';
import { Layout } from '@components/common/layout/layout';

export const App: React.FC = () => (

  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/requestprice" component={RequestPrice} />
      <Layout><Route path="/plan" component={Plan} /></Layout>
    </Switch>
  </BrowserRouter>


)

export default App;
