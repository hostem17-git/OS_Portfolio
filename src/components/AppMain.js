import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../features/appSlice'
import styled from 'styled-components'
import windows11_dark from "../assets/wallpapers/windows11_dark.jpg"



function AppMain() {
    console.log("wall", windows11_dark)

    const wallpaper = "https://drive.google.com/uc?export=download&id=1MNxyaA-e8DwQ5ifgOY945LLyvgvu_lye"
    const dispatch = useDispatch()

    return (
        <AppMainContainer>
            <Wallpaper
                style={{
                    backgroundImage: `url(${windows11_dark} )`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                }}
            >
            </Wallpaper>

            {/* <button onClick={() => { dispatch(logout()); }}> Logout</button> */}
        </AppMainContainer>

    )
}

export default AppMain

const AppMainContainer = styled.div`

    width:100vw;
    height:100vh;

`;

const Wallpaper = styled.div`
    width:100%;
    height:100%;
    
`;