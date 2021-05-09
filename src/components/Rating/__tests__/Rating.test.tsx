import React from 'react';
import { render } from '@testing-library/react';
import { Rating } from '../Rating';

describe('Rating', () => {
  it('should render correctly', () => {
    const component = render(<Rating score={9.7} />);
    expect(component).toMatchSnapshot();
  });
});
