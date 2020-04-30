import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { EditAllUserProfile } from '../../state/actions/user';

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
  border: 2px solid #7c9e9a;
  padding: 12px 20px;
`;
const UserForm = ({ credentials, EditAllUserProfile, openForm }) => {
  const [formData, setFormData] = useState({
    profile_picture: credentials.profile_picture,
    full_name: credentials.full_name,
    username: credentials.username,
    email_address: credentials.email_address,
    age: credentials.age,
    location: credentials.location,
    latitude: credentials.latitude,
    longitude: credentials.longitude,
    created_at: credentials.created_at,
    updated_at: credentials.updated_at,
    github_link: credentials.github_link,
    linkedin_link: credentials.linkedin_link,
    portfolio_link: credentials.portfolio_link,
    slack_id: credentials.slack_id,
  });

  const onSubmit = event => {
    event.preventDefault();
    console.log(formData);
    EditAllUserProfile(formData, credentials.id, openForm);
  };

  const onChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <H4>Full Name:</H4>
        <Input
          type="text"
          name="full_name"
          placeholder={credentials.full_name}
          value={formData.full_name}
          onChange={event => onChange(event)}
        />
        <br />
        <H4>Username:</H4>
        <Input
          type="text"
          name="username"
          placeholder={credentials.username}
          value={formData.username}
          onChange={event => onChange(event)}
        />
        <br />
        <H4>Email:</H4>
        <Input
          type="text"
          name="email_address"
          placeholder={credentials.email_address}
          value={formData.email_address}
          onChange={event => onChange(event)}
        />
        <br />
        <H4>Age:</H4>
        <Input
          type="text"
          name="age"
          placeholder={credentials.age}
          value={formData.age}
          onChange={event => onChange(event)}
        />
        <br />
        <H4>Location:</H4>
        <Input
          type="text"
          name="location"
          value={formData.location}
          placeholder={credentials.location}
          onChange={event => onChange(event)}
        />

        <br />
        <H4>Github Link:</H4>
        <Input
          type="text"
          name="github_link"
          value={formData.github_link}
          placeholder={credentials.github_link}
          onChange={event => onChange(event)}
        />
        <br />
        <H4>Linkedin Link:</H4>
        <Input
          type="text"
          name="linkedin_link"
          value={formData.linkedin_link}
          placeholder={credentials.linkedin_link}
          onChange={event => onChange(event)}
        />
        <br />
        <H4>Portfolio Link:</H4>
        <Input
          type="text"
          name="portfolio_link"
          value={formData.portfolio_link}
          placeholder={credentials.portfolio_link}
          onChange={event => onChange(event)}
        />
        <br />
        <Button>Update Profile</Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  credentials: state.authState.credentials,
  isLoading: state.authState.isLoading,
});

const mapActionsToProps = {
  EditAllUserProfile,
};

export default connect(mapStateToProps, mapActionsToProps)(UserForm);
