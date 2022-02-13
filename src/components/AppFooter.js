import React from 'react'
import styled from 'styled-components';
import DesktopIcon from './DesktopIcon';
import { file_explorer, start } from "./assets.js"
import Clock from "react-live-clock"


function AppFooter() {

    return (
        <AppFooterContainer>
            <FooterCenter>
                <DesktopIcon taskbar image imageIcon={start} />
                <DesktopIcon taskbar image imageIcon={file_explorer} />
                <DesktopIcon taskbar image imageIcon={start} />

            </FooterCenter>
            <FooterRight>
                <h4><Clock format={"HH:mm"} ticking={true} /></h4>
                <h4><Clock format={"DD-MM-YYYY"} ticking={true} /> </h4>
            </FooterRight>

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
    display:flex;
    padding:8px;


`;

const FooterCenter = styled.div`
    display:flex;`;

const FooterRight = styled.div`
    color:white;
    >h4{
    font-weight: 400;
        text-align: right;
    }
`;
