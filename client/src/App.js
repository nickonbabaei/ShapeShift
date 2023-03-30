import * as React from 'react';
import Nav from './components/Nav'
// import Home from './components/Home'
// import About from './components/About'
import Login from './pages/Login'
// import Register from './components/Register';
import { CheckSession } from './services/Auth';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)

  let navigate = useNavigate()

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
    navigate('/')
  }
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])



  return (
    <div>
    <Nav
      user={user}
      handleLogOut={handleLogOut}
    />
    <div className="App">
      <main className=''>
        <Routes>
          {/* <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} /> */}
          <Route path='/' element={<Login setUser={setUser}/>} />
          {/* <Route path='/register' element={<Register />}></Route> */}
        </Routes>
      </main>
    </div>
  </div>
  );
}

export default App;
