import React from 'react'

const ProjectItems = ({list}) => {
    let projectList = list
    if (projectList) {
        <div className="otherprojects-grid">
            {projectList.map((item) => (
                <a href={item.link}>
                    <div className="otherprojects-grid--item">
                    </div>
                    <div className="otherprojects-grid--logo">
                        <img src={item.logo.childImageSharp.gatsbyImageData} alt={item.logoAlt} />
                    </div>
                </a>
            ))}
        </div>
    }

    return (
        <></>
    )
}

export default ProjectItems