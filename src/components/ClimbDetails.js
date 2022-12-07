import react, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function ClimbDetails() {
    let {id} = useParams()

    const [climb, setClimb] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/climbs/${id}`)
        .then(res => res.json())
        .then(data => setClimb(data))
    },[])
    

    return (
        <div>
            Hello world. this is id: {id}
            
        </div>
    )
}

export default ClimbDetails;