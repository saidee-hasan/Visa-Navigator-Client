import React from "react";

function VisaCard({ visa }) {
  const {
    countryName,
    countryImage,
    visaType,
    processingTime,
    requiredDocuments,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
  } = visa;
  console.log(visa);
  return <div></div>;
}

export default VisaCard;
