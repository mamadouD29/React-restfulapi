import React from 'react';
import { useState } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'


function Rating({ratings}) {
    const [rating, setRating] = useState(ratings)
    return (
        <div >
            <h1>
                Rating: {rating}
            </h1>
           <span style={styles.starStyle}>{rating > 1? (<IoIosStar onClick={()=>setRating(1)}/>) : <IoIosStarOutline onClick={()=>setRating(1)}/>}
            {rating >=2 ? (<IoIosStar onClick={()=>setRating(2)} /> ): (<IoIosStarOutline onClick={()=>setRating(2)}/> )}
            {rating >=3 ? (<IoIosStar onClick={()=>setRating(3)} /> ): (<IoIosStarOutline onClick={()=>setRating(3)} /> )}
            {rating >=4 ? (<IoIosStar onClick={()=>setRating(4)}/> ): (<IoIosStarOutline onClick={()=>setRating(4)} /> )}
            {rating >=5 ? (<IoIosStar onClick={()=>setRating(5)} /> ): (<IoIosStarOutline onClick={()=>setRating(5)} /> )}
            </span>
        </div>
    )
}


export default Rating;
const styles ={
    starStyle: {
        color: "orange"
    }
}