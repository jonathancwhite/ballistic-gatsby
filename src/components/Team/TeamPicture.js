import React from 'react'

const TeamPicture = ({name, role}) => {
  return (
      <>
        <div className="personalHighlight">
            <div className="personalHighlight__image">
                <img src={`/images/ba_headshot_${name}.png`} alt={`Team member: ${name}`} />
            </div>
            <div className="personalHighlight__copy">
                <h4>{name}</h4>
                <p>{role}</p>
            </div>
        </div>
      </>
  )
}

export default TeamPicture