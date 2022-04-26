import React from 'react'

const LogoShowcase = ({title,logo1, logo2, logo3, logo4, logo5}) => {
  return (
    <div className="logoShowcase">
      <div className="logoShowcase__title">
        <h2>{title}</h2>
      </div>
      <div className="logoShowcase__container">
          <img src={logo1} height="200" width="100" alt="Brand Logo - " />
          <img src={logo2} height="200" width="100" alt="Brand Logo - " />
          <img src={logo3} height="200" width="100" alt="Brand Logo - " />
          <img src={logo4} height="200" width="100" alt="Brand Logo - " />
          <img src={logo5} height="200" width="100" alt="Brand Logo - " />
      </div>
    </div>
  )
}

export default LogoShowcase