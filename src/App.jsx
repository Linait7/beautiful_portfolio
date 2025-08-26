import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Home} from "./Pages/Home"
import { NotFound } from "./Pages/NotFound"
import { BrowserRouter,Routes , Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element = {<Home />}>

      </Route>
        <Route path = "*" element = {<NotFound />}>

      </Route>
    </Routes>
    
    
    
    </BrowserRouter>
    </>
  )
}

export default App
