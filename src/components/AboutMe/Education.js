import React from 'react'
import styled from 'styled-components'
import userData from "../../assets/userData"

function Education() {
    return (
        <EductationContainer>
            {
                userData.education.map((institute, insIndex) => (
                    <Institute key={insIndex}>
                        <h1>
                            {institute.name}
                        </h1>
                        <InstitueInfo>

                            <h5>{institute.degree}</h5>
                            <Passing>
                                <h4>{institute.year}</h4>
                                <h4>{institute.grade}</h4>
                            </Passing>
                        </InstitueInfo>

                    </Institute>
                ))
            }
        </EductationContainer>
    )
}

export default Education


const EductationContainer = styled.div`
    padding:20px;
`;

const Institute = styled.div`
    padding-bottom:5px;
    margin-bottom:5px ;
    border-bottom: 1px solid  rgba(255,255,255,.2);
    >h1{
        font-size: 24px; 
        font-weight:400;
    }
`;

const Passing = styled.div`
    display:flex;
    justify-content:space-between;
    width:20%;
    margin:10px 0;
    flex-wrap:wrap ;
    >h4{
        font-size: 16px ;
        font-weight: 300 ;
        margin-right:5px ;
    }
`;

const InstitueInfo = styled.div`
    padding-left:20px;
    >h5{
        font-weight: 300 ;
        font-size: 20px ;

    }
`;