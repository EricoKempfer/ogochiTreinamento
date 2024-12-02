import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import App from './_app';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <App></App>

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
