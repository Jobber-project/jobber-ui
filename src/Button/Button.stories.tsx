import React from 'react'

import Button from './Button'

export function AllButtons() {
  return (
    <>
      <Button>Button</Button>
    </>
  )
}

AllButtons.storyName = 'All'

const story = {
  title: 'Design System/Button',
  component: Button,
}

export default story
