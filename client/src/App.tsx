import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routing from './router/routing'

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routing/>
     </BrowserRouter>
    </div>
  )
}

export default App
