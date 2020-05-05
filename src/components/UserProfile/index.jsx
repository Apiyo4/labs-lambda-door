import React from 'react';
import { AvatarContainer } from './Avatar';
import PersonalInfo from './PersonalInfo';
import { Links } from './Links';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { changeIsClose } from '../../state/actions/isClose';
import Interests from '../Layout/SideNav/Interests.jsx';


const Div = styled.div`
  margin-left: 5%;
  margin-right: 5%;
`;
const DivMargin = styled.div`
 margin-bottom: 5%;
`
const UserProfile = ({ changeIsClose, isClose }) => {
  const openForm = () => {
    changeIsClose();
  };
  return (
    <Div>
      <div>
        <AvatarContainer />
        <PersonalInfo isClose={isClose.isClose} openForm={openForm} />
        <DivMargin>
          {isClose.isClose && <Interests />}
        </DivMargin>
        

        {/* {isClose.isClose && <Links />} */}
      </div>
    </Div>
  );
};
const mapStateToProps = state => {
  return {
    isClose: state.isClose,
  };
};
export default connect(mapStateToProps, { changeIsClose })(UserProfile);
