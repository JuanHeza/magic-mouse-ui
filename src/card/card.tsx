import MinimalCard from "./minimalCard"
import "./card.css"
import hero from "../assets/Card_Back.png"
import {useDraggable} from '@dnd-kit/react';

type cardProps = {
    id: string
    cost: number
    inkable: boolean
    name: string
    will?: number
    moveCost?: number
    defense: number
    image?: string
}

function Card(props: cardProps){

const {ref} = useDraggable({
    id: props.id,
});
    return (
        <>
        <div className="card" ref={ref}>
            <MinimalCard cost={props.cost} inkable={props.inkable} name={props.name} will={props.will || 0} defense={props.defense} image={props.image|| hero}></MinimalCard>
        </div>
        </>
    )
}
export default Card
