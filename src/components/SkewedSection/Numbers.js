import React from 'react'

export default function Numbers(props) {
    const {
        num1,
        text1,
        num2,
        text2,
        num3,
        text3,
        num4,
        text4
    } = props;
  return (
    <div className="numbers">
        <div className="numbers__container">
            <div className="numbers__column">
                <h2 className='gold'>{num1}</h2>
                <p>{text1}</p>
            </div>
            <div className="numbers__column">
                <h2 className='gold'>{num2}</h2>
                <p>{text2}</p>
            </div>
            <div className="numbers__column">
                <h2 className='gold'>{num3}</h2>
                <p>{text3}</p>
            </div>
            <div className="numbers__column">
                <h2 className='gold'>{num4}</h2>
                <p>{text4}</p>
            </div>
        </div>
    </div>
  )
}