import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  margin-bottom: 1%;

  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Links = () => {
  return (
    <div>
      <form>
        <p>Github</p>
        <Input type="url" />

        <p>Linkedin</p>
        <Input type="text" />

        <p>Portfolio</p>
        <Input type="text" />
      </form>
    </div>
  );
};
