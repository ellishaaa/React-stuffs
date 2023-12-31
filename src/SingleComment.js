import React from 'react';

const SingleComment = (props) => {
    console.log(props);
    return(
        <div className='comment'>
        <a href="/" className='avatar'>
            <img src={props.photo} alt="profile" />
        </a>
        <div className='content'>
            <a href="/" className='author'>
                { props.author }
            </a>
            <div className='metadata'>
                <span className='date'>
                { props.date }
                </span>
            </div>
            <div className='text'>
            { props.comment }
            </div>
        </div>
    </div>

    )
}

export default SingleComment;