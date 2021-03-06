import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setFolder } from '../features/folderSlice'
import { motion } from 'framer-motion';


function FolderSidebar() {
    const dispatch = useDispatch();
    const sideBarVariants = {
        hidden: {
            y: "-100vh",
        },
        visible: {
            y: 0,
            transition: { duration: .2 }
        }
    }

    const sidebarClickHandler = (e) => {
        dispatch(setFolder(
            {
                name: e.target.getAttribute("data-name")
            }
        )
        )
    }


    return (

        <SidebarContainer variants={sideBarVariants} initial="hidden" animate="visible" className="preventDrag">
            <SidebarItem data-name="About Me" onClick={sidebarClickHandler}><h1 data-name="About Me"> About Me</h1></SidebarItem>
            <SidebarItem data-name="Experience" onClick={sidebarClickHandler}><h1 data-name="Experience" >Experience</h1></SidebarItem>
            <SidebarItem data-name="Skills" onClick={sidebarClickHandler}><h1 data-name="Skills">Skills</h1></SidebarItem>
            <SidebarItem data-name="Projects" onClick={sidebarClickHandler}><h1 data-name="Projects">Projects</h1></SidebarItem>
            <SidebarItem data-name="Education" onClick={sidebarClickHandler}><h1 data-name="Education">Education</h1></SidebarItem>
            {/* <SidebarItem data-name="Certificates" onClick={sidebarClickHandler}><h1 data-name="Certificates">Certificates</h1></SidebarItem> */}
            <SidebarItem data-name="Resume" onClick={sidebarClickHandler}><h1 data-name="Resume">Resume</h1></SidebarItem>
            <SidebarItem data-name="Contact Me" onClick={sidebarClickHandler}><h1 data-name="Contact Me">Contact Me</h1></SidebarItem>

            {/* <SidebarItem data-name="Achievements" onClick={sidebarClickHandler}><h1 data-name="Achievements">Achievements</h1></SidebarItem> */}
        </SidebarContainer>
    )
}

export default FolderSidebar

const SidebarContainer = styled(motion.div)`
    flex:.1;    
    display:flex;
    flex-direction: column;
    align-items:center;           
`;

;
const SidebarItem = styled.div`
    display:flex;
    align-items: center;
    color:var(--folder_text_color) ;
    padding:5px;
    padding-left  : 20px ;
    width:100%; 
    cursor: pointer;
    >h1{
        font-size: 18px;
        font-weight: 300;
        /* height:100%; */
    }

    :hover{
        background-color:#3b3a39;
    }
`; 