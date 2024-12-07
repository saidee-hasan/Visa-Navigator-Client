import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'

function MyAddedVisa() {
    const {email}=useParams()
    const data = useLoaderData()
    console.log(email,data)
   

  return (
    <div>
    
    </div>
  )
}

export default MyAddedVisa
