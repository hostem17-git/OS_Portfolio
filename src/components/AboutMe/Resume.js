
import React from 'react'
import styled from 'styled-components'
import DownloadIcon from '@mui/icons-material/Download';
import user from "../../assets/userData";

function Resume() {
    return (
        <ResumeContainer>
            <ButtonContainer>
                <a href={user.resume} download={`${user.FirstName}_${user.LastName}_resume`}> <button><h4>Download Resume</h4><DownloadIcon /></button> </a>
            </ButtonContainer>
        </ResumeContainer >
    )

}


export default Resume

const ResumeContainer = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
`;

const ButtonContainer = styled.div`
background-color: #2777f8;
    display:flex;
    width:fit-content;
    
    justify-content:center;
    margin-top: 20px;
    >a{
        text-decoration: none;
    }
    
    >a>Button{
        display:flex;
        align-items:center;
        cursor:pointer; 
    }
`;