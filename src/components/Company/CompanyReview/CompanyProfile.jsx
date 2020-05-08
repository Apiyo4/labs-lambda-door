import React from 'react'
import styled from 'styled-components'
import { Rate, Spin } from 'antd';


const DivStyle = styled.div`
display: flex;
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
const CompanyProfile =({company, avgSalaries})=> {
    
    
    if(!avgSalaries){
        return <Spin />
    }
    console.log("not working", avgSalaries.currency)
    return(
        <DivStyle>
            { <div>
                <Div1> {avgSalaries.currency} <h2>{avgSalaries.avg}</h2>
                    <p>Average salary</p>
                    <Rate
                        disabled
                        allowHalf
                        defaultValue={Math.round(company.average_rating * 2) / 2}
                    />
                    <span> ({Math.round(company.average_rating * 10) / 10})</span>

                    <p>Average Rating?</p>
                </Div1>
                <Div2>
                    <h2>Company Bio</h2>
                    <p>{company.description}
                    </p>
                </Div2>
            </div>

            }
            
            </DivStyle>

        

    )

}


export default CompanyProfile