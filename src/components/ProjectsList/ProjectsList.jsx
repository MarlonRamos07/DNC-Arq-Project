import './ProjectsList.css'
import { useState, useEffect } from 'react'

//ASSETS 
import LikeFilled from '../../assets/like_filled.svg'
import Like from '../../assets/like_normal.svg'

//UTILS
import { getApiData } from '../../services/apiServices'

function ProjectsList(props){
    const [projects, setProjects] = useState()
    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            } catch{
                setProjects([])
            }
        }
        fetchData()
    }, [])
    return(
       <div className="projects-section">
            <div className="projects-hero">
               <h2>Follow Our Projects</h2>
               <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            </div>
            <div className="projects-grid">
            {
            projects && projects.length > 0 ? (
            projects.map((project) => (
                <div key={project.id} className="project-card d-flex jc-center al-center fd-column" >
                    <div 
                        className="thumb tertiary-background" 
                        style={{backgroundImage: `url(${project.thumb})`}}
                    ></div>
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                    <img src={Like} />
                </div>
            ))
        ) : (
            <p>Loading projects...</p>
        )
    }
            </div>
       </div>
    )
}

export default ProjectsList