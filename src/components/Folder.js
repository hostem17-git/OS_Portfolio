import { ArrowBack, ArrowForward, ArrowUpward, KeyboardArrowDown } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import FolderContent from './FolderContent';
import FolderSidebar from './FolderSidebar';
import { useSelector } from 'react-redux';
import { getFolder } from '../features/folderSlice';

function Folder({ desktopApps }) {

    const folder = useSelector(getFolder);


    return (
        <FolderContainer>
            {/* Folder header */}
            <FolderHeader>test</FolderHeader>
            <FolderNavigation>
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
                <FolderSidebar desktopApps={desktopApps} />

                <FolderContent />
            </FolderMain>
        </FolderContainer>
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
`;

const FolderHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    width:100%;
    background-color:#292827;
    border-bottom: 1px solid  rgba(255,255,255,.2);
    ;
`;

const FolderNavigation = styled.div`
    display:flex;
    align-items:center;
    box-sizing: border-box;
`;

const NavigationControl = styled.div`
    display:flex;
    align-items:center;
    padding:5px 10px;
    box-sizing: border-box;

    /* flex:.2; */
    >button>.MuiSvgIcon-root{
        color:#e1dfdd;
        font-size: 18px;
    }
`;

const CurrentPath = styled.div`
    flex:.99;
    border: 1px solid rgba(255,255,255,.2);
    box-sizing: border-box;

    >h2{
        color:#e1dfdd;
        font-size:16px;
        font-weight: 300;
        padding: 5px;
    }
`;

const FolderMain = styled.div`
    display:flex;
    
`;
