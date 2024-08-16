import React, {useState} from 'react'
import { CesiumContext } from "resium";

const LocationSearch = () => {
    const [lat, setLat] = useState(0.0)
    const [lon, setLon] = useState(0.0)
    const [location, setLocation] = useState('Location')    
    const cesium = React.useContext(CesiumContext);

    const handleChange = location => {
        setLocation(location)
    };

    const handleSearch = () => {
        console.log('searching...')
    }

    return (
        <div>
            <button>Search</button>
        </div>
    );
};

export default LocationSearch;