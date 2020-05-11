import React from 'react';
import styled from 'styled-components';
import { mobilePortrait, tabletPortrait } from '../../../styles/theme.styles';

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

export const CompanyReviews = () => {
    return(
        <StyledDiv>
            <div className = "company-reviews">
                <h2>Reviews</h2>
            </div>
            <Div1>
            <h2>Josiah</h2>
                <p className="reviews">
                    Corywise is a greate company, we usually get there health care services.
                    Excellent culture and pleasant environment to work for.
                </p>
            </Div1>
        </StyledDiv>
    )
}

export default CompanyReviews;

