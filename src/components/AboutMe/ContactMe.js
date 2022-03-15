import { CircleRounded } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import user from '../../assets/userData';
import OutboundIcon from '@mui/icons-material/Outbound';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Snackbar from '@mui/material/Snackbar';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function ContactMe() {


    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <ProfilesContainer>

            <PersonalInfo>
                <Item>
                    <LocalPhoneIcon sx={{ width: 14, height: 14 }} />
                    <h4>{user.phone}</h4>
                    <ContentCopyIcon
                        onClick={() => { navigator.clipboard.writeText(user.phone); setOpen(true); }}
                        onTouch={() => { navigator.clipboard.writeText(user.phone); setOpen(true); }}
                        className='copy'
                        sx={{ width: 14, height: 14 }}
                    /></Item>
                <Item>
                    <EmailIcon sx={{ width: 18, height: 18 }} />
                    <h4>{user.email}</h4>
                    <ContentCopyIcon
                        onClick={() => { navigator.clipboard.writeText(user.email); setOpen(true); }}
                        className='copy'
                        sx={{ width: 18, height: 18 }} />
                </Item>

            </PersonalInfo>

            {user.profiles.map((profile, profileIndex) => (
                <ProfilesItem key={profileIndex}>
                    <ProfileInfo>
                        <CircleRounded sx={{ width: 8, height: 8 }} />
                        <h3>{profile.name} </h3>
                        <a href={profile.value} rel="noreferrer" target="_blank" ><OutboundIcon /></a>
                    </ProfileInfo>
                    <img src={profile.picture} alt={profile.name} />
                </ProfilesItem>
            )


            )}


            <Snackbar
                open={open}
                autoHideDuration={600}
                onClose={handleClose}
                message="Copied"
                action={action}
            />
        </ProfilesContainer>

    )
}

export default ContactMe

const ProfilesContainer = styled.div`
    /* width:100%; */
    padding-top:20px;
    padding-left:20px;
    max-width:360px;

    color:var(--folder_text_color);
    
`;
const ProfilesItem = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    >img{
        object-fit:contain;
        width:40px;
    }
`;

const ProfileInfo = styled.div`
    display:flex;
    align-items: center;
    *{
        margin-right: 5px;
    }
    >h3{
        font-weight: 300;
    }
`;

const PersonalInfo = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;
const Item = styled.div`
    display:flex;
    align-items: center;
    >h4{
        font-weight:300;
    }
    *{
        margin-right: 5px ;
    }
    >.copy{
        cursor: pointer;
    }
`;