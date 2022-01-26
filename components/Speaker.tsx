import Image from 'next/image'
import { Media } from "../models/Media";

export default function SpeakerDetail({
    media,
    firstName,
    jobTitle,
    lastName,
    speakerId,
    }:{
        media: Array<Media>,
        firstName: string,
        jobTitle: string,
        lastName: string,
        speakerId: string
    }
)

{
    return (
        <div key={speakerId}>
            {media &&
                <Image
                    src={media[0].elements.asset.value[0].url}
                    height={300}
                    width={300}
                    alt={media[0].elements.asset.name}
                />
            }
            <h2>{firstName}&nbsp;{lastName}<br/></h2>
            <h3>
                {jobTitle}
            </h3>
        </div>
    )
}