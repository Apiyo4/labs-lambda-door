import React from 'react';
import styled from 'styled-components'



const Div =  styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-top:2%;
`
const Div1 = styled.div`
width: 50%;
margin-bottom:1%;
`
const H4bold =  styled.h4`
    font-weight: bold;
`
export const PersonalInfo = () => {
    return (
        <Div>
            <Div1>
                <h4>Full Name</h4>
                <H4bold>josiah-williams</H4bold>
            </Div1>
            <Div1>
                <h4>Username</h4>
                <H4bold>josiah-williams</H4bold>
                 </Div1>
                 <Div1>
                <h4>Email</h4>
                <H4bold>josiahdamiwilliams@gmail.</H4bold> 
                </Div1>
                <Div1>
                <h4>Age</h4>
                <H4bold>20</H4bold>
                </Div1>
                <Div1>
                <h4>Location</h4>
                <H4bold>Nigeria</H4bold>
                </Div1>
        </Div>
    )
}