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
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
            autoComplete="off"
            onSubmit={handleSubmit}
        >
        <TextField
          label="Route Name"
          id="standard-size-normal"
          value={formValues.name}
          onChange={handleChange}
          variant="standard"
        />
        <TextField
          label="Location"
          id="standard-size-normal"
          value={formValues.location}
          onChange={handleChange}
          noValidate
          defaultValue=""
          variant="standard"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          value={formValues.description}
          onChange={handleChange}
          variant="standard"
        />
         <TextField
          id="standard-number"
          label="Elevation"
          value={formValues.elevation}
          onChange={handleChange}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          label="Grade"
          id="standard-size-normal"
          value={formValues.difficulty}
          onChange={handleChange}
          noValidate
          defaultValue="5.10b"
          variant="standard"
        />
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          sx={{ color: "#1e1e1e" }}
          value={type}
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
        <Button sx={{ backgroundColor: "#FF8A00" }} variant="contained">Sumbit</Button>
        </Box>
    );
};

export default ClimbForm;