import React from 'react'
import { useActionData, useLoaderData } from 'react-router-dom'
import VisaCard from './VisaCard';

function AllVisa() {
    const visaData = useLoaderData();
    console.log(visaData)
  return (
    <div>
        {
            visaData.map((visa,idx)=> <VisaCard visa={visa} key={idx}/>)
        }
      
    </div>
  )
}

export default AllVisa
