import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'

const Home = ({handleLogout}) => {

  return (
    <div>
      <header>
      <Nav handleLogout={handleLogout}/>
      </header>


    </div>
  )
}

export default Home