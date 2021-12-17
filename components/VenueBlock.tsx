import { Venue } from '../models/Venue'
import RichText from './RichText'
import Map from './Map'
import { Map as MapModel }  from '../models/Map'

export default function MapBlock({ 
    heading, 
    venue,
    linkedItems }: {
        heading: string,
        venue: Venue,
        linkedItems: any }
    ) {
    //TODO: consider refactoring this to split MapBlock and VenueBlock
    return (
        <>
        <h2>{heading}</h2>
        <h3>{venue.elements.name.value}</h3>
        <div>
            <RichText 
                richTextElement={venue.elements.description}
                linkedItems={linkedItems}
            />
            <h3>{venue.elements.address.value}</h3>
            {venue.elements.map.linkedItems[0] && 
                <Map  map={venue.elements.map.linkedItems[0] as MapModel} />
            }
        </div>
        </>
    )
}