import React from 'react'
import ImageHighlight from '../Global/ImageHighlight'
import SimpleSection from '../SimpleSection/SimpleSection'

const About = () => {
  return (
    <div className="skewedSection__container">
        <SimpleSection
            classAdded="darkbg"
            heading="The country's most efficient ecommerce experts."
            subheading="American owned & operated"
            copy1="Our entire staff is located in the United States and we are proud of that! 
            In an age of offshore employment just to save costs, we strive in creating the best while being the best."
            cta="Meet our team"
            ctaLink="/our-team"
            color="gold"
            sectionWidth='col-50'
            secondaryCol1Title='Learn on the job'
            secondaryCol1Text='We offer competitive rates and allow our employees to learn on the job.'
            secondaryCol2Title='Quick job development'
            secondaryCol2Text='We have a pathway to success for each of our roles and will help you become the best you!'
        />
        <ImageHighlight />
    </div>
  )
}

export default About