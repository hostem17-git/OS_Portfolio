import React from 'react'
import styled from 'styled-components';
import DesktopIcon from './DesktopIcon';
import { file_explorer, start } from "./assets.js"
import Clock from "react-live-clock"
import SystemIcon from './SystemIcon';
import WifiIcon from '@mui/icons-material/Wifi';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

function AppFooter() {

    return (
        // TODO: Look for responsive positioning
        <Screen>



            <AppFooterContainer>
                <FooterCenter>
                    <DesktopIcon taskbar image imageIcon={start} />
                    <DesktopIcon taskbar image imageIcon={file_explorer} />


                </FooterCenter>
                <FooterRight>

                    <SystemIcons>
                        <SystemIcon Icon={WifiIcon} />
                        <SystemIcon Icon={VolumeUpIcon} />
                    </SystemIcons>


                    <ClockContainer>
                        <h4><Clock format={"HH:mm"} ticking={true} /></h4>
                        <h4><Clock format={"DD-MM-YYYY"} ticking={true} /> </h4>
                    </ClockContainer>

                </FooterRight>

            </AppFooterContainer>
        </Screen>
    )
}

export default AppFooter


const AppFooterContainer = styled.div`
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    background-color:rgba(0,0,0,.8);
    width:100%;
    height:40px;
    display:flex;
    padding:10px 0 ;

    
`;

const FooterCenter = styled.div`
    display:flex;
    position:absolute;
    left:50%;
    transform:translateX(-60%);
    @media(max-width:500px){
        left:0;
        transform:none;}
        
    `;

const FooterRight = styled.div`
    display:flex;
    color:white;
    align-items: center;
    padding-right:10px;
    position: absolute;
    right:15px;
    bottom:3px;
    >*{
        padding:5px 0;
    }
`;

const ClockContainer = styled.div`
    >h4{
    font-weight: 400;
        text-align: right;
    }
`;

const SystemIcons = styled.div`
    display:flex;
    padding:2px 5px;
    border-radius:5px;
    >*{
        padding:5px;
    }
    :hover{
        background-color: rgba(255,255,255,.1);
    }
`;

const Screen = styled.div``;