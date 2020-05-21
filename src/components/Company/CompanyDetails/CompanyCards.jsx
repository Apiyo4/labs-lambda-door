import React from 'react'


export const CompanyCards =({history}) => {
    console.log('company cards is being called');
    return (
        <div>
        <a href onClick={() => history.push("/review-card/interview")}>
        See more</a> 
        </div>
    )
}