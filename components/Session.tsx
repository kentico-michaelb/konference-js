import { Presentation } from "../models/Presentation";
import { Room } from "../models/Room";
import { Speaker } from "../models/Speaker";
import { DateTime } from 'luxon'

export default function Agenda({
    name,
    dateTimeFromDateTime,
    dateTimeToDateTime,
    sessionId,
    location }:{
        name: string,
        dateTimeFromDateTime: string | null,
        dateTimeToDateTime: string | null,
        location: Room,
        sessionId: string
    }
)

{

    return (
        <div key={sessionId}>
            <span>
            {dateTimeFromDateTime && DateTime.fromISO(dateTimeFromDateTime).toLocaleString(DateTime.TIME_SIMPLE)}
            -
            {dateTimeToDateTime && DateTime.fromISO(dateTimeToDateTime).toLocaleString(DateTime.TIME_SIMPLE)}
            </span>
            &nbsp; | &nbsp;
            {name}
            
            {location && 
                <span>
                    &nbsp; | &nbsp;
                    {location.elements.name.value}
                </span>}
        </div>
    )
}