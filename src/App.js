import React, { useState, useCallback, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import UserPage from './user/pages/UserPage';
import NewPlace from './products/pages/NewPlace';
import UserPlaces from './products/pages/UserPlaces';
import UpdatePlace from './products/pages/UpdatePlace';
import MainPage from './products/pages/MainPage';
import Auth from './user/pages/Auth';
import Header from './shared/components/Header/MainNavigation';
import Footer from './shared/components/Footer/MainFooter';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/user/:userId">
          <UserPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }}
    >
      <Router>
        <Header />
        <main>{routes}</main>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;