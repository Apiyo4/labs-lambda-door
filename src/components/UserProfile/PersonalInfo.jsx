import React from 'react';
import styled from 'styled-components';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import {
  EditOutlined,
  CloseOutlined,
} from '@ant-design/icons';

import UserCard from './UserCard';



const H4margin = styled.h4`
  text-align: right;
  cursor: pointer;
`;

const DivBorder = styled.div`
  border: 1px solid #ccc;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
`;

const PersonalInfo = ({ openForm, isClose, credentials, isLoading }) => {
  
  return (
    <DivBorder>
      <div>
        {isClose && (
          <H4margin>
            {' '}
            <span onClick={openForm}>
              <EditOutlined />
              Edit
            </span>
          </H4margin>
        )}
        {!isClose && (
          <div>
            
            <H4margin>
              <span onClick={openForm}><CloseOutlined/>Close</span>
            </H4margin>
            <div>
              <UserForm openForm={openForm} />
            </div>
          </div>
        )}
      </div>
      {isClose && (
        <UserCard credentials={credentials}/>
      )}
    </DivBorder>
  );
};

const mapStateToProps = state => ({
  credentials: state.authState.credentials,
  isLoading: state.authState.isLoading,
});

export default connect(mapStateToProps)(PersonalInfo);
