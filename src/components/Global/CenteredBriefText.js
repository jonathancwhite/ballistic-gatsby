import React from 'react'

function CenteredBriefText({heading, copy}) {
  return (
    <div className="centeredText">
        <h1>{heading}</h1>
        <p>{copy}</p>
    </div>
  )
}

export default CenteredBriefText