import { RenderTwig } from '@wingsuit-designsystem/storybook';
import React from 'react';
import 'templates/docu';

export default {
  title: 'Pages/Docu',
  parameters: {
    layout: 'fullscreen',
  },
};

const template = require('./docu.twig');

export const Article = () => <RenderTwig data={template}></RenderTwig>;
