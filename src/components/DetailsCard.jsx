import React from 'react'

function DetailsCard({visa}) {
    const {
        countryName,
        countryImage,
        visaType,
        processingTime,
        description,
        ageRestriction,
        fee,
        validity,
        applicationMethod,
        _id
      } = visa;
  return (
    <div>
        <img src={countryImage} alt="" />
      
    </div>
  )
}

export default DetailsCard
