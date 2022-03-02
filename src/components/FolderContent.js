import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { getFolder } from '../features/folderSlice'
import AboutMe from './AboutMe/AboutMe'
import Experience from "./AboutMe/Experience"
import Skills from "./AboutMe/Skills"
import Projects from "./AboutMe/Projects"
import Education from "./AboutMe/Education"
import Profiles from "./AboutMe/Profiles"
import Achievements from "./AboutMe/Achievements"

function FolderContent() {

    const folder = useSelector(getFolder)

    return (
        <ContentContainer>
            {folder.toLowerCase() === "about me" && <AboutMe />}
            {folder.toLowerCase() === "experience" && <Experience />}
            {folder.toLowerCase() === "skills" && <Skills />}
            {folder.toLowerCase() === "projects" && <Projects />}
            {folder.toLowerCase() === "education" && <Education />}
            {folder.toLowerCase() === "profiles" && <Profiles />}
            {folder.toLowerCase() === "achievements" && <Achievements />}

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
    /* min-height: 100%; */
    color:#e1dfdd;
    height: calc(100vh - 130px );
    overflow-y: auto;
    border:1px solid rgba(255,255,255,.1);
   
    ::-webkit-scrollbar{
        width:100px;
        height:100%;
    }
`