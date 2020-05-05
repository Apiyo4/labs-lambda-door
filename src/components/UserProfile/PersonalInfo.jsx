import React from 'react';
import styled from 'styled-components';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import {
  EditOutlined,
  UserAddOutlined,
  UserOutlined,
  MailOutlined,
  CompassOutlined,
  FileExcelFilled,
  CloseOutlined,
} from '@ant-design/icons';
import {
  GithubOutlined,
  LinkedinOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import Userfield from './Userfields';
import { Link } from 'react-router-dom';


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
const A = styled.a`
  width: 50%;
`
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
        <Div>
          {credentials.full_name !== null ? (
            <Initialdiv>
              <H4bold> {credentials.full_name} </H4bold>
              <h4> @{credentials.username} </h4>
            </Initialdiv>
          ) : null}
          {/* {credentials.username !== null ? (
            <Div1>
              <h4>Username:</h4>
              <H4bold>{credentials.username}</H4bold>
            </Div1>
          ) : null} */}

          {credentials.email_address !== null ? (
            <Div1>
              <Emaildiv>
                <h4>
                  <MailOutlined style={{ color: '#bb1333' }} />{' '}
                  {credentials.email_address}{' '}
                </h4>
              </Emaildiv>
            </Div1>
          ) : null}
          {credentials.age?(
            <Userfield
              credentials={credentials.age}
              UserAddOutlined={UserOutlined}
            />

          ):null

          }
          
          {
            credentials.location?(
              <Userfield
                credentials={credentials.location}
                UserAddOutlined={CompassOutlined}
              />
            ): null
          }
          {
            credentials.github_link?(
              <A href={`${credentials.github_link}`} target='blank'>
              <Userfield
                credentials={credentials.github_link}
                UserAddOutlined={GithubOutlined}
              />
              </A>
            ): null
          }

         
          {
            credentials.linkedin_link?(
              <A href={`${credentials.linkedin_link}`} target='blank'>
              <Userfield
                credentials={credentials.linkedin_link}
                UserAddOutlined={LinkedinOutlined}
              />
              </A>
            ):null
          }
              
          {
            credentials.portfolio_link?(
              <A href={`${credentials.portfolio_link}` } target='blank' >
              <Userfield
                credentials={credentials.portfolio_link}
                UserAddOutlined={ProfileOutlined}
              />
              </A>
            ): null
          }
          
        </Div>
      )}
    </DivBorder>
  );
};

const mapStateToProps = state => ({
  credentials: state.authState.credentials,
  isLoading: state.authState.isLoading,
});

export default connect(mapStateToProps)(PersonalInfo);
