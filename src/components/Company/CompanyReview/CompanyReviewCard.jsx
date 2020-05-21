/* eslint-disable react/self-closing-comp */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect, useState } from 'react';
import { useParams, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { Rate, Card } from 'antd';
import styled from 'styled-components';
import { getReviewsByCompanyId } from '../../../state/actions/reviews';
import { mobilePortrait, tabletPortrait } from '../../../styles/theme.styles';
import { EmptyComponent } from '../CompanyDetails/Empty';
import BackButton from '../CompanyDetails/BackButton';


const ReviewCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledEmpty = styled.div`
  display: flex;
  justify-content: center;
  height: 40vh;
  align-items: center;
  .text {
    font-size: 20px;
  }
`;

const StyledCard = styled(Card)`
  margin: 2rem 1.5rem 1rem 0rem !important;
  width: 280px;
  height: 200px;
  padding-top: 0.5rem !important;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    border: 1px solid #bb1333;
  }

  span {
    font-size: 18px;
  }

  .stars {
    margin-top: 30px;
    font-size: 14px;
  }

  .Headline {
    height: 60px;
  }

  @media ${mobilePortrait} {
    padding: 0 !important;
  }
  @media ${tabletPortrait} {
    padding: 0 !important;
  }
  @media only screen and (max-width: 540px) {
    span {
      font-size: 15px;
    }
    .stars {
      margin-top: 25px;
      font-size: 12px;
    }
    font-size: 11px;
    padding-top: 0.1rem !important;
  }
`;

const ReviewerName = styled.div`
  text-align: right;
  padding: 1rem 0;
`;

const H1 = styled.h1`
text-align:center;
font-size: 2rem;
`;
const CompanyReviewCard = ({
  history,
  getReviewsByCompanyId,
  singleCompanyReviews: {
    reviews: { companyReview },
  },
}) => {
  const [fromCompanyInfo, setFromCompanyInfo] = useState(false);
  const showBackButton = history.location.state;
  useEffect(()=>{
    if (showBackButton) {
      setFromCompanyInfo(showBackButton.fromCompanyInfo)
    }
  }, [])
  
  
  console.log(showBackButton)
  const companyId = useParams().id;
  useEffect(() => {
    getReviewsByCompanyId(companyId);
  }, []);
  return (<div>
    { fromCompanyInfo ?
    <div>
      <BackButton />
      <H1>Company Reviews</H1>
      </div>
    : null
}
        {
    companyReview.length === 0 ? (
    <div>
    <StyledEmpty>
            <EmptyComponent />
    </StyledEmpty>
    </div>
  ) : (
    <div>

    <ReviewCard>
          
      {companyReview.map(companyReview => (
        
        <StyledCard
          
          key={companyReview.id}
          onClick={() => history.push(`/companyReviews/${companyReview.id}`)}
        >
          <p className="headline">
            {companyReview.review_headline.length > 25 ? (
              <span>
                {companyReview.review_headline.slice(0, 25)}
                ...
              </span>
            ) : (
              <span>{companyReview.review_headline}</span>
            )}
          </p>
          <div className="stars">
            Rating:
            <br />
            <Rate disabled defaultValue={companyReview.ratings} size="small" />
          </div>
          <ReviewerName>
            {companyReview.full_name}
            </ReviewerName>
        </StyledCard>
      ))}
    </ReviewCard>
      </div>
  )
            }
  </div>)
};
export default withRouter(
  connect(state => state, {
    getReviewsByCompanyId,
  })(CompanyReviewCard)
);
