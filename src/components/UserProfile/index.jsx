import React, { useState } from 'react';
import { Avatar } from './Avatar';
import { PersonalInfo } from './PersonalInfo';
import { Links } from './Links';
import styled from 'styled-components'
const Div =  styled.div`
 margin-left: 5%;
 margin-right:5%;
`
export const UserProfile = ()=>{
    const [isClose, setIsClose] = useState(true);
    const openForm = () => {
        setIsClose(!isClose);
    }
    return(
        <Div>
            <div>
                <Avatar />
                <PersonalInfo isClose={isClose} openForm={openForm}/>
                {
                    isClose&&(
                        <Links />
                    )
                }
                
            </div>
        </Div>
    )
}