import React from 'react';
import { Col } from 'react-bootstrap';



function ProjectCard(title, description, skillSet, imgUrl) {
    return (
        <Col sm={6} md={4}>
            <div className='proj-imgbx'>
                <img src={imgUrl} />
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <h5>{skillSet}</h5>
                </div>
            </div>
        </Col>
    );
}

export default ProjectCard;