// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import SignOut from './pages/SignOut';
import Profile from './pages/Profile';
import Header from './component/Header';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/sign-out' element={<SignOut />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
