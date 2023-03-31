import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
  const [selectedGame, setSelectedGame] = useState(null)

  const getFood = async () => {
    const food = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=steak&dataType=&pageSize=100&sortBy=dataType.keyword&api_key=${process.env.REACT_APP_USDA_API_KEY}`)
    setSelectedGame(food)
    console.log(selectedGame)
  }

  useEffect(() => {
    getFood()
  }, [])

  return (
    <div>Home


    </div>
  )
}

export default Home