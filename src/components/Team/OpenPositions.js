import React from 'react'
import { Link } from 'gatsby';
import { FaLocationArrow } from 'react-icons/fa';

const OpenPositions = ({jobs}) => {

  return (
        <div className="container pd-top openings">
            <div className="centeredText">
                <h2>Open Positions</h2>
            </div>
            <div className="openPositions">
            {
                jobs.map((item, index) => (
                    <div className="position" key={index}>
                        <h4>{item.title}</h4>
                        <p className='position__desc'>{item.copy}</p>
                        <p className='position__location'><FaLocationArrow /> {item.location}</p>
                        <Link className="position__link" to={`/jobs/${item.link}`}>Apply Now &gte;</Link>
                    </div>
                ))
            }
            </div>
        </div>
  )
}

export default OpenPositions