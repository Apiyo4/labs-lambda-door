import React from 'react';
import styled from 'styled-components';

const Div1 = styled.div`
  flex-direction:column;
  width: 50%;
  margin-bottom: 1%;
`;


 const Userfield = ({credentials, UserAddOutlined}) => {
 return credentials !== null ? (
    <Div1>
      <h4><UserAddOutlined /> {credentials} </h4>
    </Div1>
  ) : null
}

export default Userfield;