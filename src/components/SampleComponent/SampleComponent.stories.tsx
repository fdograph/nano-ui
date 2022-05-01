import React from 'react';

import { SampleComponent } from './SampleComponent';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'SampleComponent',
  component: SampleComponent,
};

const Template: ComponentStory<typeof SampleComponent> = (args) => <SampleComponent {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  message: 'Hello',
};
