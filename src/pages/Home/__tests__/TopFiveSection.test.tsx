import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { TopFiveSection } from '../TopFiveSection';
import mockData from './mockdata.json';


describe('TopFiveSection', () => {
  it('should render correctly', () => {
    const component = render(
      <Router>
        <TopFiveSection movies={mockData} />
      </Router>
    );

    expect(component).toMatchSnapshot();
  });
});
