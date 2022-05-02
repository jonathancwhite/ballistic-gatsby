import React from 'react'

const CoreValues = ({data}) => {
  return (
    <>
        {data.map((item) => (
            <div class="coreValue__item">
                <h4>{item.cvTitle}</h4>
                <p>{item.cvCopy}</p>
            </div>
        ))}
    </>
  )
}

export default CoreValues