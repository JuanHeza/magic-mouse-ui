import Card from "../card/card.tsx"
import jack from "../assets/card.webp"
function Hand() {

    return (
    <>
    <section className='hand-area area'>
        <div className="area-label"> Hand
            
        </div>
        <Card cost={5} inkable={true} name="Hero" will={10} defense={5} image={jack}></Card>    
        <Card cost={3} inkable={false} name="Villain" will={8} defense={3}></Card>    
    </section>
    </>
    )
}

export default Hand;