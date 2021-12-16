import { Sponsor } from "../models/Sponsor"

export default function SponsorBlock({
    heading,
    sponsors
    }: {
        heading: string
        sponsors: Array<Sponsor>
    }) {
    
    return (
        <div>
            <h2>{heading}</h2>
            {sponsors.map((sp:Sponsor) => (
                <div key={sp.system.id}>
                    {sp.elements.name.value}
                </div>
            ))}
        </div>
    )
    
}