import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../features/appSlice'
import styled from 'styled-components'
import { windows11_dark, file_explorer, gmail, slack, spotify } from "./assets.js"
import DesktopIcon from './DesktopIcon'
import FolderIcon from '@mui/icons-material/Folder';



function AppMain() {
    console.log("wall", windows11_dark)

    const dispatch = useDispatch()

    return (
        <AppMainContainer id="desktop_screen"
            style={{
                backgroundImage: `url(${windows11_dark} )`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
            }}
        >
            <DesktopIconListContainer>

                <DesktopIcon image imageIcon={file_explorer} title="About me" />
                <DesktopIcon image imageIcon={spotify} title="Spotify" />
                <DesktopIcon image imageIcon={gmail} title="Gmail" />
                <DesktopIcon image imageIcon={slack} title="Slack" />

                {/* <DesktopIcon Icon={FolderIcon} title="About me" /> */}

            </DesktopIconListContainer>
        </AppMainContainer>

    )
}

export default AppMain

const AppMainContainer = styled.div`
    width:100vw;
    height:100vh;
`;

const DesktopIconListContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`;


// const Test = styled.div`
//     display:inline-block;
//     width:400px;
//     height:400px;
//     background-color:green;
// `;

