import React from 'react'
import styled from 'styled-components'
import { Rate, Spin } from 'antd';


const DivStyle = styled.div`
display: flex;
margin-left: 5%;
justify-content: space-between;
margin-right:5%;

`
const Div1 = styled.div`
width: 40%;
border: 1px solid #ccc;
padding-left: 20px;
padding-top: 20px;
padding-bottom: 20px;
padding-right: 20px;
`
const Div2 =styled.div`
width: 55%;
border: 1px solid #ccc;
padding-left: 20px;
padding-top: 20px;
padding-bottom: 20px;
padding-right: 20px;
`
const CompanyProfile =()=> {
    return(
        <DivStyle>
            <Div1> <h2>$76,000</h2>
            <p>Average salary</p>
               <Rate
                  disabled
                  allowHalf
                  defaultValue={10 / 2}
                />
            <p>Average Rating?</p>
            </Div1>
        <Div2>
            <h2>Company Bio</h2>
            <p>Cowrywise helps Nigerians
                save and invest money Online. We are
                a secure savings and investment
                platform to grow your wealth
                 </p>
        </Div2>
            </DivStyle>

        

    )

}


export default CompanyProfile