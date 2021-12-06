import projectData from './ProjectsData.jsx';
import Image from 'next/image';

export default function Projects(){
    return (
        <div className='projects'>
            <h1>Munkáim</h1>
            <div className='projects-container'>
                {projectData.map(project => (
                    <div className='project' key={project.id}>
                        <div className="top">
                            <div className='p-thumbnail'>
                                <div className="img">
                                    <Image className="image" layout='responsive' width='300' height='200' src={project.pThumbnail} alt="project" />
                                </div>
                            </div>
                            <div className='textarea'>
                                <h2 className='title'>{project.title}</h2>
                                <p className='text'>
                                    {project.text}
                                </p>
                                <div className="built-in">
                                    <p>Készült: </p>
                                    {project.builtInIcons.map(bi => (
                                        <i key={bi.id} className={bi.className} title="React"></i>
                                    ))}
                                </div>
                                <div className='textarea-icons'>
                                    <a target='_blank' href={project.gitHubLink} rel='noreferrer'>
                                        <i className="fab fa-github">
                                        </i>
                                    </a>
                                    <a target='_blank' href={project.website} rel='noreferrer'>
                                        <i className="fas fa-external-link-alt">
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="line-hor"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}