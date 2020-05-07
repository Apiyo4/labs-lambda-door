import React from 'react';
import { useParams } from 'react-router-dom';
import { Rate, Spin } from 'antd';
import styled from 'styled-components';
import { mobilePortrait, tabletPortrait } from '../../../styles/theme.styles';
import CompanySalaryChart from './CompanySalaryChart';
import CompanyProfile from '../CompanyReview/CompanyProfile';

const StyledDiv = styled.div`
  max-width: 800px;
  padding: 50px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h2 {
    font-size: 2rem;
    margin-bottom: 4px;
  }
  @media ${mobilePortrait} {
    padding: 0 !important;
  }

  @media ${tabletPortrait} {
    padding: 0 !important;
    width: 98%;
  }

  .location-rating {
    display: flex;
    justify-content: space-between;
    .ant-rate {
      padding-left: 1rem !important;
      margin-bottom: 40px;
    }
    @media ${mobilePortrait} {
      flex-direction: column;
    }
  }
  .company-type {
    margin-top: 1rem;
  }
  p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  span {
    font-size: 1rem;
  }

  .text-info {
    margin-right: 20px;
  }

  .visual-info {
    margin-top: 50px;

    @media ${mobilePortrait} {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const CompanyCard = props => {
  const { companies } = props;
  const companyId = useParams().id;
  if (companies.length === 0) return <Spin />;
  const company = companies.find(elem => elem.id === Number(companyId));
  return (
    <CompanyProfile />
  );
};

export default CompanyCard;
