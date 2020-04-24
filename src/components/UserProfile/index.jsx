import React from 'react';
import { Avatar } from './Avatar';
import { PersonalInfo } from './PersonalInfo';
import { Links } from './Links';
import styled from 'styled-components';
import { connect } from "react-redux";
import { changeIsClose } from '../../state/actions/isClose';

const Div = styled.div`
  margin-left: 5%;
  margin-right: 5%;
`;
const UserProfile = ({changeIsClose, isClose}) => {
   
  const openForm = () => {
    changeIsClose();
  };
  return (
    <Div>
      <div>
        <Avatar />
        <PersonalInfo isClose={isClose.isClose} openForm={openForm} />
        {isClose.isClose && <Links />}
      </div>
    </Div>
  );
};
const mapStateToProps = (state)=> {
  return {
    isClose: state.isClose,
  };
}
export default connect(
  mapStateToProps,
  {changeIsClose }
)(UserProfile);
