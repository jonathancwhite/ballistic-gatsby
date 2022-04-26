import React from 'react'
import Numbers from './Numbers'
import SimpleSection from '../SimpleSection/SimpleSection'
import BallisticLogoBG from '../../img/logos/Ballistic-circle-white-21.png'

export default function PreFooter(props){
  const {
    
  } = props;
  return (
    <div className='skewFix'>
        <div className="skewedSection__container--noFlex">
        <SimpleSection
            classAdded="darkbg"
            heading="The backbone for your future growth"
            subheading="Next steps"
            copy1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Consequat id porta nibh venenatis cras sed. Aenean pharetra magna ac 
            placerat vestibulum lectus mauris ultrices eros. Viverra nibh cras 
            pulvinar mattis nunc sed blandit libero. Mattis pellentesque id nibh 
            tortor id aliquet. Eu scelerisque felis imperdiet proin."
            color="gold"
            sectionWidth="col-70"
            />
            <Numbers />
            <div className="skewedSection__baLogo">
              <img src={BallisticLogoBG} alt="" />
            </div>
        </div>
    </div>
  )
}