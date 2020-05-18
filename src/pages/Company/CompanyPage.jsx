/* eslint-disable no-debugger */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Tabs} from 'antd';
import { getCompanies } from '../../state/actions/companies';
import {
  getInterviewReviewsByCompanyId,
  getSalaryReviewsByCompanyId,
} from '../../state/actions/reviews';
// import CompanyCard from '../../components/Company/CompanyDetails/CompanyCard';

import CompanyReviewCard from '../../components/Company/CompanyReview/CompanyReviewCard';
import InterviewReviewList from '../../components/Company/InterviewReviews/InterviewReviewList';
import SalaryReviewsList from '../../components/Company/SalaryReviews/SalaryReviewsList';
import CompanyInfoCard from '../../components/Company/CompanyDetails/CompanyInfoCard';
import BackButton from '../../components/Company/CompanyDetails/BackButton';

const { TabPane } = Tabs;
const CompanyPage = ({
  getCompanies,
  getInterviewReviewsByCompanyId,
  companies: { companies },
  // avgSalaries: { avgSalaries },
  // authState: {
  //   credentials: { id },
  // },
  getSalaryReviewsByCompanyId,
  history,
  location,
}) => {
  const companyId = useParams().id;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/');
    }
    getCompanies();
    getInterviewReviewsByCompanyId(companyId);
    getSalaryReviewsByCompanyId(companyId);
  }, []);

  return (
    <div>
      <BackButton />
      <Tabs defaultActiveKey={String(location.state)}>
        <TabPane tab="Company Info" key="0">
          {/* <CompanyCard companies={companies} /> */}
          <CompanyInfoCard />
        </TabPane>
        <TabPane tab="Company Reviews" key="1">
          <CompanyReviewCard />
        </TabPane>
        <TabPane tab="Salary Reviews" key="2">
          <SalaryReviewsList />
        </TabPane>
        <TabPane tab="Interview Process Reviews" key="4">
          <InterviewReviewList />
        </TabPane>
      </Tabs>
    </div>
  );
  
};
export default connect(state => state, {
  getCompanies,
  getInterviewReviewsByCompanyId,
  getSalaryReviewsByCompanyId,
})(CompanyPage);
