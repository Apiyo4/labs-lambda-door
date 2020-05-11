import React from 'react';
import styled from 'styled-components';
import { mobilePortrait, tabletPortrait } from '../../../styles/theme.styles';
import CompanyProfile from '../CompanyReview/CompanyProfile';
import { connect } from 'react-redux';
import { getCompanies } from '../../../state/actions/companies';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getAvgSalaries } from '../../../state/actions/avgSalaries';
import {Spin } from 'antd';

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

export const CompanyInfoCard = ({ companies, avgSalaries, getCompanies, getAvgSalaries}) => {
  const companiesArr = companies.companies;
  const companyId = useParams().id;
  useEffect(()=>{
    getCompanies()
    getAvgSalaries(companyId)
  }, [companyId])

 
  if(!companies && !avgSalaries){
    return <h1><Spin /></h1>
    ;
  }
  const company = companiesArr.find(element => parseInt(companyId) === element.id);
  return (
    <StyledDiv>
      {company && avgSalaries ? (
      <div>
        <div className="textInfo">
          <h2>{company.name}- </h2>
        </div>
        <div className="location">
          <h2>{company.location}</h2>
        </div>
        <CompanyProfile company={company} avgSalaries={avgSalaries.avgSalaries[0]} />
      </div>) : null
      
      }
    </StyledDiv>
  );
};
const mapStateToProps = state=>{
  return {companies: state.companies, avgSalaries: state.avgSalaries};
}

export default connect(mapStateToProps, { getCompanies, getAvgSalaries})(CompanyInfoCard);
