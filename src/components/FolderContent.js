import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getFolder } from '../features/folderSlice'
import AboutMe from './AboutMe/AboutMe'
import Experience from "./AboutMe/Experience"
import Skills from "./AboutMe/Skills"
import Projects from "./AboutMe/Projects"
import Education from "./AboutMe/Education"
import ContactMe from "./AboutMe/ContactMe"
import Achievements from "./AboutMe/Achievements"

function FolderContent() {

    const folder = useSelector(getFolder)

    return (
        <ContentContainer className='Content preventDrag'>
            {folder.toLowerCase() === "about me".toLowerCase() && <AboutMe />}
            {folder.toLowerCase() === "experience".toLowerCase() && <Experience />}
            {folder.toLowerCase() === "skills".toLowerCase() && <Skills />}
            {folder.toLowerCase() === "projects".toLowerCase() && <Projects />}
            {folder.toLowerCase() === "education".toLowerCase() && <Education />}
            {folder.toLowerCase() === "contact me".toLowerCase() && <ContactMe />}
            {folder.toLowerCase() === "achievements".toLowerCase() && <Achievements />}

        </ContentContainer>
    )
}

export default FolderContent

const ContentContainer = styled.div`
    flex:.9;
    background-color:#11100f;
    display:flex;
    flex-direction: column;;
    width:100%;
    color:var(--folder_text_color) ;
    height: calc(100vh - 130px );
    overflow-y: auto;
    border:1px solid rgba(255,255,255,.1);
`