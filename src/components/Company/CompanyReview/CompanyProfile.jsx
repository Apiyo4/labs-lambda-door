import React from 'react'
import styled from 'styled-components'
import { Rate } from 'antd';
import {  withRouter } from 'react-router-dom';
import { Empty} from 'antd';
import { CompanyProfileInfo } from './CompanyProfileInfo';

const DivStyle = styled.div`
display: flex;
margin: 20px;
width: 85%;
line-height: 1.5;



justify-content: space-between;
margin-right:5%;
flex-direction: row;`

const Div1 = styled.div`
width:30%;
text-align: center;
border: 1px solid #ccc;
padding-left: 30px;
padding-top: 20px;
padding-bottom: 10px;
padding-right: 30px;
margin: 20px;
cursor: pointer;
&:hover {
    border: 1px solid #bb1333;
}`

const Div2 =styled.div`
border: 1px solid #ccc;
padding-left: 30px;
padding-top: 20px;
padding-bottom: 20px;
padding-right: 30px;
margin: 20px;
width: 55%;
cursor: pointer;
&:hover {
    border: 1px solid #bb1333;
}`

const Div3 =  styled.div`
    /* margin-left: -45%; */
    text-align: center;`
    

const CompanyProfile =({company, avgSalaries})=> {
    
    
    if(!avgSalaries){
        return(
            <DivStyle>
                <Div1>
                    <Div3>
                        <Empty
                            image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                            imageStyle={{
                                height: 60,
                            }}
                            description={
                                <span className="text">
                                    Oops!! <br />
            Average salary info not available
          </span>
                            }
                        >
                        </Empty>
                    </Div3>
                    
                    <Rate
                        disabled
                        allowHalf
                        defaultValue={Math.round(company.average_rating * 2) / 2}
                    />
                    <span> ({Math.round(company.average_rating * 10) / 10})</span>

                    <p>Average Rating</p>
                </Div1>
                <Div2>
                    <CompanyProfileInfo company={company} />
                </Div2>
             
            </DivStyle>
        )
        
    }
   
    return(
        <div>
            {<DivStyle>
                <Div1> {avgSalaries.currency} <h2>{avgSalaries.avg.toFixed(2)}</h2>
                    <p>Average salary</p>
                    <Rate
                        disabled
                        allowHalf
                        defaultValue={Math.round(company.average_rating * 2) / 2}
                    />
                    {/* <span> ({Math.round(company.average_rating * 10) / 10})</span> */}

                    <p>Average Rating</p>
                </Div1>
                <Div2>
                    <CompanyProfileInfo company={company} />
                </Div2>
            </DivStyle>

            }
            
            </div>

        

    )

}


export default withRouter(CompanyProfile);