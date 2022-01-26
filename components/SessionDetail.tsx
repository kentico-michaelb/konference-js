import { Presentation } from "../models/Presentation";
import { Room } from "../models/Room";
import { Speaker } from "../models/Speaker";
import { DateTime } from 'luxon'
import RichText from "./RichText";
import { IContentItemsContainer } from "@kentico/kontent-delivery";

export default function SessionDetail({
    name,
    presentations,
    speakers,
    dateTimeFromDateTime,
    dateTimeToDateTime,
    sessionId,
    location,
    linkedItems }:{
        name: string,
        presentations: Array<Presentation>,
        speakers: Array<Speaker>,
        dateTimeFromDateTime: string | null,
        dateTimeToDateTime: string | null,
        location: Room,
        sessionId: string
        linkedItems: IContentItemsContainer
    }
)

{

    return (
        <div key={sessionId}>
            <h2>{name}</h2>
            <h3>
            {dateTimeFromDateTime && DateTime.fromISO(dateTimeFromDateTime).toLocaleString(DateTime.TIME_SIMPLE)}
            -
            {dateTimeToDateTime && DateTime.fromISO(dateTimeToDateTime).toLocaleString(DateTime.TIME_SIMPLE)}
            </h3>
            
            {location && 
                <h4>
                    {location.elements.name.value}
                </h4>
            }
            <hr />
            {speakers &&
                speakers.map(speaker => (
                    <div key={speaker.system.id}>
                        <h4 >
                            {speaker.elements.firstName.value}&nbsp;
                            {speaker.elements.lastName.value}<br/>
                            {speaker.elements.jobTitle.value}
                        </h4>
                        <RichText
                            richTextElement={speaker.elements.bio}
                            linkedItems={linkedItems}
                        />
                    </div>
                )) 
                
            }
            
            <hr/>
            <h4>Presentation materials and Downloads</h4>
            {presentations &&
                presentations.map(presentation => (
                    <div key={presentation.system.id}>
                        {presentation.elements.name.value}
                    
                    {presentation.elements.description.value && 
                        <RichText
                            richTextElement={presentation.elements.description}
                            linkedItems={linkedItems}
                        />
                    }
                    </div>
                )) 
                
            }
        </div>
    )
}