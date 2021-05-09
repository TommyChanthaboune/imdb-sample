import React from 'react';
import { render, screen } from '@testing-library/react';
import { Rating } from '../Rating';

describe('Rating', () => {
  it('should render correctly', () => {
    const component = render(<Rating score={9.7} />);
    expect(component).toMatchSnapshot();
  });

  it('should render the score', () => {
    render(<Rating score={9.7} />);
    expect(screen.queryByText('9.7')).toBeInTheDocument();
    expect(screen.queryByText('/ 10')).not.toBeInTheDocument();
  });

  it('should render the score and total', () => {
    render(<Rating score={9.7} showTotal />);
    expect(screen.queryByText('9.7')).toBeInTheDocument();
    expect(screen.queryByText('/ 10')).toBeInTheDocument();
  });
});
