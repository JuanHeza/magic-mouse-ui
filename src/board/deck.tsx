import {useDroppable} from '@dnd-kit/react';

import type { CardData } from '../models/card';
import Card from '../card/card';


function Deck({id, cards = []}:  {id: string; cards: CardData[]}) {
    const {ref, isDropTarget} = useDroppable({
        id,
    });

    return (
    <>
    <section  ref={ref} className={`deck-area area ${isDropTarget ? "droppable active" : "droppable"}`}>
        {cards.length < 1 && <div className="area-label"> Deck </div>}

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

export default Deck;