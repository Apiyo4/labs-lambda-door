import React from 'react';
import {  Empty, Button } from 'antd';
import {  Link } from 'react-router-dom';
export const EmptyComponent =  ()=>{
    return (
        <Empty
            image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
            imageStyle={{
                height: 60,
            }}
            description={
                <span className="text">
                    No review found yet, perhaps none has been given.
          </span>
            }
        >
            <Link to={{ pathname: '/add-review', state: 2 }}>
                <Button>Post a Review</Button>
            </Link>
        </Empty>
    )
}