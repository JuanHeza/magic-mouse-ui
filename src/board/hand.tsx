import Card from "../card/card.tsx"
import {useDroppable} from '@dnd-kit/react';
import type { CardData } from '../models/card';


function Hand({id, cards = []}:  {id: string; cards: CardData[]}) {
    const {ref, isDropTarget} = useDroppable({
        id,
    });
    return (
    <>
    <section ref={ref} className={`hand-area area ${isDropTarget ? "droppable active" : "droppable"}`}>
        {cards.length < 1 && <div className="area-label"> Hand </div>}

        {/* <Card id="card1" cost={5} inkable={true} name="Hero" will={10} defense={5} image={jack}></Card>    
        <Card id="card2" cost={3} inkable={false} name="Villain" will={8} defense={3}></Card>     */}
        {cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    cost={card.cost}
                    inkable={card.inkable}
                    name={card.name}
                    will={card.will}
                    defense={card.defense}
                    image={card.image}
                />
            ))}
    </section>
    </>
    )
}

export default Hand;