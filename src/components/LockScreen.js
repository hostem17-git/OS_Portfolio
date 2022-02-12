import React, { useState } from 'react'
import styled from 'styled-components'
import { Avatar, Button } from '@mui/material'
import { useDispatch } from "react-redux"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { login } from "../features/appSlice"


function LockScreen() {
    const [name, setName] = useState("");
    const bg_image_source = "https://unsplash.com/photos/Z1BEsigS0TI/download?ixid=MnwxMjA3fDB8MXx0b3BpY3x8Q0R3dXdYSkFiRXd8fHx8fDJ8fDE2NDQ2NjQ3Njg&force=true&w=1920"
    const dispatch = useDispatch()
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login({
            name: { name }
        }))
        console.log("clicked")
    }

    return (
        <LockScreenContainer>
            <img src={bg_image_source} alt="background" />

            <LockScreenData>
                {/* Avatar */}
                <Avatar
                    alt="Login Avatar"
                    sx={{ width: 100, height: 100 }}
                >{name[0]}</Avatar>
                {/* Hello */}
                <p>Hello {name}!</p>
                {/* Input Field */}
                <LockScreenInput>
                    <form>
                        <input placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />

                        <Button type="submit" onClick={handleLogin}>
                            <ArrowForwardIcon />
                        </Button>
                    </form>

                    {/* {{box-shadow: 0px 1px 5px white;}} */}
                </LockScreenInput>

            </LockScreenData>

        </LockScreenContainer >
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

const LockScreenData = styled.div`
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

    
    >.MuiAvatar-root{
        font-size: 10vh;
        text-transform: capitalize;
    }


`;

const LockScreenInput = styled.div`
    padding: 0%;;
    display:flex;
    align-items:center;
    background-color: white;
    >form>input{
        padding:5px;
        border-radius: 5px ;
        border:none;
        outline:none;
    }

    :focus{
        box-shadow: 0px 1px 5px white;
    }
    :hover{
        box-shadow: 0px 1px 5px white;
    }

    >.MuiAvatar-root:hover{
        background-color: red;
    }
`;


