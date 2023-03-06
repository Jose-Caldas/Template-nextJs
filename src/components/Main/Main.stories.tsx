import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  argTypes: { title: { control: 'text' } }
} as ComponentMeta<typeof Main>

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />

Basic.args = {
  title: 'Template NextJs',
  description:
    'A simple template NextJs, with: ReactJs, ESLint, Jest, React/Testing Library and Styled-Components'
}
