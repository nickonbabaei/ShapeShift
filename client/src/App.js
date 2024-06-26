import * as React from 'react';
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
      <main className=''>
        {user?.email ?
          <Routes>
            <Route path='/' element={<Home user={user} handleLogout={handleLogOut} />} />
            <Route path='/goalpage' element={<GoalPage user={user} handleLogout={handleLogOut} />} />
            <Route path='/register' element={<Register setUser={setUser} />} />
          </Routes>
          :
          <Routes>
            <Route path='/' element={<Login setUser={setUser} />} />
            <Route path='/register' element={<Register setUser={setUser} />} />
          </Routes>
        }
      </main>
    </div>
  );
}

export default App;
