import * as React from 'react';
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register';
import GoalPage from './pages/GoalPage';
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
    <div className="App">
      {/* <Nav handleLogout={handleLogOut}/> */}
      <main className=''>
        {user?.email ?
          <Routes>
            <Route path='/' element={<Home user={user} handleLogout={handleLogOut}/>} />
            <Route path='/goalpage' element={<GoalPage user={user} handleLogout={handleLogOut}/>} />
          </Routes>
          :
          <Routes>
            <Route path='/' element={<Login setUser={setUser} />} />
            <Route path='/home' element={<Home handleLogout={handleLogOut}/>} />
            <Route path='/register' element={<Register setUser={setUser}/>} />
            <Route path='/goalpage' element={<GoalPage user={user} />} />
          </Routes>
}
      </main>
    </div>
  );
}

export default App;
