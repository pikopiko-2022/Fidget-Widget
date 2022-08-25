import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Stage from './components/bouncy-ball/Stage'
import { BrowserRouter } from 'react-router-dom'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  )
})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('app'))
})


