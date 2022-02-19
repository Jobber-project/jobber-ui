import { ColorTypes } from '../types/colors'

// https://chir.ag/projects/name-that-color/#6B53FF
const COLORS: ColorTypes = {
  havelockBlue: '#5971dd',
  electricViolet: '#8d49f7',
  cornflowerBlue: '#6b53ff',
  royalBlue: '#586EE0',
  mischa: '#dddfe5',
  emerald: '#41c879',
  yellowOrange: '#fda146',
  carnation: '#fb5255',
  supernova: '#ffc600',
  sunshade: '#ff9e2c',
  persianIndigo: '#371789',
  silverChalice: '#a9a9a9',
  alabster: '#f9f9f9',
  charade: '#2b2a35',
  white: '#ffffff',
  black: '#000000',
  razzleDazzleRose: '#F22CCD',
  wildStrawberry: '#FF4591',
  salmon: '#FF8761',
  selago: '#F5F6FD',
  linkWater: '#EBEEFB',
  governorBay: '#3A52BF',
  primaryGradient: `linear-gradient(90deg, #8d49f7, #5971dd)`,
  secondaryGradient: `linear-gradient(90deg, #ffc600, #ff9e2c)`,
}
export const PRIMARY_GRADIENT = `linear-gradient(90deg, ${COLORS.electricViolet}, ${COLORS.havelockBlue})`
export const SECONDARY_GRADIENT = `linear-gradient(90deg, ${COLORS.supernova}, ${COLORS.sunshade})`

export default COLORS
