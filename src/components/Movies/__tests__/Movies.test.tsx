import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Movies } from '../Movies';
import mockData from './mockdata.json';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useMoviesQuery } from '../../../hooks/useMoviesQuery';

jest.mock('../../../hooks/useMoviesQuery.tsx', () => ({
  useMoviesQuery: () => ({
    data: mockData,
    loading: false
  })
}));

describe('Movie Page', () => {
  it('should render correctly', () => {
    const component = render(
      <Router>
        <Movies paging={{ page: 1 }} />
      </Router>
    );

    expect(component).toMatchSnapshot();
  });
});
