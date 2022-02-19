import React from 'react'
import styled from 'styled-components'
import { windows11_dark } from "./assets.js"
import DesktopIcon from './DesktopIcon'



function AppMain({ desktopApps }) {
    console.log("wall", windows11_dark)

    return (
        <AppMainContainer id="desktop_screen"
            style={{
                backgroundImage: `url(${windows11_dark} )`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
            }}
        >
            <DesktopIconListContainer>
                {
                    Object.keys(desktopApps).map((index) => {
                        return <DesktopIcon image imageIcon={desktopApps[index]} title={index} />
                    })
                }
            </DesktopIconListContainer>
        </AppMainContainer >

    )
}

export default AppMain

const AppMainContainer = styled.div`
    width:100%;
    height:100%;
`;

const DesktopIconListContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:fit-content;
    /* border:1px solid pink; */
`;
