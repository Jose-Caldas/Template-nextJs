import GlobalStyles from '../src/styles/global'
import { StoryFn } from '@storybook/addons'
import React from 'react'

const withGlobalStyles = (storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
)

export default withGlobalStyles
