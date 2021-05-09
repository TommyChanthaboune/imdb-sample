import React from 'react';
import { render, screen } from '@testing-library/react';
import { SectionTitle } from '../SectionTitle';

const getComponent = (section = 'Movie', title = 'Top 5', inline = false) =>
  render(<SectionTitle section={section} title={title} inline={inline} />);

describe('SectionTitle', () => {
  it('should render correctly', () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });

  it('should render correctly when in highlight', () => {
    const component = getComponent('Movie', 'Top 5', true);
    expect(component).toMatchSnapshot();
  });

  it('should have a title & subtitle', () => {
    getComponent();
    expect(screen.queryByText('Movie')).toBeInTheDocument();
    expect(screen.queryByText('Top 5')).toBeInTheDocument();
  });
});
