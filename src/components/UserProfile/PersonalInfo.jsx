import React from 'react';
import styled from 'styled-components'
import { UserForm } from './UserForm';


const Div =  styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    
`
const Div1 = styled.div`
width: 50%;
margin-bottom:1%;
`
const H4bold =  styled.h4`
    font-weight: bold;
`
const H4margin = styled.h4`
    text-align: right;
`
const DivBorder =  styled.div`
    border: 1px solid #ccc;
    margin: auto;
    margin-top:5%;
    margin-bottom: 5%;
    padding-left: 5%;
    padding-right:5%;
    padding-top:3%;
    padding-bottom:3%;
`
export const PersonalInfo = ({openForm, isClose}) => {
    
     return (
        <DivBorder>
            <div>
                {isClose && 
                    <H4margin> <span onClick={openForm}>Edit </span></H4margin>
                }
                {!isClose && (
                    <div>
                        <H4margin><span onClick={openForm}>Close</span></H4margin>
                        <div>
                            <UserForm />
                    </div>
                    </div>
                )
                }       
            </div>
            {isClose &&(
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
                        <H4bold>josiahdamiwilliams@gmail.com</H4bold>
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
       
        </DivBorder>
    )
}