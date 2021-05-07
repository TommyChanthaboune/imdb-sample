import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
/**
 * This function is used to simulate performance benchmarking.
 *
 * Should you choose to complete this step, this
 * function should be called only on first page load.
 * */

export const trackInitialLoad = () => {
  console.log('First page load');
};

/**
 * This function is used to simulate performance benchmarking.
 *
 * Should you choose to complete this step, this
 * function should be called only once the page has completely
 * loaded.
 * */

export const trackPageCompletedLoading = () => {
  console.log('Page done loading');
};

const App = () => (
  <>
    <MainHeader />
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </>
);

export default App;
