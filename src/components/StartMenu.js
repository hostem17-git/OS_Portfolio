import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

import StartMenuIcon from './StartMenuIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName, logout } from '../features/appSlice';
import { Avatar } from '@mui/material';
import { githubLogo, linkedIn, mail } from "./assets"
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';

function StartMenu({ desktopApps, onClickHandler }) {
    const name = useSelector(getUserName);
    const dispatch = useDispatch()

    return (

        <StartMenuContainer >
            <StartMenuBox>

                <HelloBox>
                    <Avatar sx={{ width: 48, height: 48 }} />
                    <h4>Hello {`${name}`} ! Let's Connect</h4>
                    <ConnectIconContainer>
                        <a href="https://github.com/hostem17-git" target="_blank" rel="noreferrer"> <img src={githubLogo} alt="Github Logo" /> </a>
                        <a href="https://www.linkedin.com/in/vinayak-jaiswal/" rel="noreferrer" target="_blank"> <img src={linkedIn} alt="LinkedIn Logo" /></a>
                        <img src={mail} alt="Mail" />
                    </ConnectIconContainer>

                </HelloBox>

                <StartMenuSearch >
                    <SearchIcon />
                    <input type="text" placeholder='Type here to search' />
                </StartMenuSearch>

                <StartMenuApps>
                    <StartMenuAppsContainer>
                        {
                            Object.keys(desktopApps).map((index) => {
                                return <StartMenuIcon image imageIcon={desktopApps[index]} title={index} />
                            })
                        }
                    </StartMenuAppsContainer>

                </StartMenuApps>
                <StartMenuUserInfo>
                    <UserInfo>
                        <Avatar sx={{ width: 30, height: 30 }} />
                        <h2>{`${name}`}</h2>
                    </UserInfo>
                    <PowerSettingsNewOutlinedIcon onClick={() => { dispatch(logout()); }} />
                </StartMenuUserInfo>

            </StartMenuBox>
        </StartMenuContainer>
    )
}

export default StartMenu

const StartMenuContainer = styled.div`
    position:absolute;
    top:0;
    display:flex;
    background-color:transparent;
    z-index:999;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
   
`;

const StartMenuBox = styled.div`
/* TODO: Glassmorphism */
    background-color: rgba(0,0,0,0.8);
    padding:20px;
    border-radius:15px;
    height: 500px; //TODO:MAke Dynamic
`;

const StartMenuSearch = styled.div`
    display:flex;
    color:white;
    align-items:center;
    background-color:black;
    width:100%;
    padding:5px 2px;
    box-shadow: 0 2px #0793ff;
    border-radius: 5px;;
    >input{
        flex:.99;
        border:none;
        outline:none;
        color:white;
        
        background:transparent;
    }
    >.MuiSvgIcon-root{
        transform:rotateY(180deg);
        
    }
`;

const StartMenuApps = styled.div`
    display:flex;
    align-items:flex-start;
    min-height:45%;

`

const StartMenuAppsContainer = styled.div`
    /* border:1px solid pink; */
    display:flex;
    flex-wrap:wrap;
    margin:8px auto;
    align-items: center;
    
`;

const StartMenuUserInfo = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    /* background-color: rgba(0,0,0,0.9); */
    margin-top:15px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    *{
        padding:2px;
        margin:auto 5px ;
        color:white !important;
    }

    >.MuiSvgIcon-root{
        cursor:pointer;
        border-radius:100%;
        /* background-color: green; */

        :hover{
            box-shadow: 0 0 10px #fff;
        }
    }

`;


const UserInfo = styled.div`
    display:flex;
    >h2{
        font-weight: 300;
    }
    `

const HelloBox = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    >*{
        margin:8px auto;
    }

    >h4{
        color:white;
        font-weight: 300;
    }
`;

const ConnectIconContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    >a>img,img{
        object-fit: contain;
        width:40px;
        padding:10px;
        border-radius:100%;
        cursor: pointer;
        margin:0 10px;
    }
    >img:hover{
        background-color:rgba(255,255,255,.1);
    }
`;

