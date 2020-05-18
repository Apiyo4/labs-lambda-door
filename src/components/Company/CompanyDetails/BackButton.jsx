import React from 'react';
import {  Button, Icon } from 'antd';
import { withRouter } from 'react-router-dom';

const BackButton =  ({history})=>{
    return(
        <Button
            style={{
                marginBottom: '30px',
                border: '1px solid #BB1333',
                color: '#BB1333',
            }}
            onClick={() => history.goBack()}
        >
            <Icon type="left" />
        Back
        </Button>
    )
}
export default withRouter(BackButton);