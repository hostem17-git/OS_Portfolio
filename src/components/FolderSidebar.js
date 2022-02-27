import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setFolder } from '../features/folderSlice'

function FolderSidebar() {
    const dispatch = useDispatch()

    const sidebarClickHandler = (e) => {
        dispatch(setFolder(
            {
                name: e.target.getAttribute("data-name")
            }
        )
        )
    }


    return (

        <SidebarContainer>
            <SidebarItem data-name="about_me" onClick={sidebarClickHandler}><h1 data-name="about_me"> About Me</h1></SidebarItem>
            <SidebarItem data-name="experience" onClick={sidebarClickHandler}><h1 data-name="experience" >Experience</h1></SidebarItem>
            <SidebarItem data-name="skills" onClick={sidebarClickHandler}><h1 data-name="skills">Skills</h1></SidebarItem>
            <SidebarItem data-name="projects" onClick={sidebarClickHandler}><h1 data-name="projects">Projects</h1></SidebarItem>
            <SidebarItem data-name="education" onClick={sidebarClickHandler}><h1 data-name="education">Education</h1></SidebarItem>
            <SidebarItem data-name="certificates" onClick={sidebarClickHandler}><h1 data-name="certificates">Certificates</h1></SidebarItem>
            <SidebarItem data-name="profiles" onClick={sidebarClickHandler}><h1 data-name="profiles">Profiles</h1></SidebarItem>
            <SidebarItem data-name="achievemnets" onClick={sidebarClickHandler}><h1 data-name="achievemnets">Achievements</h1></SidebarItem>
        </SidebarContainer>
    )
}

export default FolderSidebar

const SidebarContainer = styled.div`
    flex:.1;    
    display:flex;
    flex-direction: column;
    align-items:center;
    
`;

;
const SidebarItem = styled.div`
    display:flex;
    align-items: center;
    color:white;
    padding:5px;
    padding-left  : 20px ;
    width:100%; 
    cursor: pointer;
    >h1{
        font-size: 18px;
        font-weight: 300;
    height:100%;

    }

    :hover{
        background-color:#3b3a39;
    }
`; 