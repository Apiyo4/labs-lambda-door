import React from 'react';

export const CompanyProfileInfo =({company})=>{
    return (
        <div>
            <h2>Company Bio</h2>
            <p>{company.description}
            </p>
        </div>
    )
}