import React from 'react';
import styled from 'styled-components';
import Avatar from "../Layout/SideNav/Avatar.jsx";

const Bolder = styled.span`
  font-weight: bold;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AvatarContainer = () => {
  return (
    <Div>
      <Avatar />
      <div>
        <p>
          Location:<Bolder>Nigeria</Bolder>
        </p>
      </div>
    </Div>
  );
};
