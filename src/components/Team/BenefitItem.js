import React from 'react'

const BenefitItem = ({title, icon}) => {
  return (
    <div className="benefits__item">
        <div className="benefits__icon">
          <img src={icon} alt="benefit icon" />
        </div>
        <h4>{title}</h4>
    </div>
  )
}

export default BenefitItem