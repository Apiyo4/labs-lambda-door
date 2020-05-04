
import React from 'react';
import * as rtl from '@testing-library/react';
import PersonalInfo from '../../UserProfile/PersonalInfo';
import { renderWithRedux } from '../../../utils/testingHelpers';

beforeEach(rtl.cleanup);

describe('PersonalInfo', ()=>{
    it('renders without crashing', ()=>{
        renderWithRedux(<PersonalInfo/>);
    });

    it('renders an input with a name "portfolio_link"', ()=>{
     expect(renderWithRedux(<portfolio_link/>).baseElement
     ).toMatchSnapshot();
    });

    it('renders an input with a name "github_link"', ()=>{
        expect(renderWithRedux(<github_link/>).baseElement
        ).toMatchSnapshot();
    });

    it('renders an input with a name "linkedin_link"',()=>{
        expect(renderWithRedux(<linkedin_link/>).baseElement
        ).toMatchSnapshot();
    });
});