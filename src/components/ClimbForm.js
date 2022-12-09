import React, {useState} from 'react';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

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

    const type = [
        {
          value: 'Sport',
          label: 'Sport'
        },
        {
          value: 'Trad',
          label: 'Trad'
        },
        {
          value: 'Ice',
          label: 'Ice'
        }
      ];

    const handleChange = (e) => {
      console.log(e.target.value);
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        console.log("Fired")
        e.preventDefault()
        fetch('http://localhost:3001/climbs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formValues)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        setFormValues({
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
    }
    
    return (
        <Box
            component="form"
            sx={{ margin: "auto", marginTop: 10, maxWidth: '70%'}}
            autoComplete="off"
            onSubmit={handleSubmit}
        >
          <div className='form-line-one'>
            <TextField
              helperText="Route Name"
              name="name"
              value={formValues.name}
              id="standard-size-normal"
              onChange={handleChange}
              variant="standard"
              sx={{ width: 2000, paddingRight: 5}}
            />
            <TextField
              helperText="Location"
              name="location"
              id="standard-size-normal"
              value={formValues.location}
              onChange={handleChange}
              noValidate
              variant="standard"
              sx={{ width: 2000 }}
            />
          </div>
          <div>
            <TextField
              id="standard-multiline-flexible"
              helperText="Description"
              name="description"
              multiline
              maxRows={2}
              value={formValues.description}
              onChange={handleChange}
              variant="standard"
              sx={{ width: "100%" }}
            />
          </div>
          <div>
          <div>
            <TextField
              helperText="Image URL"
              name="image"
              id="standard-size-normal"
              value={formValues.image}
              onChange={handleChange}
              noValidate
              variant="standard"
              sx={{ width: "50%" }}
            />
          </div>
            <TextField
              id="standard-number"
              helperText="Elevation"
              name="elevation"
              value={formValues.elevation}
              onChange={handleChange}
              variant="standard"
              sx={{ paddingRight: 5 }}
            />
            <TextField
              helperText="Grade"
              name="difficulty"
              id="standard-size-normal"
              value={formValues.difficulty}
              onChange={handleChange}
              noValidate
              variant="standard"
              sx={{ paddingRight: 5 }}
            />
            <TextField
              helperText="Pitches"
              name="pitches"
              id="standard-size-normal"
              value={formValues.pitches}
              onChange={handleChange}
              noValidate
              variant="standard"
              sx={{ paddingRight: 5 }}
            />
            <TextField
              helperText="Rate"
              name="rating"
              id="standard-size-normal"
              value={formValues.rating}
              onChange={handleChange}
              noValidate
              variant="standard"
            />
          </div>
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              name="type"
              sx={{ color: "#1e1e1e", width: "10%", marginBottom: 5 }}
              value={formValues.type}
              onChange={handleChange}
              helperText=""
              variant="standard"
            >
              {type.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Button sx={{ backgroundColor: "#FF8A00" }} variant="contained" type="submit" >Sumbit</Button>
        </Box>
    );
};

export default ClimbForm;