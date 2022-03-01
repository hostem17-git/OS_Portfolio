import { Avatar } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import user from '../../assets/userData';


function AboutMe() {
    console.log(user.pic)
    return (
        <AboutMeContainer>
            <Avatar sx={{ width: 120, height: 120 }} src={user.userImage} />
            <h1>{`< Hello World! />`}</h1>
            <Description>
                <h2>I am {user.FirstName} {user.LastName}{user.aboutMe.intro}</h2>
                <h4>{user.aboutMe.description}</h4>
                <h4>{user.aboutMe.outro}</h4>
            </Description>
        </AboutMeContainer >
    )
}

export default AboutMe


const AboutMeContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    padding-top: 40px;
    >h1{
        font-weight: 300;
        margin-top:10px;
        /* font-size: 18px; */
    }

`;
const Description = styled.div`
    text-align: center;
    >h2,>h4{
        margin:20px auto;
        font-weight: 300;
    }
    >h2{
        font-size:24px;
    }
    .h4{
        font-size:18px;
    }
`;