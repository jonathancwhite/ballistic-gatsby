import React from 'react'
import SimpleSection from '../SimpleSection/SimpleSection'
import ImageHighlightHoriz from '../Global/ImageHighlightHoriz';

const Seo = () => {
  return (
      <>
        <div className="skewedSection__container">
            <SimpleSection
                classAdded="darkbg"
                heading="Focus on running your business and let us grow it"
                titleWidth='title-90'
                subheading="Why Ballistic"
                copy1="Sint quis proident nisi est nulla consectetur nulla ex consectetur sit enim sint qui. Laborum in id ipsum veniam ex velit. Sunt ex adipisicing ea occaecat ex adipisicing dolore non elit id ea labore eiusmod. Aliqua proident incididunt ipsum ullamco. Anim cillum ea proident ullamco laboris. Laborum eiusmod duis deserunt ullamco ipsum eiusmod consequat."
            />
            <ImageHighlightHoriz />
        </div>
      </>
  )
}

export default Seo