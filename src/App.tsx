import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '@pages/auth/login/login';
import { RequestPrice } from '@pages/requestPrice/requestPrice';
import { Plan } from '@pages/plan/plan';
import { Layout } from '@components/generic/layout/layout';
import { AuthProvider } from '@hooks/useAuthContext';
import { PrivateRoute } from '@components/generic/privateRoute/privateRoute';

export const App: React.FC = () => (
  <AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />

        <PrivateRoute path="*" render={() => (
          <Layout>
            <PrivateRoute exact path="/" component={RequestPrice} />
            <PrivateRoute exact path="/plan" component={Plan} />
          </Layout>
        )} />

      </Switch>
    </BrowserRouter>
  </AuthProvider>


)

export default App;
