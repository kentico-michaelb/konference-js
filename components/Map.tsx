import Image from 'next/image'
import { Map } from '../models/Map'

export default function MapBlock({map}: {
        map: Map,
    }) 
    {
    let file;
    //TODO: make the sizing dynamic
    if(map.elements.type.value[0].codename == 'downloadable_map'){
        file = 
        <Image 
            src={map.elements.file.linkedItems[0].elements.asset.value[0].url}
            height={400}
            width={600}
            alt={map.elements.name.value}
        />
    }
    else {
        file = "GOOGLE MAP - TO BE DEVELOPED"
    }
    return (
        <>
            {file}
        </>
    )
}