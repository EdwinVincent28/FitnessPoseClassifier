import React from 'react'
import { useAuthContext } from "../hooks/useAuthContext"
import { useEffect }from 'react'

function Home() {
  const {user} = useAuthContext() 

  return (
    <div>Home</div>
  )
}

export default Home