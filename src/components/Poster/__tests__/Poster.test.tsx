import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Poster } from '../Poster';

describe('Poster', () => {
  it('should render correctly', () => {
    const component = render(
      <Router>
        <Poster
          source="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/dal.png&w=100&h=100&transparent=true"
          altText="test alt text"
          id="1234"
        />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });
});
