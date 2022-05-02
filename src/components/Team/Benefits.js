import React from 'react'
import BenefitItem from './BenefitItem';

const Benefits = ({benefits}) => {
    let benefitList = benefits.blist;
  return (
    <div className="benefits">
        <div className="container">
            <div className="benefits__heading">
                <h2 className='gold'>{benefits.heading}</h2>
                <p>
                    {benefits.copy}
                </p>
            </div>
            <div className="benefits__list">
                {benefitList.map((item) => (
                    <BenefitItem title={item.benefit} icon={item.icon}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Benefits