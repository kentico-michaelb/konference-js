import { Room } from "../models/Room";

export default function Break({
    name,
    duration,
    breakId,
    room }:{
        name: string,
        duration: number | null,
        room: Room,
        breakId: string
    }
)

{

    return (
        <div key={breakId}>
            <span>
                {duration} minute &nbsp;{name}
            </span> 
            {room && 
                <span>
                    &nbsp; | &nbsp;
                    {room.elements.name.value}
                </span>}
        </div>
    )
}