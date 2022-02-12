import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'


function LockScreen() {

    const bg_image_source = "https://unsplash.com/photos/Z1BEsigS0TI/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8Q0R3dXdYSkFiRXd8fHx8fDJ8fDE2NDQ2NjQ3Njg&force=true&w=1920"
    return (
        <LockScreenContainer>
            <img src={bg_image_source} alt="background" />

            <LockScreenInput>
                {/* Avatar */}
                <Avatar
                    alt="Login Avatar"
                    sx={{ width: 100, height: 100 }}
                />
                {/* Hello */}
                <p>Hello!</p>
                {/* Input Field */}

                <input placeholder='Enter Your Name' />
            </LockScreenInput>

        </LockScreenContainer>
    )
}

export default LockScreen


const LockScreenContainer = styled.div`
    display:flex;
    width:100vw;
    height:100vh;  
    background-color:black;
    align-items:center;

    >img{
        place-items: center;;   
        /* object-fit:contain; */
        width:100%;
    }

    `;

const LockScreenInput = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-60%);
    ;
    display:flex;
    flex-direction: column;
    align-items:center;

    >*{
        padding:15px
    }

    >p{
        color:white;
    }

    >input{
        padding:8px;
        border-radius: 5px ;
        border:none;
        outline:none;
    }

    >input:focus{  
        box-shadow: 0px 1px 5px white;
    }

`;



