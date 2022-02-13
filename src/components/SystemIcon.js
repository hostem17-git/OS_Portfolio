import React from 'react'
import styled from 'styled-components'

function SystemIcon({ Icon }) {
    return (
        <SystemIconContainer>
            <Icon />
        </SystemIconContainer>
    )
}

export default SystemIcon

const SystemIconContainer = styled.div``;