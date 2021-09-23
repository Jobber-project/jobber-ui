import React from 'react'
import styled from 'styled-components'

const Container = styled.button``

type ButtonProps = {
  children?: React.ReactNode
}

function Button({ children }: ButtonProps) {
  return <Container>{children}</Container>
}

export default Button
