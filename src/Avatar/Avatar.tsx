import React, { FC } from 'react'
import styled from 'styled-components'

// @ts-ignore
import CameraIcon from '../shared/icons/camera.svg'
import COLORS from '../shared/colors'

type SizeTypes = 'small' | 'medium' | 'large' | 'xlarge'
type IconTypes = 'camera'

type AvatarProps = {
  size: SizeTypes
  icon?: IconTypes
  onClick?: () => void
  src?: string
  alt?: string
  id?: string
  name?: string
  className?: string
  disabled?: boolean
}

type IconProps = {
  size: SizeTypes
  icon: IconTypes
  onClick?: () => void
}

type CircleProps = {
  size: SizeTypes
  id?: string
  $disabled: boolean
}

type TextProps = {
  size: SizeTypes
}

const getTextSize = ({ size }: TextProps): number => {
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

const getIcon = (icon: IconTypes): JSX.Element => {
  switch (icon) {
    case 'camera':
    default:
      return <CameraIcon height="16px" width="16" viewBox="0 0 24 24" />
  }
}

const getIconSize = ({ size }: { size: SizeTypes }): number => {
  switch (size) {
    case 'small':
    case 'medium':
    case 'large':
    case 'xlarge':
    default:
      return 20
  }
}

const getCircleSize = ({ size }: { size: SizeTypes }): number => {
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

const getColorFromId = ({ id, $disabled }: CircleProps): string => {
  if ($disabled) return COLORS.mischa
  const firstValueFromId = id?.substring(0, 1) || id
  const generatedNumber = firstValueFromId?.charCodeAt?.(0) ?? 0
  const colorNumber = generatedNumber % 4
  switch (colorNumber) {
    case 0:
      return `${COLORS.razzleDazzleRose}`
    case 1:
      return `${COLORS.cornflowerBlue}`
    case 2:
      return `${COLORS.wildStrawberry}`
    case 3:
      return `${COLORS.salmon}`
    default:
      return `${COLORS.mischa}`
  }
}

const AvatarWrapper = styled.div`
  position: relative;
`

const Circle = styled.div<CircleProps>`
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

const Text = styled.p<CircleProps>`
  margin: 0;
  font-size: ${getTextSize}px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  color: ${props =>
    props.id || props.$disabled ? COLORS.white : COLORS.charade};
`

const ButtonWrapper = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const IconWrapper = styled.div<{ size: SizeTypes }>`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  width: ${getIconSize}px;
  height: ${getIconSize}px;
  border: 1px solid ${COLORS.mischa};
`

const Icon: FC<IconProps> = ({ icon, onClick, size }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <IconWrapper size={size}>{getIcon(icon)}</IconWrapper>
    </ButtonWrapper>
  )
}

const Avatar: FC<AvatarProps> = ({
  src,
  name = 'N N',
  id,
  size,
  className,
  disabled = false,
  onClick,
  icon,
}): JSX.Element => {
  const initials = name
    .toUpperCase()
    .split(' ')
    .slice(0, 2)
    .map(n => n[0])
    .join('')

  return (
    <AvatarWrapper>
      <Circle size={size} id={id} className={className} $disabled={disabled}>
        {src ? (
          <Image src={src} alt={'Avatar'} />
        ) : (
          <Text $disabled={disabled} id={id} size={size}>
            {initials}
          </Text>
        )}
      </Circle>
      {icon && size === 'large' && (
        <Icon size={size} onClick={onClick} icon={icon} />
      )}
    </AvatarWrapper>
  )
}

export default Avatar
