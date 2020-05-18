/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-wrap-multilines */
import React, {useState, useEffect} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card } from 'antd';
import styled from 'styled-components';
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
  height: 180px;
  padding-top: 0.5rem !important;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    border: 1px solid #bb1333;
  }

  .stars {
    margin-top: 30px;
    font-size: 14px;
  }

  @media ${mobilePortrait} {
    padding: 0 !important;
  }
  @media ${tabletPortrait} {
    padding: 0 !important;
  }
`;
const ReviewerName = styled.div`
  text-align: right;
`;

const InterviewReviewList = ({
  history,
  singleCompanyReviews: {
    reviews: { interviewReview },
  },
}) => {
  const [fromCompanyInfo, setFromCompanyInfo] = useState(false);
  const showBackButton = history.location.state;
  useEffect(() => {
    if (showBackButton) {
      setFromCompanyInfo(showBackButton.fromCompanyInfo)
    }
  }, [])
  return (
     <div>
      {fromCompanyInfo ?
        <BackButton />
        : null
      }
       {
    interviewReview.length === 0 ? (
    <StyledEmpty>
            <EmptyComponent />
    </StyledEmpty>
  ) : (
    <ReviewCard>
      {interviewReview.map(interviewReview => (
        <StyledCard
          key={interviewReview.id}
          onClick={() =>
            history.push(`/interviewreviews/${interviewReview.id}`)
          }
        >
          <p>
            {interviewReview.text.length > 100 ? (
              <span>
                {interviewReview.text.slice(0, 100)}
                ...
              </span>
            ) : (
              <span>{interviewReview.text}</span>
            )}
          </p>
          <ReviewerName> <Link to={`/users/interviewReview.user_id`}>
            {interviewReview.full_name}
          </Link>
            
            </ReviewerName>
        </StyledCard>
      ))}
    </ReviewCard>
  )
            }
    </div>
  )
};
export default withRouter(connect(state => state)(InterviewReviewList));
