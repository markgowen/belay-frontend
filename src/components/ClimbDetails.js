import react from 'react';
import { useParams } from 'react-router-dom';

function ClimbDetails() {
    let {id} = useParams()
    return (
        <div>
            Hello world
        </div>
    )
}

export default ClimbDetails;