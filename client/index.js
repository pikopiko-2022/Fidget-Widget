import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import Stage from './components/bouncy-ball/Stage'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Stage />, document.getElementById('app'))
})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('app'))
})
