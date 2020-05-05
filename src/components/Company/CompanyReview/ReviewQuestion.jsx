import React from 'react';
import ChatButton from '../../Layout/Chat/ChatButton';
import UserDetails from '../InterviewReviews/UserDetails';


const ReviewQuestion= ({review})=>{
    return(
        <div className="bottom">
            <div className="contact">
                {review.is_accepting_questions ? (
                    <>
                        <p>
                            Have questions? &nbsp;&nbsp;
                  <ChatButton
                                toUserID={review.user_id}
                                toUserName={review.full_name}
                            />
                        </p>
                    </>
                ) : (
                        ''
                    )}
            </div>
            <UserDetails review={review} />
        </div>
    )
}
export default ReviewQuestion ;