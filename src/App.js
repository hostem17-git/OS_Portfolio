import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import './App.css';
import AppFooter from './components/AppFooter';
import AppMain from './components/AppMain';
import LockScreen from './components/LockScreen';
import { checkloginStatus } from './features/appSlice';


function App() {
  const loggedIn = useSelector(checkloginStatus)

  console.log(loggedIn, typeof (loggedIn))

  return (
    <div className="App" >

      {!loggedIn ?
        <LockScreen /> :
        <>
          {/* AppBody */}
          <AppBody>
            <AppMain />
            <AppFooter />
          </AppBody>
          {/* App main Body */}
          {/* App footer */}
        </>

      }



    </div>
  );
}

export default App;


const AppBody = styled.div``;

