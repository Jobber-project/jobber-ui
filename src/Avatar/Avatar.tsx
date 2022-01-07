import React, { FC } from 'react'
import styled from 'styled-components'

import COLORS from '../shared/colors'

type SizeTypes = 'small' | 'medium' | 'large' | 'xlarge'

type AvatarProps = {
  size: SizeTypes
  src?: string
  alt?: string
  id: string
  name: string
}

const getTextSize = ({ size }: AvatarProps): number => {
  switch (size) {
    case 'small':
      return 16
    case 'medium':
      return 20
    case 'large':
      return 36
    case 'xlarge':
      return 72
    default:
      return 20
  }
}

const getCircleSize = ({ size }: AvatarProps): number => {
  switch (size) {
    case 'small':
      return 32
    case 'medium':
      return 40
    case 'large':
      return 72
    case 'xlarge':
      return 144
    default:
      return 40
  }
}

const getColorFromId = ({ id }: AvatarProps): string => {
  const idAsNumber = parseInt(id, 10)
  const color = idAsNumber % 4
  switch (color) {
    case 0:
      return `${COLORS.razzleDazzleRose}`
    case 1:
      return `${COLORS.cornflowerBlue}`
    case 2:
      return `${COLORS.wildStrawberry}`
    case 3:
      return `${COLORS.salmon}`
    default:
      return `${COLORS.razzleDazzleRose}`
  }
}

const Circle = styled.div<AvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  width: ${getCircleSize}px;
  height: ${getCircleSize}px;
  border-radius: 50%;
  background-color: ${getColorFromId};
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`

const Text = styled.p`
  margin: 0;
  font-size: ${getTextSize}px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  color: ${COLORS.white};
`

const Avatar: FC<AvatarProps> = props => {
  const { src, name, ...rest } = props
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')

  return (
    <Circle {...props}>
      {src ? (
        <Image src={src} alt={'Avatar'} {...rest} />
      ) : (
        <Text {...props}>{initials}</Text>
      )}
    </Circle>
  )
}

export default Avatar
