import React from 'react';
import styled from 'styled-components';
import { Rate } from 'antd';
import { mobilePortrait, tabletPortrait } from '../../../styles/theme.styles';

const StyledDiv = styled.div`
max-width: 800px;
padding: 50px;
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
flex-flow: 2px;
border: 1px solid black;
padding:30px;
margin-right:20px;
width:900px;
left:57px;
top:400px;
color: #000000;

.company-reviews{
    margin-top: 1rem;
}
p {
    display:flex;
    font-size: 1rem;
    margin-top: 1rem;
    margin: 0 auto;
    
}
`;

export const CompanyReviews = () => {
    return(
        <StyledDiv>
            <div className = "company-reviews">
                <h2>Reviews</h2>
            </div>
            <Div1>
                <p>Josiah</p>
                <br></br>
                <p className="reviews">
                    Corywise is a greate company, we usually get there health care services.
                    Excellent culture and pleasant environment to work for.
                </p>
            </Div1>
        </StyledDiv>
    )
}

export default CompanyReviews;

