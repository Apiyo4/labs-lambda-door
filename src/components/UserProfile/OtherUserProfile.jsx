import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { selectedUsers } from '../../state/actions/selectedusers';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import UserCard from './UserCard';

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
const ImageDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledContainer = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  padding-top: 4rem;

  .user-avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #bfbfbf;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;
const OtherUserProfile = ({ credentials, isLoading, selectedUsers }) => {
  const location = useLocation();
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    setUserId(location.state.userId);

    selectedUsers(userId);
  }, [userId, credentials.full_name]);
  const noImg =
    'http://res.cloudinary.com/lambdadoor/image/upload/v1588261414/w6kpje4ruqrzxxmq0lkq.png';
  return !credentials.full_name ? (
    <Spin />
  ) : (
    <>
      <ImageDiv>
        <StyledContainer>
          <div className="user-avatar">
            <img
              src={
                credentials.profile_picture
                  ? credentials.profile_picture
                  : noImg
              }
              alt="avatar"
              style={{ width: '100%' }}
            />
          </div>
        </StyledContainer>
      </ImageDiv>
      <DivBorder>
          <UserCard credentials = {credentials} />
      </DivBorder>
    </>
  );
};

const mapStateToProps = state => ({
  credentials: state.selectUserDetails.details,
  isLoading: state.authState.isLoading,
});

export default connect(mapStateToProps, { selectedUsers })(OtherUserProfile);
