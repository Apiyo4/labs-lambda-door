import React from 'react';
import { Avatar } from './Avatar';
import { PersonalInfo } from './PersonalInfo';

export const UserProfile = ()=>{
    return(
        <div>
            <div>
                <Avatar />
                <PersonalInfo />
            </div>
        </div>
    )
}