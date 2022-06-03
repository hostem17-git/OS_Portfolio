import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAboutMeVisibility, showAboutMe } from '../features/folderSlice.js'
import { windows11_dark } from "./assets.js"
import DesktopIcon from './DesktopIcon'
import Folder from './Folder.js'
import { file_explorer } from './assets.js'
import user from '../assets/userData.js'

function AppMain({ desktopApps }) {
    const aboutMeVisibility = useSelector(getAboutMeVisibility);
    const current = useSelector(getAboutMeVisibility);
    const dispatch = useDispatch()

    const openAboutMe = () => {
        if (!current)
            dispatch(showAboutMe())
    }

    return (
        <AppMainContainer id="desktop_screen"
            style={{
                backgroundImage: `url(${windows11_dark} )`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
            }}
        >

            {aboutMeVisibility ? <Folder /> : <></>}
            <DesktopIconListContainer >
                <DesktopIcon onClickhandler={openAboutMe} image imageIcon={file_explorer} title="About Me" />


                {
                    user.projects.map((project, projIndex) => (
                        <a href={project.projectUrl} target="_blank" rel="noreferrer">
                            <DesktopIcon key={projIndex} image imageIcon={project.img} title={project.name} />
                        </a>
                    ))
                }



            </DesktopIconListContainer>

        </AppMainContainer >

    )
}

export default AppMain

const AppMainContainer = styled.div`
    width:100%;
    height:100%;
    position:relative;
`;

const DesktopIconListContainer = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap: wrap;
    width:fit-content;
    max-width:100vw;
    max-height: 90vh;
    >a{
        text-decoration: none;
    }
`;
