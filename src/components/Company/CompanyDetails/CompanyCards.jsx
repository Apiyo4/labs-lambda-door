import React from 'react'


export const CompanyCards =({history}) => {
    return (
        <div>
        <a href onClick={() => history.push("/review-card/interview")}>
        See more</a> 
        </div>
    )
}