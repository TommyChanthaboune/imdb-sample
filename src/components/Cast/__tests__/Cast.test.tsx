import React from 'react';
import { screen, render } from '@testing-library/react';
import { Cast } from '../Cast';

describe('SectionTitle', () => {
  it('should render correctly with portrait', () => {
    const component = render(
      <Cast
        portraitPath="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/dal.png&w=100&h=100&transparent=true"
        name="Tommy Chanthaboune"
        character="Developer"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with a placeholder', () => {
    const component = render(
      <Cast name="Tommy Chanthaboune" character="Developer" />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render name and character', () => {
    render(<Cast name="Tommy Chanthaboune" character="Developer" />);
    expect(screen.queryByText('Tommy Chanthaboune')).toBeInTheDocument();
    expect(screen.queryByText('Developer')).toBeInTheDocument();
  });
});
