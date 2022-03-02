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
            <SidebarItem data-name="About Me" onClick={sidebarClickHandler}><h1 data-name="About Me"> About Me</h1></SidebarItem>
            <SidebarItem data-name="Experience" onClick={sidebarClickHandler}><h1 data-name="Experience" >Experience</h1></SidebarItem>
            <SidebarItem data-name="Skills" onClick={sidebarClickHandler}><h1 data-name="Skills">Skills</h1></SidebarItem>
            <SidebarItem data-name="Projects" onClick={sidebarClickHandler}><h1 data-name="Projects">Projects</h1></SidebarItem>
            <SidebarItem data-name="Education" onClick={sidebarClickHandler}><h1 data-name="Education">Education</h1></SidebarItem>
            {/* <SidebarItem data-name="Certificates" onClick={sidebarClickHandler}><h1 data-name="Certificates">Certificates</h1></SidebarItem> */}
            <SidebarItem data-name="Profiles" onClick={sidebarClickHandler}><h1 data-name="Profiles">Profiles</h1></SidebarItem>
            <SidebarItem data-name="Achievements" onClick={sidebarClickHandler}><h1 data-name="Achievements">Achievements</h1></SidebarItem>
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
    color:#e1dfdd;
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