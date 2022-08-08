import React from 'react';
import { useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
    const  {feedback} = useContext(FeedbackContext)
    let average = feedback.reduce((acc, cur) => {
       return acc + cur.rating
    }, 0) / feedback.length


    return (
        <div className='feedback-stats'>
              <h4> {feedback.length} Reviews</h4>
              <h4>Average Rating: {isNaN(average) ? 0 : average.toFixed(1)}</h4>
        </div>
    );
}

export default FeedbackStats;












// function sum() {
//     const array1 = [1, 2, 3, 4];
//
//     const sumWithInitial = array1.reduce(
//         (acc, cur) => acc + cur,
//         0
//     );
// }
//
// function sumOld() {
//     const array1 = [1, 2, 3, 4];
//
//     // acc
//     let sum = 0; // 0 - initialValue
//
//     for (let i = 0; i < array1.length; i++) {
//         // array1[i] - current
//         sum = sum + array1[i];
//     }
// }