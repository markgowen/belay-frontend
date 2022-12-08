import React, {useState} from 'react';

function ClimbForm() {
    const [formValues, setFormValues] = useState({
            name: "",
            rating: 0,
            location: "",
            difficulty: "",
            elevation: "",
            type: "",
            pitches: "",
            image: "",
            description: ""
    })

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/climbs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formValues)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input name="name" value={formValues.name} placeholder="name" onChange={handleChange}></input>
                <input name="rating" value={formValues.rating} placeholder="rating" onChange={handleChange}></input>
                <input name="location" value={formValues.location} placeholder="location" onChange={handleChange}></input>
                <input name="difficulty" value={formValues.difficulty} placeholder="difficulty" onChange={handleChange}></input>
                <input name="elevation" value={formValues.elevation} placeholder="elevation" onChange={handleChange}></input>
                <input name="type" value={formValues.type} placeholder="type" onChange={handleChange}></input>
                <input name="pitches" value={formValues.pitches} placeholder="pitches" onChange={handleChange}></input>
                <input name="image" value={formValues.image} placeholder="image" onChange={handleChange}></input>
                <input name="description" value={formValues.description} placeholder="description" onChange={handleChange}></input>
                <button>Submit This Shit</button>
            </form>
        </div>
    );
};

export default ClimbForm;