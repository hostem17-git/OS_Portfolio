import React from 'react'
import styled from 'styled-components'

function DesktopIcon({ Icon, title, taskbar, image, imageIcon, onClickhandler }) {
    return (

        <WidthSeparator className='test' onClick={() => { onClickhandler && onClickhandler(true) }} >
            <IconContainer className={"desktopContainer"} >
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

    )
}

export default DesktopIcon

const WidthSeparator = styled.div`
width:fit-content;
    >.desktopContainer{
        width:80px;
    }
`;

const IconContainer = styled.div`
    color:white;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:10px 0;
    cursor: pointer;
    border-radius: 5px;
    :hover{
        background-color:rgba(255,255,255,.1);
    }

    >h4{
        padding-top:5px;
        font-weight: 300;
        text-align: center;
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