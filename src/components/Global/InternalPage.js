import React from 'react'

const internalPage = ({children}) => {
  return (
    <div className="page">
      <div className="container">
        <div>{children}</div>
      </div>
    </div>
  )
}

export default internalPage