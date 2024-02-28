// Card.stories.tsx
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card.tsx';

const meta = {
  title: 'UIKIT/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: 'text' },
    buttonLabel: { control: 'text' },
    buttonUrl: { control: 'text' },
  },
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof meta>;
export default meta;


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    title: 'My Awesome Card',
    buttonLabel: 'CLICK ME',
    buttonUrl: 'http://www.google.com',
    children: 'lorem ipsum...'
  },
};

