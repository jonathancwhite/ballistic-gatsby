import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        imageAlt={data.imageAlt}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        ctaTitle={data.ctaTitle}
        ctaLink={data.ctaLink}
        ctaTitle2={data.ctaTitle2}
        ctaLink2={data.ctaLink2}
        brands={data.brands || {}} 
        mainpitch={data.mainpitch || {}}
        partners={data.partners || {}}
        about={data.about || {}}
        services={data.services || {}}
        nextsteps={data.nextsteps || {}}
        numbers={data.numbers || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
