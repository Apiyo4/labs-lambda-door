import React from 'react';
import styled from 'styled-components';
import { mobilePortrait, tabletPortrait } from '../../../styles/theme.styles';
import CompanyProfile from '../CompanyReview/CompanyProfile';

const StyledDiv = styled.div`
  h2 {
    font-size: 2rem;
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
  .textInfo {
    display: inline-block;
    margin-right: 15px;
  }
  .location {
    display: inline-block;
  }
`;

export const CompanyInfoCard = () => {
  return (
    <StyledDiv>
      <div className="textInfo">
        <h2>DoNotPay Inc - </h2>
      </div>
      <div className="location">
        <h2>Nigeria</h2>
      </div>
      <CompanyProfile />
    </StyledDiv>
  );
};

export default CompanyInfoCard;
