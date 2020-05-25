import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRedux } from '../../../utils/testingHelpers';
import CompanyProfile from './CompanyProfile';

const company = {
  average_rating: '4.0000000000000000',
  description:
    'Paystack helps businesses in Africa get paid by anyone, anywhere in the world',
  id: 10,
  latitude: 31,
  location: 'Lagos, NG',
  logo: '',
  longitude: -80,
  name: 'Paystack',
  type: 'FinTech',
  website: 'https://paystack.com/',
};
const avgSalaries = {
  avg: 3000000,
  currency: 'Nigerian Naira',
};
beforeEach(cleanup);
describe('Company Profile', () => {
  test('renders component without crashing', () => {
    renderWithRedux(
      <CompanyProfile company={company} avgSalaries={avgSalaries} />
    );
  });
  test('renders correctly', () => {
    expect(
      renderWithRedux(
        <CompanyProfile company={company} avgSalaries={avgSalaries} />
      ).baseElement
    ).toMatchSnapshot();
  });
  test('displays company bio', () => {
    const { getByText } = renderWithRedux(
      <CompanyProfile
        company={company}
        avgSalaries={avgSalaries}
        avgRating={company.average_rating}
      />
    );
    const companyBio = getByText(
      /Paystack helps businesses in Africa get paid by anyone, anywhere in the world/i
    );

    expect(companyBio).toBeTruthy();
  });
});
