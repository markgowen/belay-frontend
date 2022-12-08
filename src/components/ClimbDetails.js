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
    const [isClicked, setIsClicked] = useState(false)

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

    const filter = reviews.filter((review) => review.climbId == id ? review: null)
    const createReviews = filter.map(review => {
                                        return(
                                            <div>
                                                <h3>{review.UserName}</h3>
                                                <h4>{review.date}</h4>
                                                <p>{review.content}</p>
                                            </div>
                                            )
                                            })

    const handleClick = () =>{
        setIsClicked(!isClicked);
    }

    function ClimbRatingIcon(){
        const createRating = []
        const newNumber= parseInt(climb.rating)
        for(let i = 0; i < newNumber; i++){
            createRating.push(<img src={Icon} alt={climb.rating} />)
            }
        return createRating
        }

    return (
        <Card sx={{ maxWidth: 1000, display: "flex", margin: 'auto', marginTop: 10 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="368"
                image={climb.image}
                alt="yosemite"
                />
            <CardContent>
                <div className='climb-details-header'>
                    <Typography gutterBottom variant="h5" component="div">
                        {climb.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {ClimbRatingIcon()}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {climb.location}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {climb.difficulty}
                    </Typography>
                </div>
                <Typography variant="body2" color="text.secondary">
                    {climb.description}
                </Typography>
                <div className='climb-details-middle'>
                    <h4>Length</h4>
                    <h4>Type</h4>
                    <h4>Elevation</h4>
                </div>
                <div className="climb-details-middle">
                    <Typography variant="body2" color="text.secondary">
                        {climb.pitches}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {climb.type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {climb.elevation}
                    </Typography>
                </div>
                <div className='reviews-section'>
                    <button onClick={handleClick}> Write a Review</button>
                    {isClicked == true ? <Reviews id={id} route={climb.name} setReviews={setReviews} reviews={reviews}/>: null}
                    <div>
                        <h2>Reviews</h2>
                        {createReviews}
                    </div>
                </div>
            </CardContent>
      </CardActionArea>
    </Card>
    )
}

export default ClimbDetails;


