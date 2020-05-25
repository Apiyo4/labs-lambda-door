import React from 'react';
import styled from 'styled-components'


const Div = styled.div`
#infoR {
    font-size: 1.6rem;
}
`
export const CompanyProfileInfo =({company})=>{
    return (
        <Div>
            <h2 id = "infoR">
            Company Bio</h2>
            <p>{company.description}
            </p>
        </Div>
    )
}