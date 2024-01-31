import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AirlineForm(){
    const [airline, setAirline] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(event){
        event.preventDefault();
        dispatch({
            type: 'NEW_AIRLINE',
            payload: {
                name: airline
            }
         })
        setAirline('')
    };

    function addAirline(event){
        setAirline(event.target.value);
    };

    return(
        <div>
            <h1>Redux Airport</h1>
            <form onSubmit={handleSubmit}>
                <input className='addAirline' type='text' placeholder='Airline here' onChange={addAirline} value={airline} />
                <button type='submit'>Add Airline</button>
            </form>
        </div>
    );
};

export default AirlineForm;