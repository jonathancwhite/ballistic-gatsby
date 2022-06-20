import React from 'react'

const ProjectItems = ({list}) => {
    let projectList = list

    return (
        <div className="otherprojects-grid">
            {projectList.map((item) => (
                <a href={item.link}>
                    <div className="otherprojects-grid--item">
                    </div>
                    <div className="otherprojects-grid--logo">
                        <img src={item.logo} alt={item.logoAlt} />
                    </div>
                </a>
            ))}
        </div>
    )
}

export default ProjectItems