import {
  getCompanyReviews,
  getSalaryReviews,
  getInterviewReviews,
} from './reviews';
import { getTopRatedReviews } from './topRatedReviews';
import { getClosestCompanies } from './closestCompanies';

import { getAvgSalaries } from './avgSalaries';
import { changeIsClose } from './isClose';
import { selectedUsers} from './selectedusers'
// eslint-disable-next-line import/prefer-default-export
export const actions = {
         getCompanyReviews,
         getSalaryReviews,
         getInterviewReviews,
         getAvgSalaries,
         getTopRatedReviews,
         getClosestCompanies,
         changeIsClose,
         selectedUsers,
       };

