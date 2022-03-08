import React from 'react'
import styled from 'styled-components';
import { file_explorer, start } from "./assets.js"
import Clock from "react-live-clock"
import SystemIcon from './SystemIcon';
import WifiIcon from '@mui/icons-material/Wifi';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import StartMenuIcon from './StartMenuIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getAboutMeVisibility, showAboutMe } from '../features/folderSlice.js';

function AppFooter({ setStartMenuVisibility }) {
    const dispatch = useDispatch();
    const current = useSelector(getAboutMeVisibility);

    const openAboutMe = () => {
        if (!current)
            dispatch(showAboutMe())
    }

    return (
        // TODO: Look for responsive positioning
        <Screen>
            {/* <FooterBlur></FooterBlur> */}
            <AppFooterContainer>
                <FooterCenter >
                    <StartMenuIcon onClickhandler={setStartMenuVisibility} taskbar image imageIcon={start} />
                    <StartMenuIcon onClickhandler={openAboutMe} taskbar image imageIcon={file_explorer} />


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


// const FooterBlur = styled.div`
//     position:fixed;;
//     bottom:0;
//     left:0;
//     right:0;
//     bottom: -5px;
//     width:100%;
//     height:40px;
//     display:flex;    
//     /* background-color:rgba(0,0,0,.14); */
//     padding:10px 0 ;
//     padding-bottom: 20px;
//     filter: blur(4px);
// `

const AppFooterContainer = styled.div`
    position:fixed;;
    bottom:0;
    left:0;
    right:0;
    bottom:0px;
    background-color:rgba(0,0,0,.8);
    width:100%;
    height:var(--footer-height);
    display:flex;
    padding:10px 0 ;
    /* padding-bottom: 20px; */
    box-sizing: border-box;
    /* filter:blur(4px); */
    
`;

const FooterCenter = styled.div`
    display:flex;
    position:absolute;
    left:50%;
    transform:translateX(-60%);
    filter: blur();
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