import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';

function Reviews({ id, setReviews, reviews }){

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`; 
    
    const [open, setOpen] = React.useState(false);
    const [newReview, setNewReview] = useState({
        "content": '',
        'climbId': id,
        'UserName': '',
        'date': date,
        'rating': '0'
    })

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };

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
            setReviews([...reviews, data])
            handleClose()
            setNewReview({
                "content": '',
                'climbId': id,
                'UserName': '',
                'date': date,
                'rating': '0'
            })
        })
    }

    const type = [
        {
          value: '0',
          label: '0'
        },
        {
          value: '1',
          label: '1'
        },
        {
          value: '2',
          label: '2'
        },
        {
          value: '3',
          label: '3'
        },
        {
          value: '4',
          label: '4'
        },
        {
          value: '5',
          label: '5'
        }
      ];



    return (
        <div>
            <Button sx={{"&:hover":{backgroundColor: "#E6E6E6"}, backgroundColor: "#FF8A00" }} variant="contained" onClick={handleOpen}>Write Review</Button>
            <Modal
                component="form"
                onSubmit={handleSubmit}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <TextField
                    id="standard-multiline-flexible"
                    helperText="Name"
                    name="UserName"
                    value={newReview.UserName}
                    onChange={handleChange}
                    variant="standard"
                />
                <TextField
                    id="standard-select-currency"
                    select
                    label=""
                    name="rating"
                    sx={{ color: "#1e1e1e", width: "10%", paddingBottom: 2, paddingLeft: 2 }}
                    value={newReview.rating}
                    onChange={handleChange}
                    helperText="rating"
                    variant="standard"
                >
                    {type.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="standard-multiline-flexible"
                    helperText="Description"
                    name="content"
                    multiline
                    maxRows={2}
                    value={newReview.content}
                    onChange={handleChange}
                    variant="standard"
                    sx={{ width: "100%", paddingBottom: 2 }}
                />
                <Button sx={{ "&:hover":{backgroundColor: "#E6E6E6"}, backgroundColor: "#FF8A00" }} variant="contained" type="submit">Sumbit</Button>
            </Box>
            </Modal>
        </div>
    )
}

export default Reviews;