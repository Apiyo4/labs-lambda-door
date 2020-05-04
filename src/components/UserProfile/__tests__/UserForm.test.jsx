import React from 'react';
import * as rtl from '@testing-library/react';
import UserForm from '../../UserProfile/UserForm';
import { renderWithRedux } from '../../../utils/testingHelpers';

beforeEach(rtl.cleanup);

describe('UserForm', () =>{
    it('renders without crashing', ()=>{
        renderWithRedux(<UserForm/>);
    });

    it ('renders correctly', ()=>{
        expect(renderWithRedux(<UserForm/>).baseElement).toMatchSnapshot();
    });

    it('asserts that the component renders properly',()=>{
        expect(renderWithRedux(<UserForm/>).baseElement).toMatchSnapshot();
    })

});