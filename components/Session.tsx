import { Room } from "../models/Room";
import { DateTime } from 'luxon'
import Link from "next/link";

export default function Session({
    name,
    dateTimeFromDateTime,
    dateTimeToDateTime,
    sessionId,
    sessionSlug,
    collection,
    location }:{
        name: string,
        dateTimeFromDateTime?: string | null,
        dateTimeToDateTime?: string | null,
        location?: Room,
        sessionId: string
        sessionSlug: string
        collection: string
    }
)

{
    return (
        <div key={sessionId}>
                {dateTimeFromDateTime && 
                    <span>{DateTime.fromISO(dateTimeFromDateTime).toLocaleString(DateTime.TIME_SIMPLE)} -</span>}
                
                {dateTimeToDateTime && 
                <span>{DateTime.fromISO(dateTimeToDateTime).toLocaleString(DateTime.TIME_SIMPLE)} &nbsp; | &nbsp;</span>}
                <Link 
                   href={{
                    pathname: '/[collection]/agenda/[id]/[slug]',
                    query: { collection: collection, id:sessionId, slug: sessionSlug },
                  }}>
                    <a>{name}</a>
                </Link>  
                {location && 
                    <span>
                        &nbsp; | &nbsp;
                        {location.elements.name.value}
                    </span>}

        </div>
    )
}