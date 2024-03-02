import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UIKIT/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Variant: Story = {
  args: {
    variant: 'primary',
    children: 'CLICK ME',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByText('CLICK ME', {
      selector: 'button',
    });

    userEvent.click(button);
    expect(button).toBeInTheDocument()
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'CLICK ME',
    disabled: true,
  },
  argTypes: {
    type: { control: 'inline-radio', options: ['button', 'submit'] },
    variant: { control: 'inline-radio' }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByText('CLICK ME', {
      selector: 'button',
    });

    expect(button).toBeDisabled()
  },

};

export const Events: Story = {
  args: {
    variant: 'primary',
    children: 'CLICK ME',
  },
  argTypes: {
    //  backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
    onMouseOver: { action: 'onMouseOver' },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByText('CLICK ME', {
      selector: 'button',
    });

    userEvent.click(button);
    userEvent.hover(button);
  },
};
