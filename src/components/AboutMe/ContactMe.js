import { Rating } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import user from '../../assets/userData';

function ContactMe() {



    return (
        <ProfilesContainer>
            <h1>My Online Presence</h1>

            <ProfilesList>
                {
                    user.profiles.map((item, index) => {
                        return (
                            <Profile className={item.isCoding && "coding"}>
                                <a href={item.value}>
                                    <img src={item.picture} alt={item.name} />
                                    <h4>{item.name}</h4>
                                    {item.isCoding ? (<Rating
                                        readOnly
                                        name={item.name}
                                        value={item.stars}
                                        max={item.stars}
                                    />) : (<></>)
                                    }
                                </a>
                            </Profile>
                        )
                    })
                }
            </ProfilesList>

        </ProfilesContainer>
    )
}

export default ContactMe

const ProfilesContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top:20px;
`;
const ProfilesList = styled.div`
    display:flex;
    align-items: center;
    flex-wrap: wrap;
    >.coding{
        position: relative;
        top:13px;
    }
`;
const Profile = styled.div`
    margin:1    5px;
    
    /* border:1px solid white; */
    >a{
        text-decoration: none;
        color:inherit;
        display:flex;
        flex-direction: column;
    align-items:center;
    justify-content:center;
    }
    >a>img{
        object-fit:contain;
        width:50px;
    }

`;