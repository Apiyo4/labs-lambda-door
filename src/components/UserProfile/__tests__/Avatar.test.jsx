/* eslint-disable no-undef */
import React from 'react';
import * as rtl from '@testing-library/react';
import Avatar from '../../Layout/SideNav/Avatar';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from '../../../utils/testingHelpers';

beforeEach(rtl.cleanup);

test('Avatar', () => {
  it('display the avatar with no problem', () => {
    renderWithRedux(<Avatar />);
  });

  it('renders correctly', () => {
    expect(
        renderWithRedux(<Avatar />).baseElement
    ).toMatchSnapshot();
  });
});
