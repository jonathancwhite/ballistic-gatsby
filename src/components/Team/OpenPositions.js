import React from 'react'
import { Link } from 'gatsby';
import { Jobs } from './jobs';
import { FaLocationArrow } from 'react-icons/fa';

const OpenPositions = () => {

  return (
        <div className="container pd-top openings">
            <div className="centeredText">
                <h2>Open Positions</h2>
            </div>
            <div className="openPositions">
            {
                Jobs.map((item, index) => (
                    <div className="position" key={index}>
                        <h4>{item.title}</h4>
                        <p className='position__desc'>{item.description}</p>
                        <p className='position__location'><FaLocationArrow /> {item.location}</p>
                        <Link className="position__link" to={`/jobs/${item.id}`}>Apply Now ></Link>
                    </div>
                ))
            }
            </div>
        </div>
  )
}

export default OpenPositions