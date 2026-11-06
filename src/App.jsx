import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* common paths */}
        <Route path='/' element={<Landing />}></Route>
        {/* <Route path='/login' element={<Landing />}></Route>
        <Route path='/' element={<Landing />}></Route> */}


        {/* protected paths */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
