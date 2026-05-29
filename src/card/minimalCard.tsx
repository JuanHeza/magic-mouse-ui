import uninkable from "../assets/uninkable.png"
import inkable from "../assets/inkable.png"

type minimalCardProps = {
    cost: number
    inkable: boolean
    name: string
    will: number
    defense: number
    image: string
}
function MinimalCard(props: minimalCardProps){

    return (
        <>
            <div className="minimalCard">
                {/* <div className="card-ink">
                    <div className="card-ink-internal">
                        <span className="card-ink-text">{props.cost}</span>
                        <img src={props.inkable ? inkable : uninkable} alt={props.name} className={`card-ink-image ${props.inkable ? 'inkable' : 'uninkable'}`}></img>
                    </div>
                </div> */}
                <img src={props.image} alt={props.name} className="card-image"></img>
                {/* <div className="card-Data"></div>
                <div className="card-name">
                    <div className="card-will"></div>
                    <div className="card-defense"></div>
                </div> */}
            </div>
        </>
    )
}
export default MinimalCard