import { useState } from 'react'
import { BrowserRouter as Routers,Routes,Route } from 'react-router-dom'
import ContactForm from './Comp/ContactForm'
import View from './Comp/View'
import Update from './Comp/Update'
import Info from './Comp/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routers>
        <Routes>
          <Route path='/' element={<ContactForm/>}></Route>
          <Route path='/singleuser/:id' element={<View/>}>singleuser</Route>
          <Route path='/Update/:id' element={<Update/>}>update</Route> 
          <Route path='/Info' element={<Info/>}></Route>


        </Routes>
      </Routers>
    </>
  )
}

export default App
