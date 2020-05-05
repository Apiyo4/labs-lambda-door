import React from 'react';
import {  Link } from 'react-router-dom';

const UserDetails = ({review}) => {
    return (
        <div className="username">

            <Link
                to={{
                    pathname: `/users/${review.user_id}`,
                    state: { userId: `${review.user_id}` },
                }}
            >
                {review.full_name}
            </Link>
        </div>
    )
}
export default UserDetails;