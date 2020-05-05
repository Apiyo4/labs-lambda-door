import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { selectedUsers } from '../../state/actions/selectedusers';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  EditOutlined,
  UserAddOutlined,
  UserOutlined,
  MailOutlined,
  CompassOutlined,
  FileExcelFilled,
} from '@ant-design/icons';
import {
  GithubOutlined,
  LinkedinOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import Userfield from './Userfields';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Div1 = styled.div`
  flex-direction: column;
  width: 50%;
  margin-bottom: 1%;
`;
const Initialdiv = styled.div`
  flex-direction: column;
  width: 100%;
  margin-bottom: 2%;
`;
const H4bold = styled.h4`
  font-weight: bold;
  font-size: 22px;
  color: #bb1333;
`;
const H4 = styled.h4`
  font-size: 18px;
`;
const H4margin = styled.h4`
  text-align: right;
  cursor: pointer;
`;
const Emaildiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
        <Div>
          {credentials.full_name ? (
            <Initialdiv>
              <H4bold> {credentials.full_name} </H4bold>
              <h4> @{credentials.username} </h4>
            </Initialdiv>
          ) : null}

          {credentials.email_address ? (
            <Div1>
              <Emaildiv>
                <h4>
                  <MailOutlined style={{ color: '#bb1333' }} />{' '}
                  {credentials.email_address}{' '}
                </h4>
              </Emaildiv>
            </Div1>
          ) : null}
        {credentials.age ?(
              <Userfield
                credentials={credentials.age}
                UserAddOutlined={UserAddOutlined}
              />
        ) : null  }
        {credentials.location ?(
              <Userfield
                credentials={credentials.location}
                UserAddOutlined={CompassOutlined}
              />
        ):null}

         { credentials.github_link ? (
              <Userfield
                credentials={credentials.github_link}
                UserAddOutlined={GithubOutlined}
              />
         ):null
         } 
        {
          credentials.linkedin_link? (
                <Userfield
                  credentials={credentials.linkedin_link}
                  UserAddOutlined={LinkedinOutlined}
                />
          ) :null
        }
        {
          credentials.portfolio_link?(
                <Userfield
                  credentials={credentials.portfolio_link}
                  UserAddOutlined={ProfileOutlined}
                />
          ):null
        }

        </Div>
      </DivBorder>
    </>
  );
};

const mapStateToProps = state => ({
  credentials: state.selectUserDetails.details,
  isLoading: state.authState.isLoading,
});

export default connect(mapStateToProps, { selectedUsers })(OtherUserProfile);
