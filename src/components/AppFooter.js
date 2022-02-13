import React from 'react'
import styled from 'styled-components';
import DesktopIcon from './DesktopIcon';
import FolderIcon from '@mui/icons-material/Folder';
import { start } from "./assets.js"


function AppFooter() {
    return (
        <AppFooterContainer>
            <DesktopIcon Icon={FolderIcon} title="About me" taskbar image imageIcon={start} />
        </AppFooterContainer>
    )
}

export default AppFooter


const AppFooterContainer = styled.div`
    position:absolute;
    bottom:0;
    background-color:rgba(0,0,0,.8);
    width:100vw;
    height:40px;


`;
