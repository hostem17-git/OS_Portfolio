import { ArrowBackIosNew } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

function FolderContent() {
    return (
        <ContentContainer>


        </ContentContainer>
    )
}

export default FolderContent

const ContentContainer = styled.div`
    flex:.9;
    background-color:#11100f;
    display:flex;
    flex-direction: column;;
    width:100%;
    /* min-height: 100%; */
    color:white;
    height: calc(100vh - 130px );
    overflow-y: auto;
    border:1px solid rgba(255,255,255,.1);
   
    ::-webkit-scrollbar{
        width:100px;
        height:100%;
    }
`