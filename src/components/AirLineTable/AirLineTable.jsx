import {useSelector} from 'react-redux';
import AirlineItem from '../AirlineItem/AirlineItem';

function AirlineTable(){
    const airlines = useSelector((state) => state.airlines);
    
    return (
        airlines.map((plane, itemIndex) =>{
            return <AirlineItem key={itemIndex} airline={plane} />
                })
    );
};

export default AirlineTable;