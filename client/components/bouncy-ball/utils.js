export const getRandomColor = () => {
  return `HSLA(${getRandomDeg()}, 80%, 50%, 0.3)`
}

const getRandomDeg = () => {
  return Math.floor(Math.random() * (360 + 1))
}
