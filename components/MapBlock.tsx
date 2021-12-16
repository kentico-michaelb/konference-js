import { Venue } from '../models/Venue'
import RichText from '../components/RichText'
import Map from '../components/Map'
import { Map as MapModel }  from '../models/Map'

export default function MapBlock({ 
    heading, 
    venue,
    linkedItems }: {
        heading: string,
        venue: Venue,
        linkedItems: any }
    ) {

    const map = venue.elements.map.linkedItems[0] as MapModel

    return (
        <>
        <h2>{heading}</h2>
        <h3>{venue.elements.name.value}</h3>
        <div>
            <RichText 
            richTextElement={venue.elements.description}
            linkedItems={linkedItems}
            />

            {map && <Map  map={map} />}
        </div>
        </>
    )
}