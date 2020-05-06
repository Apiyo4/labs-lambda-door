/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { Tag, Dropdown, Icon, Menu } from 'antd';
import { connect } from 'react-redux';
import { removeInterest, addInterest, getInterests, getUsersInterests } from '../../../state/actions/interests';
import styled from 'styled-components';

const Div =  styled.div`

 margin: 2%;

`
const P = styled.p`
  padding-top: 2%;
`

const Interests = ({
  authState: {
    credentials: { id },
  },
  allInterests,
  userInterests,
  removeInterest,
  addInterest,
  getInterests,
  getUsersInterests
}) => {
  const [inputVisible, setInputVisible] = useState(false);

  useEffect(() => {
    async function allInterests() {
      await getInterests();
      await getUsersInterests(id);
    }

    allInterests();
  }, [])

  const showInput = () => {
    setInputVisible(true);
  };

  const handleRemoveInterest = async (e, interestId) => {
    e.preventDefault();
    await removeInterest(interestId);
  };

  const handleAddInterest = (userId, interestId) => {
    addInterest(userId, interestId);
  };

  const menu = (
    <Menu>
      {allInterests.interests
        .filter(elem => !userInterests.interests.map(int => int.interest).includes(elem.interest))
        .map(obj => (
          <Menu.Item
            onClick={() => handleAddInterest(id, obj.id)}
            key={obj.id}
          >
            {obj.interest}
          </Menu.Item>
        ))}
    </Menu>
  );

  return (
    <div>
      {!userInterests.interests.length ? (
        <p>No preferred roles selected</p>
      ) : (
          <>
            {!inputVisible &&
              userInterests.interests.map((elem) => <Tag key={elem.id}>{elem.interest}</Tag>)
            }
            {inputVisible &&
              userInterests.interests.map(elem => {
                return (
                  <Tag
                    key={elem.id}
                    closable
                    onClose={e => handleRemoveInterest(e, elem.id)}
                  >
                    {elem.interest}
                  </Tag>
                );
              })}
          </>
        )}

      <br />
      {userInterests.interests.length?(
        <Div></Div>  
      ): <div></div>
    }
       
      {inputVisible && (
        <>
          <Dropdown overlay={menu} trigger={['click']}>
            <button type="button">
              Preferred Role/s <Icon type="down" />
            </button>
          </Dropdown>
          <Icon
            style={{ marginLeft: '20px', color: 'red', cursor: 'pointer' }}
            onClick={() => setInputVisible(false)}
            type="close-circle"
          />
        </>
      )}
      {!inputVisible && (
        <div> 
        <Tag
          onClick={showInput}
          style={{ background: '#fff', borderStyle: 'dashed' }}
        >
          <Icon type="plus" /> Edit Preferred Role/s
        </Tag>
          <P>It has been estimated that choosing your preferred roles can guarantee you a job of your interest. Why not try it out"</P>
        </div>
      )}
    </div>
  );
};

export default connect(state => state, {
  removeInterest,
  addInterest,
  getInterests,
  getUsersInterests,
})(Interests);
