import {FaStar} from 'react-icons/fa'
import './style.css'
import { useState } from 'react';

export default function StarRating({noOfStar=5}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);   
    }

    function handleMouseMove(getCurrentIndex) {
        setHover(getCurrentIndex); 
    }

    function handleMouseLeave(getCurrentIndex) {
        setHover(rating);
    }

    return (
        <div className='star-rating'>
            {
                [...Array(noOfStar)].map((_, index) => {
                    index += 1;
                    return <FaStar 
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseMove(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        size={40}
                    />
                })
            }
        </div>
    );
}