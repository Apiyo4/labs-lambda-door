import React, { useState, useEffect } from 'react';
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
    const [linksArr, setLinksArr] = useState([])
    useEffect(() => {
      setLinksArr([
        { name: [credentials.github_link, GithubOutlined] },
        { name: [credentials.linkedin_link, LinkedinOutlined] },
        { name: [credentials.portfolio_link, ProfileOutlined] },
      ]);
    }, [
      credentials.portfolio_link,
      credentials.linkedin_link,
      credentials.portfolio_link
    ]);

    return (
      <Div>
        {credentials.full_name !== null ? (
          <Initialdiv>
            <H4bold> {credentials.full_name} </H4bold>
            <h4> @{credentials.username} </h4>
          </Initialdiv>
        ) : null}

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
        { linksArr? (
            linksArr.map(item=>{
                return (
                  <A key={item.name[0]} href={`${item.name[0]}`} target="blank">
                    <Userfield
                      credentials={item.name[0]}
                      UserAddOutlined={item.name[1]}
                    />
                  </A>
                );
            })
        ):null  
        }
      </Div>
    );
}

export default UserCard;