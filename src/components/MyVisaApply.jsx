import React from 'react'
import { useLoaderData } from 'react-router-dom'

function MyVisaApply() {
    const apply = useLoaderData();
    console.log(apply)
  return (
    <div>
      
    </div>
  )
}

export default MyVisaApply
