import React, {useState} from 'react';

function Reviews({route, id, setReviews, reviews}){

    const [newReview, setNewReview] = useState({
        "content": '',
        'climbId': parseInt(id),
        'UserName': '',
        'date': ''
    })

    const handleChange = (e) => {
        setNewReview({...newReview, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/reviews', {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReviews([...reviews, data])}
            
        )
    }

    return (
        <div>
            <h3>{route}</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="UserName"
                    placeholder='UserName' 
                    value={newReview.UserName} 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="date" 
                    placeholder='date' 
                    value={newReview.date} 
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="content" 
                    placeholder='description' 
                    value={newReview.content} 
                    onChange={handleChange} 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Reviews