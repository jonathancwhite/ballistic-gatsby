import React from 'react'
import SimpleSection from '../SimpleSection/SimpleSection'

const Team = () => {
  return (
    <div className="skewedSection__container">
        <SimpleSection
            classAdded="darkbg"
            heading="We believe we can be the best while still having fun"
            subheading="Our core values"
            copy1="At Ballistic Agency, we believe our core values show our true value as a company. 
            We are the greatest group of individuals out there right now. This is just random copy and I should not write it."
            color="gold"
            sectionWidth='col-50 m-auto'
            coreValues='true'
        />
    </div>
  )
}

export default Team