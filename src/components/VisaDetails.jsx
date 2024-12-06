import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'


function VisaDetails() {
    const { id } = useParams();
    const data=useLoaderData()
   

    const [visaData, setVisaData] = useState({});

    useEffect(() => {
      const singleData = data.find((p) => p._id === id); // Use strict equality for comparison
      setVisaData(singleData || {}); // Set product data or an empty object
    }, [data, id]);

    console.log(visaData)
  return (
    <div>
      
    </div>
  )
}

export default VisaDetails

