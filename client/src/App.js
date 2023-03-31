import * as React from 'react';
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register';
import SetGoal from './pages/SetGoal';
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

        {user ?
          <Routes>
            <Route path='/' element={<Home handleLogout={handleLogOut}/>} />
            <Route path='/login' element={<Login setUser={setUser} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Home />} />
            <Route path='/setgoal' element={<SetGoal user={user} />} />
            <Route path='/goalpage' element={<GoalPage user={user} />} />
          </Routes>
          :
          <Routes>
            <Route path='/' element={<Login setUser={setUser} />} />
          </Routes>
}
      </main>
    </div>
  );
}

export default App;
