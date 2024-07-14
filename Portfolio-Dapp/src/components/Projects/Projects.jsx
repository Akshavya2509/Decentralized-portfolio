import React, {useState, useEffect} from 'react'
import {FaDonate} from 'react-icons/fa'
import {Modal, ModalHeader, ModalBody, Row, Button} from 'reactstrap'
import "./Projects.css"

const Project = ({state}) => {
    const [modal, setModal] = useState(false);
    const [projects, setProjects] = useState("");
    useEffect(() => {
        const {contract} = state;
        const projectDetails = async () => {
            const projects = await contract.methods.allProjects().call();
            setProjects(projects);
        }
        contract && projectDetails();
    }, [state])

    return (
        <section className = "project-section">
            <h1 className = "title"> Projects: </h1>
            <div className='card-wrapper' >
                {projects != "" && projects.map((project) => {
                    const githubLink = `https://github.com/kshitijofficial/${project.githubLink}`
                    return (
                        <a href = {githubLink} className="project-card" target='_blank' rel="noopener noreferrer" >
                            <div className="card-img">
                            <img src={`https://gateway.pinata.cloud/ipfs/${project.image}`} alt="" /></div>
                            <div className="card-text">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </div>
                        </a>
                    )
                })}
                
            </div>
        </section>
    )
}