import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="layout">
        <div className="layout-body">
            <div>{children}</div>
        </div>
    </div>
  )
}

export default Layout