import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import './App.css';
import AppFooter from './components/AppFooter';
import AppMain from './components/AppMain';
import LockScreen from './components/LockScreen';
import { file_explorer, gmail, slack, spotify } from "./components/assets.js"
import { checkloginStatus } from './features/appSlice';
import StartMenu from './components/StartMenu';


function App() {
  const loggedIn = useSelector(checkloginStatus)
  const desktopApps = {
    "About Me": file_explorer,
    "Gmail": gmail,
    "Slack": slack,
    "Spotify": spotify
  };


  console.log(loggedIn, typeof (loggedIn))

  return (
    <AppBody>
      {/* {!loggedIn ?
        <LockScreen /> :
        <>
          <AppBody>
            <AppMain />
            <AppFooter />
          </AppBody>
        </>

      } */}
      <AppMain desktopApps={desktopApps} />
      <AppFooter />

    </AppBody>
  );
}

export default App;


const AppBody = styled.div`
  width:100vw;
  height: 100vh;
`;

