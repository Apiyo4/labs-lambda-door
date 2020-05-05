import React from 'react';
import {
  UserOutlined,
  MailOutlined,
  CompassOutlined
} from '@ant-design/icons';
import {
  GithubOutlined,
  LinkedinOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
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
const Emaildiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const A = styled.a`
  width: 50%;
`;

const UserCard =({credentials})=>{
    
    return (
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
        {credentials.age ? (
          <Userfield
            credentials={credentials.age}
            UserAddOutlined={UserOutlined}
          />
        ) : null}

        {credentials.location ? (
          <Userfield
            credentials={credentials.location}
            UserAddOutlined={CompassOutlined}
          />
        ) : null}
        {credentials.github_link ? (
          <A href={`${credentials.github_link}`} target="blank">
            <Userfield
              credentials={credentials.github_link}
              UserAddOutlined={GithubOutlined}
            />
          </A>
        ) : null}

        {credentials.linkedin_link ? (
          <A href={`${credentials.linkedin_link}`} target="blank">
            <Userfield
              credentials={credentials.linkedin_link}
              UserAddOutlined={LinkedinOutlined}
            />
          </A>
        ) : null}

        {credentials.portfolio_link ? (
          <A href={`${credentials.portfolio_link}`} target="blank">
            <Userfield
              credentials={credentials.portfolio_link}
              UserAddOutlined={ProfileOutlined}
            />
          </A>
        ) : null}
      </Div>
    );
}

export default UserCard;