import {  Session as SessionModel } from "../models/Session";
import Session from '../components/Session'
import { IContentItem } from "@kentico/kontent-delivery";
import { Break as BreakModel} from "../models/Break";
import Break from '../components/Break'

export default function Agenda({
    name,
    sessions,
    agendaId }:{
        name: string,
        sessions: Array<IContentItem>,
        agendaId: string
    }
)

{
    return (
        <div key={agendaId}>
            <h3>
                {name}
            </h3>
            <div>
                {sessions.map(session => {
                    if(session.system.type=="session")
                    {
                        const agendaItem = session as SessionModel
                        return (
                            <div key={session.system.id}>
                            <Session
                                    name={agendaItem.elements.name.value}
                                    dateTimeFromDateTime={agendaItem.elements.dateTimeFromDateTime.value}
                                    dateTimeToDateTime={agendaItem.elements.dateTimeToDateTime.value}
                                    location={agendaItem.elements.location.linkedItems[0]}
                                    sessionId={agendaItem.system.id}
                            />
                            </div>
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
        </div>
    )
}