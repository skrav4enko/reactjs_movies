/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { action } from '@storybook/addon-actions';
import Button from '../app/components/shared/button';
import ButtonGroup from '../app/components/shared/buttonGroup';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

Emoji.story = {
  name: 'with emoji',
};

export const ButtonGroupStory = () => (
  <ButtonGroup>
    <Button size="small" onClick={action('clicked Left')}>
      Left
    </Button>
    <Button size="small" variant="secondary" onClick={action('clicked Middle')}>
      Middle
    </Button>
    <Button size="small" variant="secondary" onClick={action('clicked Right')}>
      Right
    </Button>
  </ButtonGroup>
);

ButtonGroupStory.story = {
  name: 'button group',
};
