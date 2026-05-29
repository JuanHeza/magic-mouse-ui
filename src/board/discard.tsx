import {useDroppable} from '@dnd-kit/react';

import type { CardData } from '../models/card';
import Card from '../card/card';


function Discard({id, cards = []}:  {id: string; cards: CardData[]}) {
    const {ref, isDropTarget} = useDroppable({
        id,
    });
    return (
    <>
    <section  ref={ref} className={`discard-area area ${isDropTarget ? "droppable active" : "droppable"}`}>
        {cards.length < 1 && <div className="area-label"> Discard </div>}

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
    </section></>
    )
}

export default Discard;