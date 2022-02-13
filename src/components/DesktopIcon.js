import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'

function DesktopIcon({ Icon, title, taskbar, image, imageIcon }) {
    console.log(title, taskbar)
    return (
        <Draggable bounds="#desktop_screen">
            <DesktopIconContainer>
                {image ?
                    <>
                        <img className={`${taskbar ? "taskbar" : "desktop"}`} alt="icon" src={imageIcon} />
                    </>
                    : <>
                        <Icon sx={{
                            fontSize: 40
                        }} />
                    </>}

                {taskbar ? (<></>) : (<h4>{title}</h4>)}
            </DesktopIconContainer>
        </Draggable>)
}

export default DesktopIcon

const DesktopIconContainer = styled.div`
    color:white;
    display:flex;
    flex-direction: column;
    align-items: center;
    width:80px;
    padding:10px;
    cursor: pointer;
    border-radius: 5px;
    :hover{
        background-color:rgba(255,255,255,.1);
    }

    >h4{

        font-weight: 400;
    }

    >.taskbar{
        object-fit:contain;
        width:25px;
    }

    >.desktop{
        object-fit: contain;
        width:35px;
    }

`; 