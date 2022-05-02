import React from 'react'

const CoreValues = ({ list }) => {
  return (
    <>
        {list.map((item) => (
            <div key={item.cvTitle} class="coreValue__item">
                <h4>{item.cvTitle}</h4>
                <p>{item.cvCopy}</p>
            </div>
        ))}
    </>
  )
}

export default CoreValues