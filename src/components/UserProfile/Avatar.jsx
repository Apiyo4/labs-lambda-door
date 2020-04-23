import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  border-radius: 50%;
  width: 18%;
`;
const Bolder = styled.span`
  font-weight: bold;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Avatar = () => {
  return (
    <Div>
      <div>
        <Img
          src="https://ca.slack-edge.com/T4JUEB3ME-ULV8P2G12-d74a73ec4250-512"
          alt=""
        />
        <span>Change Photo</span>
      </div>
      <div>
        <p>
          Location:<Bolder>Nigeria</Bolder>
        </p>
      </div>
    </Div>
  );
};
