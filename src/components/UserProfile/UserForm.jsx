import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Input = styled.input`
  margin-bottom: 1%;
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
const H4 = styled.h4`
  font-weight: bold;
`;

const Button = styled.button`
border: 2px solid #7C9E9A;
padding:12px 20px;
    `
const UserForm = ({ credentials }) => {

  const values = {
    full_name: credentials.full_name
  }

  return (
    <div>
      <form>
        <H4>Full Name:</H4>
        <Input
        type="text"
        placeholder={credentials.full_name} />
        <br />
        <H4>Username:</H4>
        <Input
        type="text"
        placeholder={credentials.username} />
        <br />
        <H4>Email:</H4>
        <Input 
        type="text"
        placeholder={credentials.email_address} />
        <br />
        <H4>Age:</H4>
        <Input 
        type="text"
        placeholder={credentials.age} />
        <br />
        <H4>Location:</H4>
        <Input 
        type="text"
        placeholder={credentials.location} />
        <br />
        <H4>Github Link:</H4>
        <Input 
        type="text"
        placeholder={credentials.github_link}
        />
        <br/>
        <H4>Linkedin Link:</H4>
        <Input
        type="text"
        placeholder={credentials.linkedin_link}
        />
        <br/>
        <H4>Portfolio Link:</H4>
        <Input
        type="text"
        placeholder={credentials.portfolio_link}
        />
        <br/>
        <Button>Update Profile</Button>
      </form>
    </div>
  );
};


const mapStateToProps = state => ({
  credentials: state.authState.credentials,
  isLoading: state.authState.isLoading
});

export default connect(mapStateToProps)(UserForm);