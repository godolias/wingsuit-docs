import { RenderTwig } from '@wingsuit-designsystem/storybook';
import React from 'react';

export default {
  title: 'Pages/docs',
  parameters: {
    layout: 'fullscreen',
  },
};

const template = require('./docs.twig');

export const Docs = () => <RenderTwig data={template}></RenderTwig>;
