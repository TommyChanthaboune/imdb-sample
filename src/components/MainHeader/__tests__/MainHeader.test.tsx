import React from 'react';
import { render } from '@testing-library/react';
import { MainHeader } from '../MainHeader';

describe('SectionTitle', () => {
  it('should render correctly', () => {
    const component = render(<MainHeader />);
    expect(component).toMatchSnapshot();
  });
});
