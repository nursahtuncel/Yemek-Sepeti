import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

const {isLoading,error,restorant}= useSelector((store)=>store.restorant)

  return (
    <div>
      home
    </div>
  )
}

export default Home
