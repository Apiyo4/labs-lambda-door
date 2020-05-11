import React from 'react'
import styled from 'styled-components'
import { Rate } from 'antd';
import {  Link, withRouter } from 'react-router-dom';
import { Empty, Button } from 'antd';

const DivStyle = styled.div`
display: flex;

justify-content: space-between;
margin-right:5%;
flex-direction: row;

`
const Div1 = styled.div`
width:40%;
border: 1px solid #ccc;
padding-left: 20px;
padding-top: 20px;
padding-bottom: 20px;
padding-right: 20px;
`
const Div2 =styled.div`
border: 1px solid #ccc;
padding-left: 20px;
padding-top: 20px;
padding-bottom: 20px;
padding-right: 20px;
width: 55%;
`
const CompanyProfile =({company, avgSalaries})=> {
    
    
    if(!avgSalaries){
        return(
            <DivStyle>
                <Div1>
                    <Empty
                        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                        imageStyle={{
                            height: 60,
                        }}
                        description={
                            <div>
                                <h3>Average salary</h3>
                                <span className="text">
                                    Oops!! <br />
            Salary info not available
          </span>
                            </div>
                        }
                    >
                        <Link to={{ pathname: '/add-review', state: 0 }}>
                            <Button>Post a Review</Button>
                        </Link>
                    </Empty>
                </Div1>
                <Div2>
                    <h2>Company Bio</h2>
                    <p>{company.description}
                    </p>
                </Div2>
             
            </DivStyle>
        )
        
    }
   
    return(
        <div>
            {<DivStyle>
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
            </DivStyle>

            }
            
            </div>

        

    )

}


export default withRouter(CompanyProfile);