import React from 'react'
import About from './About';
import Team from './Team';
import PreFooter from './PreFooter';
import Seo from './Seo';

const SkewedSection = ({section}) => {
  let renderSection = section
  const renderSwitch = () => {
    switch(renderSection) {
      case "about": return <About />
      case "team": return <Team />
      case "seo": return <Seo />


      default: return <PreFooter />
    }
  }
  return (
    <div className={`skewedSection ${section}`}>
        {renderSwitch()}
    </div>
  )
}

export default SkewedSection