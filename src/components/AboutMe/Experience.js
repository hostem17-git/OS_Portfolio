import React from 'react'
import styled from 'styled-components'
import user from "../../assets/userData"
import CircleIcon from '@mui/icons-material/Circle';

function Experience() {
    return (
        <ExperienceContainer>
            {
                user.experiences.map((org_item, org_index) => {
                    return <OrganizationContainer key={org_index}>

                        <Organization>

                            <OrgInfo>
                                <h1>{org_item.organization}</h1>
                                <Date>
                                    <p>{org_item.startDate}-</p>{org_item.isCurrent ? <p>Present</p> : <p>{org_item.endDate}</p>}
                                </Date>
                            </OrgInfo>

                            <img src={org_item.organizationPicture} alt={org_item.organization} />

                        </Organization>

                        {org_item.positions.map((pos, pos_index) => {
                            return <PosDetails>
                                <h1><CircleIcon sx={{ width: 10, height: 10 }} /><span>{pos.positionName}</span></h1>
                                <Date>
                                    <p>{pos.startDate}-</p>{pos.isCurrent ? <p>Present</p> : <p>{pos.endDate}</p>}
                                </Date>
                                <p>
                                    {pos.description}
                                </p>
                            </PosDetails>
                        })}
                    </OrganizationContainer>
                })
            }
        </ExperienceContainer>
    )
}

export default Experience


const ExperienceContainer = styled.div`     
    /* padding:auto 40px; */
    width:100%;
    padding:20px;
    box-sizing: border-box;
    
`;

const OrganizationContainer = styled.div`
    width:inline-block;
    /* width:60%; */
    margin-bottom: 10px;
    padding-bottom: 5px;

`;

const Organization = styled.div`
    display:flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    >img{
        object-fit: contain;
        width:100px;
        margin-right: 10px;
    }
`;

const OrgInfo = styled.div`
    >h1{
        font-weight: 400;
        font-size:24px;
    }

    

`;

const PosDetails = styled.div`
    padding-left: 80px;
    @media (max-width: 450px) {
     padding-left   : 10px ;
    }
    ;
    >h1{
        font-weight: 400;
        font-size:20px;
        display:flex;
        align-items:center;
        >span{
            margin-left: 5px;;
        }
    }
    margin-bottom: 10px;
    border-bottom: 1px solid  rgba(255,255,255,.2);
    padding-bottom:5px;
`;

const Date = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-start;
`;