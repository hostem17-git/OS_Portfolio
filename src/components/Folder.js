import { ArrowBack, ArrowForward, ArrowUpward, KeyboardArrowDown } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useRef } from 'react'
import styled from 'styled-components'
import FolderContent from './FolderContent';
import FolderSidebar from './FolderSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getAboutMeVisibility, getFolder, hideAboutMe } from '../features/folderSlice';
import { Icon } from '@fluentui/react/lib/Icon';
import { NeutralColors } from '@fluentui/theme';
import { file_explorer_small } from "./assets"
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';


function Folder() {

    const dispatch = useDispatch();
    const current = useSelector(getAboutMeVisibility);

    const CloseClick = () => {
        if (current)
            dispatch(hideAboutMe())
    }

    const folder = useSelector(getFolder);

    const folderBox = useRef();

    const folderSize = {
        minimized: false,
        min: {
            width: "60%",
            height: "60%"
        },
        max: {
            width: "100%",
            height: "calc(100% - var(--footer-height))"
        }
    }

    const handleRestore = (e) => {
        const targetDimensions = folderSize.minimized ? folderSize.max : folderSize.min;
        folderSize.minimized = !folderSize.minimized;
        folderBox.current.style.width = targetDimensions.width;
        folderBox.current.style.height = targetDimensions.height;
    }
    const variants = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0,
            transition: { duration: 5 }
        }
    }
    return (
        <Draggable cancel=".preventDrag">
            {/* ADD THIS class to any child from where you don't want drag to initiate  */}
            <FolderContainer ref={folderBox}>
                {/* Folder header */}
                <FolderHeader>
                    <FolderName>
                        <img src={file_explorer_small} alt="folder Icon" />
                        <h2>{folder}</h2>
                    </FolderName>
                    <FolderControl className='preventDrag'>
                        <Icon className='controlButton' iconName='ChromeMinimize' title="minimize" aria-label='minimize' style={{ color: NeutralColors.gray10 }} />
                        <Icon onClick={handleRestore} className='controlButton' iconName='ChromeRestore' title="restore" aria-label='restore' style={{ color: NeutralColors.gray10 }} />
                        <Icon onClick={CloseClick} className='controlButton' iconName='ChromeClose' title="close" aria-label='close' style={{ color: NeutralColors.gray10 }} />
                    </FolderControl>

                </FolderHeader>
                <FolderNavigation variants={variants} hidden="hidden" animate="visible" onDragStart={() => { return false; }}>
                    <NavigationControl>
                        <IconButton>
                            <ArrowBack />
                        </IconButton>
                        <IconButton>
                            <ArrowForward />
                        </IconButton>
                        <IconButton>
                            <KeyboardArrowDown />
                        </IconButton>
                        <IconButton>
                            <ArrowUpward />
                        </IconButton>
                    </NavigationControl>

                    <CurrentPath>
                        <h2> This PC {`> ${folder}`} </h2>
                    </CurrentPath>
                </FolderNavigation>

                <FolderMain>
                    <FolderSidebar />
                    <FolderContent />
                </FolderMain>
            </FolderContainer>
        </Draggable >


    )
}

export default Folder

const FolderContainer = styled.div`
    display:inline-block;
    background-color:#11100f;
    width:100%;
    height:calc(100% - var(--footer-height));
    box-sizing: border-box;
    position:absolute;
    z-index:100;
    overflow:hidden;
    transition:width .1s linear;
    transition:height .1s linear;

`;

const FolderHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    width:100%;
    background-color:#292827;
    border-bottom: 1px solid  rgba(255,255,255,.2);
    padding:0 2px ;
    ;
`;

const FolderControl = styled(motion.div)`
    >.controlButton{
        padding:5px 10px;
        cursor: pointer;
        :hover{
            background-color: #484644 ;
        }
    }

    >.controlButton:last-child{
        :hover{
            background-color: #e81123 ;
        }
    }
`;

const FolderName = styled.div`
    display:flex;
    align-items:center;
    color:var(--folder_text_color) ;
    margin-left:5px;
    >img{
        margin-right:5px;
    }
    >h2{
        font-size:16px;
        font-weight: 300;
    }
`;


const FolderNavigation = styled(motion.div)`
    display:flex;
    align-items:center;
    box-sizing: border-box;
`;


const NavigationControl = styled.div`
    display:flex;
    align-items:center;
    padding:3px 10px;
    box-sizing: border-box;

    /* flex:.2; */
    >button>.MuiSvgIcon-root{
        color:var(--folder_text_color) ;
        font-size: 18px;
    }
`;

const CurrentPath = styled.div`
    flex:.99;
    border: 1px solid rgba(255,255,255,.2);
    box-sizing: border-box;

    >h2{
        color:var(--folder_text_color) ;
        font-size:16px;
        font-weight: 300;
        padding: 5px;
    }
`;

const FolderMain = styled.div`
    display:flex;
    
`;
