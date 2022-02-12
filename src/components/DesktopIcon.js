import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'

function DesktopIcon({ Icon, title }) {
    return (
        <Draggable bounds="#desktop_screen">
            <DesktopIconContainer>
                <Icon sx={{
                    // fontSize: 40
                }} />
                <h4>{title}</h4>
            </DesktopIconContainer>
        </Draggable>)
}

export default DesktopIcon

const DesktopIconContainer = styled.div`
    color:white;
    display:flex;
    flex-direction: column;
    align-items: center;
    width:fit-content;
    padding:10px;
    cursor: pointer;
    border-radius: 5px;
    :hover{
        background-color:rgba(255,255,255,.1);
    }

    >h4{

        font-weight: 400;
    }

`; 