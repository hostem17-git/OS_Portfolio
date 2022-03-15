import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import './App.css';
import AppFooter from './components/AppFooter';
import AppMain from './components/AppMain';
import LockScreen from './components/LockScreen';
import { checkloginStatus } from './features/appSlice';
import StartMenu from './components/StartMenu';
import { initializeIcons } from '@fluentui/font-icons-mdl2';


function App() {
  initializeIcons();

  const loggedIn = useSelector(checkloginStatus)

  const [startMenuVisibility, setStartMenuVisibility] = useState(false);

  return (
    <AppBody>
      {!loggedIn ?
        <LockScreen /> :
        <>
          <AppMain />
          {startMenuVisibility && <StartMenu onClickHandler={setStartMenuVisibility} />}
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

