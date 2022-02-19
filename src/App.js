import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import './App.css';
import AppFooter from './components/AppFooter';
import AppMain from './components/AppMain';
import LockScreen from './components/LockScreen';
import { windows11_dark, file_explorer, gmail, slack, spotify } from "./components/assets.js"
import { checkloginStatus } from './features/appSlice';


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
    <div className="App" >

      {/* {!loggedIn ?
        <LockScreen /> :
        <>
          <AppBody>
            <AppMain />
            <AppFooter />
          </AppBody>
        </>

      } */}

      <AppBody>
        <AppMain desktopApps={desktopApps} />
        <AppFooter />
      </AppBody>

    </div>
  );
}

export default App;


const AppBody = styled.div`
  
`;

