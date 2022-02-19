import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'

function DesktopIcon({ Icon, title, taskbar, image, imageIcon }) {
    console.log(title, taskbar)
    return (
        <Draggable bounds="#desktop_screen">
            <WidthSeparator  >
                <IconContainer className={`${taskbar ? "taskbarContainer" : "desktopContainer"}`} >
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
                </IconContainer>
            </WidthSeparator>
        </Draggable>)
}

export default DesktopIcon

const WidthSeparator = styled.div`
    >.taskbarContainer{
        width:40px;
    }
    >.desktopContainer{
        width:80px;
    }
`;


const IconContainer = styled.div`
    color:white;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:10px 0;
    cursor: pointer;
    border-radius: 5px;
    :hover{
        background-color:rgba(255,255,255,.1);
    }

    >h4{
        padding-top:5px;
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