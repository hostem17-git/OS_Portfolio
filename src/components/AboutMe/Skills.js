import Circle from '@mui/icons-material/Circle'
import React from 'react'
import styled from 'styled-components'
import user from '../../assets/userData'

function Skills() {
    return (
        <SkillContainer>
            {user.skills.map((section, sectionIndex) => {
                return <Skill key={sectionIndex}>
                    <h1>{section.name}</h1>
                    <SkillItems>
                        {section.values.map((val, valIndex) => {
                            return (
                                <span><Circle sx={{ width: 8, height: 8 }} /> <h4>{val}</h4></span>
                            )
                        })}
                    </SkillItems>
                </Skill>
            })}

        </SkillContainer>
    )
}

export default Skills



const SkillContainer = styled.div`
    width:100%;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 5px;
`;

const Skill = styled.div`
    /* width:70%; */
    >h1{
        font-size: 24px;
        font-weight: 400;
    }
    border-bottom: 1px solid  rgba(255,255,255,.2);
    margin-bottom:5px;
`;

const SkillItems = styled.div`
    display:flex;
    margin-top:10px;
    margin-bottom: 5px;
    padding-left:20px;
    flex-wrap: wrap;
    >span{
        display:flex;
        align-items:center;
        >h4{
            margin-left:5px;
            margin-right: 10px;
            font-weight: 400;
        }
    }
    
`;

