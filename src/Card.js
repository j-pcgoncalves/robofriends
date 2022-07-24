import React from 'react';

const Card = () => {
    return (
        <div className='bg-light-green dib hr3 pa3 ma2 grow bw2 shadow-3'>
            <img src='https://robohash.org/test?200x200' alt='robots' />
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;