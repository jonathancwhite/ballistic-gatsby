import React from 'react'

const TeamPicture = ({ teamMembers }) => {
  return (
      <>
      {teamMembers.map((item) => (
        <div className="personalHighlight">
            <div key={item.name} className="personalHighlight__image">
                <img src={`/images/ba_headshot_${item.name}.png`} alt={`Team member: ${item.name}`} />
            </div>
            <div className="personalHighlight__copy">
                <h4>{item.name}</h4>
                <p>{item.role}</p>
            </div>
        </div>
      ))}
      </>
  )
}

export default TeamPicture