import React from "react";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function ClimbCard({ 
    name, 
    rating, 
    location, 
    difficulty, 
    elevation, 
    type, 
    pitches,
    image,
    description
    }) {
    return (
        <div className="bg">
            <Card 
                    className="card" 
                    sx={{ 
                        maxWidth: 1000,
                        maxHeight: 265,
                        marginTop: 0,
                        backgroundColor: "black", 
                        color: "white" }}>
            <CardActionArea>
            <CardMedia
                component="img"
                sx={{ 
                    float: "left", 
                    maxWidth: 388, 
                    height: 265, 
                    marginRight: 5 
                    }}
                image={image}
                alt={name}
            />
            <CardContent className="card-content" sx={{ margin: 5 }} >
                <div className="cardHead">
                    <Typography 
                        sx={{ fontWeight: "bold" }} 
                        gutterBottom variant="h5" 
                        component="div" >
                        {name}
                    </Typography>
                    <Typography 
                        sx={{
                            marginTop: 1.3, 
                            paddingLeft: 2, 
                            color: "#FF8A00" 
                            }}  
                    gutterBottom variant="p" 
                    component="div">
                        {rating}
                    </Typography>
                </div>
                <div className="cardLocation">
                    <Typography sx={{  fontStyle: 'italic' }} gutterBottom variant="p" component="div">
                    {location}
                    </Typography>
                    <Typography sx={{ color: "#FF8A00", paddingBottom: 3 }} gutterBottom variant="p" component="div">
                    {difficulty}
                    </Typography>
                </div>
                <Typography variant="body2" >
                    {description}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
      </div>
    )
};

export default ClimbCard;