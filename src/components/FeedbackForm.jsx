import React from 'react';
import {useState, useContext, useEffect} from "react";
import Card from "./shared/card";
import Button from "./shared/button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackEdit.edit == true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.text)
        }
    },[feedbackEdit])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedbackForm = {
                  text,
                  rating
            }

            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedbackForm)
            } else {
                addFeedback(newFeedbackForm)
            }

            setText('')
        }
    }

    const handleTextChange = (e) => {
        let changes = { message: null, isBtnDisabled: false };
        const inputValue = e.target.value;
        const rules = [
            {
                condition: inputValue === '',
                description: null
            },
            {
                condition: inputValue !== '' && inputValue.trim().length <= 10,
                description: 'Text must be at least 10 characters'
            },
        ];

        const invalidatedRules = rules.filter(rule => rule.condition === true);
        if (invalidatedRules.length > 0)
            changes = {
                message: invalidatedRules[0].description,
                isBtnDisabled: true
            }

        setBtnDisabled(changes.isBtnDisabled);
        setMessage(changes.message);
        setText(inputValue);
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our lessons</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write you comment here" value={text}/>
                    <Button type="submit" version='secondary' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>

    );
}

export default FeedbackForm;