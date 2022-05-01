import React from 'react';
import { render } from '@testing-library/react';
import { SampleComponent } from './SampleComponent';

describe('SampleComponent', () => {
  it('Should Render sample message', () => {
    const { getByText } = render(<SampleComponent message="SashayAway" />);
    expect(getByText('SashayAway')).not.toBeNull();
  });
});
