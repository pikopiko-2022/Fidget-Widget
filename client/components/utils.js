export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export const getRandomColor = ({
  saturation = 80,
  lightness = 50,
  opacity = 0.3,
}) => {
  return `HSLA(${getRandomDeg()}, ${saturation}%, ${lightness}%, ${opacity})`
}

const getRandomDeg = () => {
  return getRandomNumber(0, 360)
}

export const getRandomRadians = () => {
  return getRandomNumber(0, Math.PI * 2)
}
