import MinimalCard from "./minimalCard"
import "./card.css"
import hero from "../assets/Card_Back.png"

type cardProps = {
    cost: number
    inkable: boolean
    name: string
    will: number
    defense: number
    image?: string
}

function Card(props: cardProps){

    return (
        <>
        <div className="card">
            <MinimalCard cost={props.cost} inkable={props.inkable} name={props.name} will={props.will} defense={props.defense} image={props.image|| hero}></MinimalCard>
        </div>
        </>
    )
}
export default Card