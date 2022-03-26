import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'
import { useState } from 'react'

// @ts-ignore
import SuccessIcon from '../shared/icons/circle-check.svg'
import Button from '../Button'

import Menu from '.'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 333px;
  min-height: 333px;
  resize: both;
  overflow: auto;
  border: 1px dashed #7b61ff;
  padding: 50px 20px;
  box-sizing: border-box;
`

const ButtonWrapper = styled.div`
  margin-bottom: 10px;
`
const MenuWrapper = styled.div`
  display: flex;
`

const StyledMenu = styled(Menu)`
  width: 280px;
`

const options = [
  {
    id: '1',
    label: 'normal',
    onClick: () => {
      console.log('Normal')
    },
  },
  {
    id: '2',
    label: 'icon',
    onClick: () => {
      console.log('Icon')
    },
    icon: <SuccessIcon viewBox="0 0 24 24" />,
  },
  {
    id: '3',
    label: 'Disabled',
    onClick: () => {
      console.log('Disabled')
    },
    disabled: true,
  },
]

export function Colors() {
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <ButtonWrapper>
        <Button variant="primary" onClick={() => setOpen(!open)}>
          Open menu
        </Button>
      </ButtonWrapper>
      <MenuWrapper>
        <StyledMenu isVisible={open}>
          <Menu.Item>Menu item 1</Menu.Item>
          <Menu.Item icon={<SuccessIcon viewBox="0 0 24 24" />}>
            Menu item icon
          </Menu.Item>
        </StyledMenu>
      </MenuWrapper>
    </Container>
  )
}

const story: ComponentMeta<typeof Menu> = {
  title: 'Design System/Menu',
  component: Menu,
}

export default story
