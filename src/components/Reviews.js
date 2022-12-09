import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

function Reviews({ id, setReviews, reviews }){
    console.log(id)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const [open, setOpen] = React.useState(false);
    const [newReview, setNewReview] = useState({
        "content": '',
        'climbId': id,
        'UserName': '',
        'date': ''
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
    console.log(newReview);
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
            <Button sx={{ backgroundColor: "#FF8A00" }} variant="contained" onClick={handleOpen}>Write Review</Button>
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
                    id="standard-multiline-flexible"
                    helperText="Description"
                    name="content"
                    multiline
                    maxRows={2}
                    value={newReview.content}
                    onChange={handleChange}
                    variant="standard"
                    sx={{ width: "100%" }}
                />
                <Button sx={{ backgroundColor: "#FF8A00" }} variant="contained" type="submit">Sumbit</Button>
            </Box>
            </Modal>
        </div>
    )
}

export default Reviews;