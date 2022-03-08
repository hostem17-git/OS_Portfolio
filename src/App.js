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
import { initializeIcons } from '@fluentui/font-icons-mdl2';


function App() {
  initializeIcons();

  const loggedIn = useSelector(checkloginStatus)
  const desktopApps = {
    "About Me": file_explorer,
    "Gmail": gmail,
    "Slack": slack,
    "Spotify": spotify
  };
  const [startMenuVisibility, setStartMenuVisibility] = useState(false);



  return (
    <AppBody>
      {!loggedIn ?
        <LockScreen /> :
        <>
          <AppMain desktopApps={desktopApps} />
          {startMenuVisibility && <StartMenu desktopApps={desktopApps} onClickHandler={setStartMenuVisibility} />}
          <AppFooter setStartMenuVisibility={setStartMenuVisibility} />
        </>

      }
      {/* <AppMain desktopApps={desktopApps} />
      <StartMenu desktopApps={desktopApps} />
      <AppFooter /> */}

    </AppBody>
  );
}

export default App;


const AppBody = styled.div`
  width:100vw;
  height: 100vh;
`;

