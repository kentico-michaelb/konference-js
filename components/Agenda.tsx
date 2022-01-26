import {  Session as SessionModel } from "../models/Session";
import Session from '../components/Session'
import { IContentItem } from "@kentico/kontent-delivery";
import { Break as BreakModel} from "../models/Break";
import Break from '../components/Break'
import { projectModel } from "../models/_project";

export default function Agenda({
    name,
    sessions,
 }:{
        name: string,
        sessions: Array<IContentItem>,
    }
)
{
    return (
        <div>
            <h3>
                {name}
            </h3>
                {sessions.map((session) => {
                    if(session.system.type==projectModel.contentTypes.session.codename)
                    {
                        const agendaItem = session as SessionModel
                        return (
                                <Session
                                        name={agendaItem.elements.name.value}
                                        dateTimeFromDateTime={agendaItem.elements.dateTimeFromDateTime.value}
                                        dateTimeToDateTime={agendaItem.elements.dateTimeToDateTime.value}
                                        location={agendaItem.elements.location.linkedItems[0]}
                                        sessionId={agendaItem.system.id}
                                        sessionSlug={agendaItem.elements.slug.value}
                                        collection={agendaItem.system.collection}
                                />      
                        )
                    }
                    else {
                        const  agendaItem = session as BreakModel
                        return (
                            <Break 
                                name={agendaItem.elements.name.value}
                                duration={agendaItem.elements.duration.value}
                                room={agendaItem.elements.room.linkedItems[0]}
                                breakId={agendaItem.system.id}
                            />
                        )
                    }
                }
                )}
        </div>    
    )
}