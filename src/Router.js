import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import ApiWritePage from './pages/ApiWritePage';
import ApiListPage from 'pages/ApiListPage';
import ErrListPage from './pages/ErrListPage';
import ResponseListPage from './pages/ResponseListPage';
import ApiPage from 'pages/ApiPage';
import ErrorPage from 'pages/ErrorPage';
import ResponsePage from 'pages/ResponsePage';
import NotFound from './pages/NotFound';

const Router = () => {
  return (
    <Switch>
      <Route path={['/', '/home']} component={HomePage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/write" component={ApiWritePage} />
      <Route path="/apiList" component={ApiListPage} />      
      <Route path="/errList" component={ErrListPage} />      
      <Route path="/delayList" component={ResponseListPage} />      
      <Route path="/api/:id" component={ApiPage} />
      <Route path="/error/:id" component={ErrorPage} />
      <Route path="/delay/:id" component={ResponsePage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
