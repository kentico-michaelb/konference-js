import Image from 'next/image'
import { Media } from "../models/Media";
import { Session as SessionModel} from "../models/Session";
import Session from '../components/Session'
import RichText from "./RichText";

export default function SpeakerDetail({
    bio,
    media,
    journeyStage,
    firstName,
    jobTitle,
    lastName,
    speakerId,
    sessions
    }:{
        bio: any,
        media: Array<Media>,
        journeyStage: any,
        firstName: string,
        jobTitle: string,
        lastName: string,
        speakerId: string
        sessions: Array<SessionModel>
    }
)

{
    //TODO: clean this up in a helper utility and make it use process.env for collections
    const denverSessions = sessions.filter(session => session.system.collection == 'denver')
    const brnoSessions = sessions.filter(session => session.system.collection == 'brno')
    const melbourneSessions = sessions.filter(session => session.system.collection == 'melbourne')

    return (
        <div key={speakerId}>
            {media[0] &&
                <Image
                    src={media[0].elements.asset.value[0].url}
                    height={300}
                    width={300}
                    alt={media[0].elements.asset.value[0].description}
                />
            }
            <h2>{firstName}&nbsp;{lastName}<br/></h2>
            <h3>
                {jobTitle}
            </h3>
            <div>
                <RichText
                    richTextElement={bio}
                    linkedItems={bio.linkedItems}
                />
            </div>
            <hr />
            <h5>Denver Sessions:</h5>
            {denverSessions && denverSessions.map(session => (
                <div key={`${speakerId}_${session.system.id}`}>
                    <Session 
                        name={session.elements.name.value}
                        sessionId={session.system.id}
                    />
                </div>
            ))}
            <hr />
            <h5>Brno Sessions:</h5>
            {brnoSessions && brnoSessions.map(session => (
                <div key={`${speakerId}_${session.system.id}`}>
                    <Session 
                        name={session.elements.name.value}
                        sessionId={session.system.id}
                    />
                </div>
            ))}
            <hr />
            <h5>Melbourne Sessions:</h5>
            {melbourneSessions && melbourneSessions.map(session => (
                <div key={`${speakerId}_${session.system.id}`}>
                    <Session 
                        name={session.elements.name.value}
                        sessionId={session.system.id}
                    />
                </div>
            ))}
            
        </div>
    )
}