
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
                <img src={props.image} alt={props.name} className="card-image"></img>
            </div>
        </>
    )
}
export default MinimalCard