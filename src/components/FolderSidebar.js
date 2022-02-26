import React from 'react'
import styled from 'styled-components'

function FolderSidebar({ desktopApps }) {
    return (

        <SidebarContainer>
            <SidebarItemList>
                {Object.keys(desktopApps).map((index) => {
                    return <SidebarItem key={index}>
                        <img src={desktopApps[index]} alt={index} /> <p>{index}</p>
                    </SidebarItem>
                })}
            </SidebarItemList>

        </SidebarContainer>
    )
}

export default FolderSidebar

const SidebarContainer = styled.div`
    flex:.1;    
    display:flex;
    flex-direction: column;
    align-items:center;
`;

const SidebarItemList = styled.div``;
const SidebarItem = styled.div`
    display:flex;
    align-items: center;
    color:white;
    >img{
        object-fit:contain;
        height:15px;
        margin:5px;
    }

`; 