import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Reviews from './Reviews';
import Icon from "../assets/logos/Icon.png";


function ClimbDetails() {
    const {id} = useParams('');

    const [climb, setClimb] = useState({});
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/climbs/${id}`)
        .then((response) => response.json())
        .then((climb) => setClimb(climb))
    }, [id])

    useEffect(()=>{
        fetch(`http://localhost:3001/reviews`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    }, [])

    const filter = reviews.filter((review) => parseInt(review.climbId) === parseInt(id) ? review: null)
    const createReviews = filter.map(review => {
        return(
            <div className='reviews-section' >
                <h3>{review.UserName}</h3>
                <p className='date'>{review.date}</p>
                <p className='content'>{review.content}</p>
            </div>
            )
            })

    function ClimbRatingIcon(){
        const createRating = []
        const newNumber= parseInt(climb.rating)
        for(let i = 0; i < newNumber; i++){
            createRating.push(<img src={Icon} alt={climb.rating} className="icons" />)
            }
        return createRating
        }

    return (
        <div className='climb-details-page'>
            <Card sx={{ maxWidth: 1000, display: "flex", margin: 'auto' }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="368"
                    image={climb.image}
                    alt="yosemite"
                    />
                <CardContent sx={{ margin: 10 }} >
                    <div className='climb-details-header'>
                        <div className='name-rating'>
                            <Typography sx={{ fontSize: 48, fontWeight: 400 }} gutterBottom variant="h5" component="div">
                                {climb.name}
                            </Typography>
                            <Typography sx={{ paddingLeft: 2 }} gutterBottom variant="h5" component="div">
                                {ClimbRatingIcon()}
                            </Typography>
                        </div>
                        <Typography sx={{ fontSize: 16, color: "white", paddingTop: "-5px" }} gutterBottom variant="h5" component="div">
                            {climb.location}
                        </Typography>
                        <Typography sx={{ fontSize: 36, color: "#FF8A00", fontWeight: '400' }}gutterBottom variant="h5" component="div">
                            {climb.difficulty}
                        </Typography>
                    </div>
                    <div className='description' >
                        <Typography sx={{ fontSize: 24 }} variant="body2" color="text.secondary">
                            {climb.description}
                        </Typography>
                    </div>
                        <hr />
                    <div className='climb-details'>
                        <div className='climb-details-column'>
                            <h4>Length</h4>
                            <Typography sx={{ fontSize: 20 }} variant="body2" color="text.secondary">
                                {climb.pitches}
                            </Typography>
                        </div>
                        <div className='climb-details-column'>
                            <h4>Type</h4>
                            <Typography sx={{ fontSize: 20 }} variant="body2" color="text.secondary">
                                {climb.type}
                            </Typography>
                        </div>
                        <div className='climb-details-column'>
                            <h4>Elevation</h4>
                            <Typography sx={{ fontSize: 20 }} variant="body2" color="text.secondary">
                                {climb.elevation}
                            </Typography>
                        </div>
                    </div>
                        <hr />
                    <div className='reviews-section'>
                        <div>
                            <h2>Reviews</h2>
                            <Typography gutterBottom variant="h5" component="div">
                                {climb.rating}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {ClimbRatingIcon()}
                            </Typography>
                            <Reviews id={id} setReviews={setReviews} reviews={reviews}/>
                            {createReviews}
                        </div>
                    </div>
                </CardContent>
        </CardActionArea>
        </Card>
    </div>
    )
}

export default ClimbDetails;


