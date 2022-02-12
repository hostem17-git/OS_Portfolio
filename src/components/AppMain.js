import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../features/appSlice'
import styled from 'styled-components'
import windows11_dark from "../assets/wallpapers/windows11_dark.jpg"
import DesktopIcon from './DesktopIcon'
import FolderIcon from '@mui/icons-material/Folder';
import { CollectionsBookmarkRounded } from '@mui/icons-material'



function AppMain() {
    console.log("wall", windows11_dark)

    const wallpaper = "https://drive.google.com/uc?export=download&id=1MNxyaA-e8DwQ5ifgOY945LLyvgvu_lye"
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
            {/* <Draggable bounds="#desktop_screen"><Test>1</Test></Draggable>
            <Draggable><Test>2</Test></Draggable> */}

            <DesktopIconListContainer>

                <DesktopIcon Icon={FolderIcon} title="About me" />
                <DesktopIcon Icon={FolderIcon} title="About me" />
                <DesktopIcon Icon={FolderIcon} title="About me" />



            </DesktopIconListContainer>



        </AppMainContainer>

    )
}

export default AppMain

const AppMainContainer = styled.div`

    width:100vw;
    height:100vh;

`;

const DesktopIconListContainer = styled.div``;


// const Test = styled.div`
//     display:inline-block;
//     width:400px;
//     height:400px;
//     background-color:green;
// `;

