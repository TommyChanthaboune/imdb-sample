/* eslint-disable no-console */
import React, { Profiler, ProfilerOnRenderCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { MainHeader } from './components/MainHeader/MainHeader';
import { Browse } from './pages/Browse/Browse';
import { Detail } from './pages/Detail/Detail';
import { NotFound } from './pages/NotFound/NotFound';

const callback: ProfilerOnRenderCallback = (
  id,
  phase,
  actualTime,
  baseTime,
  startTime,
  commitTime
) => {
  // I know this circumvents the original ask but this is how I know to get timing metrics
  if (phase === 'mount') {
    console.debug('========================');
    console.debug('Actual time:', Math.round(actualTime));
    console.debug('Base time:', Math.round(baseTime));
    console.debug('Start time:', Math.round(startTime));
    console.debug('Commit time:', Math.round(commitTime));
  }
};

const App = () => (
  <Profiler id="app" onRender={callback}>
    <MainHeader />
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/browse" exact component={Browse} />
        <Route path="/detail" exact component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </Profiler>
);

export default App;
