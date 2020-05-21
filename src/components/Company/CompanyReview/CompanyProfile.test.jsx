import React from 'react';
import * as rtl from '@testing-library/react';
import { renderWithRedux } from '../../../utils/testingHelpers';
import CompanyProfile from './CompanyProfile';


beforeEach(rtl.cleanup);

describe('CompanyProfile', ()=>{
    it('renders without crashing', ()=>{
        renderWithRedux(<CompanyProfile/>);
    });

    it('renders "average_rating" correctly', ()=>{
        expect(renderWithRedux(<average_rating/>).baseElement
        );
       });

       it('renders "avgSalaries" correctly', ()=>{
        expect(renderWithRedux(<avgSalaries/>).baseElement
        ).toMatchSnapshot();
    });
});
