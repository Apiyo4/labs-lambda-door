import React from 'react';
import { Avatar } from './Avatar';
import { PersonalInfo } from './PersonalInfo';
import { Links } from './Links';

export const UserProfile = ()=>{
    return(
        <div>
            <div>
                <Avatar />
                <PersonalInfo />
                <Links />
            </div>
        </div>
    )
}