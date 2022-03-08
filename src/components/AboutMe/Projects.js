import React from 'react'
import styled from 'styled-components'
import LinkIcon from '@mui/icons-material/Link';
import userData from "../../assets/userData"
import Circle from '@mui/icons-material/Circle'


function Projects() {
    return (
        <ProjectContainer>

            {
                userData.projects.map((project, projectIndex) => {
                    return <Project key={projectIndex}>
                        <ProjectHeader>
                            <h1>
                                {project.name}
                            </h1>
                            <a href={project.projectUrl}><LinkIcon sx={{ color: "white" }} /></a>
                        </ProjectHeader>
                        <ProjectDescription>
                            <p>{project.description}</p>
                        </ProjectDescription>
                        <TechStack>
                            <h4>TechStack :</h4>{
                                project.techstack.map((item, index) => (
                                    <span><Circle sx={{ width: 8, height: 8 }} /> <h4>{item}</h4></span>
                                )

                                )
                            }
                        </TechStack>
                    </Project>
                })

            }
        </ProjectContainer>
    )
}

export default Projects


const ProjectContainer = styled.div`
    width:100%;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 5px;
`;

const ProjectHeader = styled.div`
    display:flex;
    align-items:flex-end ;
    /* justify-content:space-between; */
    >h1{
        font-size: 24px;
        font-weight: 400;
        margin-right:10px ;
    }
`;

const Project = styled.div`
    width:100%;
    border-bottom: 1px solid  rgba(255,255,255,.2);
    margin-bottom:5px ;
    padding-bottom: 5px ;
`

const ProjectDescription = styled.div`
    margin: 10px auto; ;
`;

const TechStack = styled.div`
    display:flex;
    flex-wrap: wrap ;

    >h4{
        margin-right: 5px ;
        font-weight: 400 ;
        
    }
   >span{
       display: flex;
       align-items:center;
       >h4{
           margin-left: 2px;
           margin-right:8px;
           font-weight:300;
       }
   }
`;