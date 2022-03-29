import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { useSpring, animated } from "react-spring"
import StartMenuIcon from './StartMenuIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName, logout } from '../features/appSlice';
import { Avatar } from '@mui/material';
import { githubLogo, linkedIn, mail } from "./assets"
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { avatar } from "./assets"
import user from '../assets/userData';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';




function StartMenu({ desktopApps, onClickHandler }) {
    const name = useSelector(getUserName);
    const dispatch = useDispatch()
    const props = useSpring({ from: { y: 100, opacity: 0, zIndex: 999 }, to: { y: 0, opacity: 1, zIndex: 999 } })

    return (
        // <animated.div style={props}>
        <StartMenuContainer onClick={() => { onClickHandler(false) }} >
            <StartMenuBox onClick={(e) => { e.stopPropagation() }}>

                <HelloBox>
                    <Avatar src={avatar} alt='<a href="https://www.freepik.com/vectors/people">People vector created by freepik - www.freepik.com</a>' sx={{ padding: "5px", width: 48, height: 48 }} />
                    <h4>Hello {`${name}`} ! Let's Connect</h4>
                    <PersonalInfo>
                        <Item>
                            <EmailIcon sx={{ width: 18, height: 18 }} />
                            <h4>{user.email}</h4>

                        </Item>

                        <Item>
                            <LocalPhoneIcon sx={{ width: 14, height: 14 }} />
                            <h4>{user.phone}</h4>
                        </Item>

                    </PersonalInfo>

                    <ConnectIconContainer>
                        {
                            user.profiles.map((profile, index) => (
                                <a key={index} href={profile.value} target="_blank" rel="noreferrer">
                                    <img src={profile.picture} alt={profile.name} />
                                </a>
                            ))
                        }
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
                            user.projects.map((project, projIndex) => (
                                <a href={project.projectUrl} target="_blank" rel="noreferrer">
                                    <StartMenuIcon key={projIndex} image imageIcon={project.img} title={project.name} />
                                </a>
                            ))
                        }
                    </StartMenuAppsContainer>
                </StartMenuApps>



                <StartMenuUserInfo>
                    <UserInfo>
                        <Avatar sx={{ width: 30, height: 30 }}>{name ? `${name[0]}`.toUpperCase() : "U"}</Avatar>
                        <h2>{`${name}`}</h2>
                    </UserInfo>
                    <PowerSettingsNewOutlinedIcon onClick={() => { dispatch(logout()); }} />
                </StartMenuUserInfo>

            </StartMenuBox>
        </StartMenuContainer>
        // </animated.div>
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
    overflow:hidden;
   
`;

const StartMenuBox = styled.div`
/* TODO: Glassmorphism */
    background-color: rgba(0,0,0,0.8);
    padding:20px;
    border-radius:15px;
    max-width:40%;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    height: 500px; //TODO:MAke Dynamic
    @media (max-width :400px) {
        max-width:60%;
    }
    
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
    max-height:35%;
    max-width: 100%;
    overflow-y: auto;
    flex-wrap: wrap;
`

const StartMenuAppsContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin:8px auto;
    align-items: center;
    justify-content: center;
    >a{
        text-decoration: none;
    }
    
`;

const StartMenuUserInfo = styled.div`
    display:flex;
    justify-self: flex-end;
    align-items:center;
    justify-content:space-between;
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
    >.MuiAvatar-root{
        background-color:rgba(255,255,255,.1)
    }
`;

const ConnectIconContainer = styled.div`
    display:flex;
    /* flex-wrap: wrap ; */
    max-width: 100%;
    align-items:center;
    justify-content:space-around;
    padding-right: 20px;
    @media (max-width:900px){
        overflow-x: scroll;
        /* padding-left:20px; */
    }

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

const PersonalInfo = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    color:white;
`;

const Item = styled.div`
    display:flex;
    align-items: center;
    >h4{
        font-weight:300;
    }
    *{
        margin-right: 5px ;
    }
    >.copy{
        cursor: pointer;
    }
`;