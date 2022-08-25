import React from 'react'
import { useParams } from 'react-router-dom'

function Fidget() {
  const { fidget } = useParams()

  return <>current fidget {fidget}</>
}

export default Fidget
