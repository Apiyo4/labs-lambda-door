import React from 'react';
import styled from 'styled-components';
import { mobilePortrait, tabletPortrait } from '../../../styles/theme.styles';
import { Empty } from 'antd';
import { CompanyReviewInfo } from './CompanyReviewInfo';


const StyledDiv = styled.div`
max-width: 800px;
padding: 40px;

h2 {
    font-size: 1,5rem;
  }
  @media ${mobilePortrait} {
    padding: 0 !important;
  }
  @media ${tabletPortrait} {
    padding: 0 !important;
    width: 98%;
  }
  @media ${mobilePortrait} {
    flex-direction: column;
  }
`;
const Div3 = styled.div`
padding-top: 5%;
`;

const Div1 = styled.div`
display: inline-block;
border: 1px solid #ccc;
padding-left: 20px;
padding-top: 20px;
padding-bottom: 40px;
padding-right: 20px;
margin: 0 auto;
width:800px;
color: #000000;

.company-reviews{
    margin-top: 1rem;
}
h2 {
    font-size: 2rem;
}

.reviews {
 p{
     font-size: 16px;
 }
}
`;

export const CompanyReviews = ({ singleCompanyReviews}) => {
   
    const reviewInfo = singleCompanyReviews.reviews.interviewReview[0];
    console.log(reviewInfo)
    if (!reviewInfo){
        return <Div3>
            <CompanyReviewInfo />
            <Empty
                image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                imageStyle={{
                    height: 80,
                }}
                description={
                    <span className="text">
                        Oops!! <br />
            No review found yet, perhaps none has been given.
          </span>
                }
            >
            </Empty>
        </Div3>
    }
    return(
        <StyledDiv>
            <CompanyReviewInfo />
            <Div1>
                <h2>{reviewInfo.full_name}</h2>
                <p className="reviews">
                    {reviewInfo.text}
                </p>
            </Div1>
        </StyledDiv>
    )
}

export default CompanyReviews;

