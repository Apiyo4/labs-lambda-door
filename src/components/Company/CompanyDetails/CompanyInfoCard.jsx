import React from 'react';
import styled from 'styled-components';
import { mobilePortrait, tabletPortrait } from '../../../styles/theme.styles';
import CompanyReviews from './CompanyReviews';
import CompanyProfile from '../CompanyReview/CompanyProfile';
import { connect } from 'react-redux';
import { getCompanies } from '../../../state/actions/companies';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAvgSalaries } from '../../../state/actions/avgSalaries';
import { Spin } from 'antd';
import {
  getReviewsByCompanyId,
  getInterviewReviews,
} from '../../../state/actions/reviews';

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

export const CompanyInfoCard = ({
  companies,
  singleCompanyReviews,
  avgSalaries,
  getCompanies,
  getAvgSalaries,
  getReviewsByCompanyId,
  getInterviewReviews,
  singleCompanyReviews: { reviews },
}) => {
  const companiesArr = companies.companies;
  const companyId = useParams().id;
  useEffect(() => {
    getCompanies();
    getAvgSalaries(companyId);
    getReviewsByCompanyId(companyId);
  }, [companyId]);

  if (!companies && !avgSalaries && !reviews) {
    return (
      <h1>
        <Spin />
      </h1>
    );
  }
  const company = companiesArr.find(
    element => parseInt(companyId) === element.id
  );
  const user = reviews.interviewReview;
  const newObj = [...user];

  const userIdObj = { ...newObj[0] };
  const userId = userIdObj.user_id;
  if (reviews.companyReview.length) {
    console.log('companyreview', reviews.interviewReview);
  } else {
    return null;
  }
  if (userId) {
    localStorage.setItem('userId', userId);
  }
  // const userId = singleCompanyReviews.reviews.interviewReview[0].user_id;
  return (
    <StyledDiv>
      {company && avgSalaries && reviews ? (
        <div>
          <div className="textInfo">
            <h2>{company.name}- </h2>
          </div>
          <div className="location">
            <h2>{company.location}</h2>
          </div>
          <CompanyProfile
            company={company}
            avgSalaries={avgSalaries.avgSalaries[0]}
          />
        </div>
      ) : null}
      <h2>Review</h2>
      {userId && <CompanyReviews reviews={reviews.companyReview} />}
      <h2>Interview Process</h2>
      {userId && <CompanyReviews reviews={reviews.interviewReview} />}
    </StyledDiv>
  );
};
const mapStateToProps = state => {
  return {
    companies: state.companies,
    avgSalaries: state.avgSalaries,
    singleCompanyReviews: state.singleCompanyReviews,
  };
};

export default connect(mapStateToProps, {
  getCompanies,
  getAvgSalaries,
  getReviewsByCompanyId,
  getInterviewReviews,
})(CompanyInfoCard);
