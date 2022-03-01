import React from 'react'
import styled from 'styled-components'
import user from "../../assets/userData"

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
                                <h1>{pos.positionName}</h1>
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
`;

const OrganizationContainer = styled.div`
    width:inline-block;
    width:70%;
`;

const Organization = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    >img{
        object-fit: contain;
        width:100px;
    }
`;

const OrgInfo = styled.div`
    >h1{
        font-weight: 400;
        font-size:24px;
    }

`;

const PosDetails = styled.div``;

const Date = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-start;
`;