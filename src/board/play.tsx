import {useDroppable} from '@dnd-kit/react';

import type { CardData } from '../models/card';
import Card from '../card/card';


function Play({id, cards = []}:  {id: string; cards: CardData[]}) {
    const {ref, isDropTarget} = useDroppable({
        id,
    });

    return (
    <>
    <section  ref={ref} className={`play-area area ${isDropTarget ? "droppable active" : "droppable"}`}>
        {cards.length < 1 && <div className="area-label"> Play </div>}

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

export default Play;