import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { MainHeader } from './components/MainHeader/MainHeader';
import { Browse } from './pages/Browse/Browse';
import { Detail } from './pages/Detail/Detail';
import { NotFound } from './pages/NotFound/NotFound';

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
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/browse" exact component={Browse} />
        <Route path="/detail" exact component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </>
);

export default App;
