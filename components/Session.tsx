import { Room } from "../models/Room";
import { DateTime } from 'luxon'

export default function Session({
    name,
    dateTimeFromDateTime,
    dateTimeToDateTime,
    sessionId,
    location }:{
        name: string,
        dateTimeFromDateTime?: string | null,
        dateTimeToDateTime?: string | null,
        location?: Room,
        sessionId: string
    }
)

{

    return (
        <div key={sessionId}>
            {dateTimeFromDateTime && 
                <span>{DateTime.fromISO(dateTimeFromDateTime).toLocaleString(DateTime.TIME_SIMPLE)} -</span>}
            
            {dateTimeToDateTime && 
            <span>{DateTime.fromISO(dateTimeToDateTime).toLocaleString(DateTime.TIME_SIMPLE)} &nbsp; | &nbsp;</span>}
            
            {name}
            
            {location && 
                <span>
                    &nbsp; | &nbsp;
                    {location.elements.name.value}
                </span>}
        </div>
    )
}