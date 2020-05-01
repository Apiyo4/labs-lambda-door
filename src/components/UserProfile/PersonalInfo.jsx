import React from 'react';
import styled from 'styled-components';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { EditOutlined, UserAddOutlined, UserOutlined, MailOutlined, CompassOutlined, FileExcelFilled } from "@ant-design/icons";
import { GithubOutlined, LinkedinOutlined, ProfileOutlined} from "@ant-design/icons";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Div1 = styled.div`
  flex-direction:column;
  width: 50%;
  margin-bottom: 1%;
`;
const Initialdiv =styled.div`
flex-direction: column;
width: 100%;
margin-bottom:2%;
`;
const H4bold = styled.h4`
  font-weight: bold;
  font-size:22px;
  
`;
const H4 = styled.h4`
  font-size:18px;
`;
const H4margin = styled.h4`
  text-align: right;
  cursor:pointer
`;
const Emaildiv=styled.div`
height:100%; 
display:flex; 
flex-direction:column; 
justify-content:flex-end;
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
            <span onClick={openForm}><EditOutlined />Edit</span>
          </H4margin>
        )}
        {!isClose && (
          <div>
            <H4margin>
              <span onClick={openForm}>Close</span>
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
              <h4> <UserOutlined /> {credentials.username} </h4>
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
            <h4><MailOutlined /> {credentials.email_address} </h4>
            </Emaildiv>
            </Div1>
          ) : null}

          {credentials.age !== null ? (
            <Div1>
              <h4><UserAddOutlined /> {credentials.age} </h4>
            </Div1>
          ) : null}

          {credentials.location !== null ? (
            <Div1>
              <h4><CompassOutlined /> {credentials.location} </h4>
            </Div1>
          ) : null}

          {credentials.github_link !== null ? (
            <Div1>
              <h4><GithubOutlined /> {credentials.github_link} </h4>
            </Div1>
          ) : null}

          {credentials.linkedin_link !== null ? (
            <Div1>
              <h4><LinkedinOutlined /> {credentials.github_link} </h4>
            </Div1>
          ) : null}

          {credentials.portfolio_link !== null ? (
            <Div1>
              <h4><ProfileOutlined /> {credentials.portfolio_link} </h4>
            </Div1>
          ) : null}
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
