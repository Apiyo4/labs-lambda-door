import React from 'react';
import styled from 'styled-components';
import { mobilePortrait, tabletPortrait } from '../../../styles/theme.styles';
import CompanyReviews from './CompanyReviews';
import CompanyProfile from '../CompanyReview/CompanyProfile';
import { connect } from 'react-redux';
import { getCompanies } from '../../../state/actions/companies';
import { useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { getAvgSalaries } from '../../../state/actions/avgSalaries';
import { Spin } from 'antd';
import {
  getReviewsByCompanyId,
  getInterviewReviews,
} from '../../../state/actions/reviews';
import { CompanyCards } from './CompanyCards';

const StyledDiv = styled.div`
 width:95%;
 
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
const Pcursor= styled.p`
cursor: pointer;
margin-left: 40px;
`;
const H3 = styled.a`
cursor:pointer;
`
export const CompanyInfoCard = ({history,
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

  const companyReview = reviews.companyReview;
  const interviewReview = reviews.interviewReview;

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
    
  // renderReviewOrInterview function is written to replace {/* {(companyReview === true) ? <CompanyCards/> : null } */} being used twice to make the code DRY.
  function renderReviewOrInterview(){
    return (
    (companyReview === true) ? <CompanyCards/> : null 
    );
  }

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

      <div>
      {/* <h2>Review</h2> */}
      {companyReview && <CompanyReviews reviews={companyReview} id={companyId} title={'Reviews'} />}
        <Pcursor onClick={() => history.push({ pathname: `/company-page/${companyId}/review`, state: { fromCompanyInfo: true } })}> {renderReviewOrInterview()}</Pcursor> 
      {/* <h2>Interview Process</h2> */}
      {interviewReview && <CompanyReviews reviews={interviewReview} title={'Interview Process'}/>}
      <Pcursor onClick={() => history.push({ pathname: `/company-page/${companyId}/interview`, state: { fromCompanyInfo: true } })}>{renderReviewOrInterview()}</Pcursor>
 </div>

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

export default withRouter(connect(mapStateToProps, {
  getCompanies,
  getAvgSalaries,
  getReviewsByCompanyId,
  getInterviewReviews,
})(CompanyInfoCard));
