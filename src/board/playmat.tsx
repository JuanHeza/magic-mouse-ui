import LoreTracker from './loreTracker'
import {  useRef, useState, useEffect } from "react";
import Play from './play'
import Discard from './discard'
import Inkwell from './inkweel'
import Deck from './deck'
import Hand from './hand'
import {DragDropProvider} from '@dnd-kit/react';
import type { CardData  } from '../models/card';
import { TestCards  } from '../models/card';
import type {  Zone } from '../models/playmat';
import { ZonesDir } from '../models/playmat';
type PlaymatProps = {
    maxLore: number
    setMaxLore: (value: number) => void
    setLore: (value: number) => void
    actualLore: number
    local: boolean
}
function filterCards(cards: CardData[], zone: string, owner: string) {
    console.group("filter")
    console.log({cards, zone, owner})
    let filtered = cards.filter(card => {
        console.log(`${card.zone}=== ${zone} && ${card.owner} === ${owner}` )
        return `${card.zone}` === zone && card.owner === owner
    })
    console.table(filtered)
    console.groupEnd();
    return filtered;
}
function Playmat( {maxLore, setMaxLore, setLore, actualLore, local} : PlaymatProps ) {
    let names = !local ? ZonesDir.local : ZonesDir.nonlocal;
    const [cards, setCards] = useState<CardData[]>(TestCards);
useEffect(() => {
    (window as any).cards = cards;
}, [cards]);
    const trackerRef = useRef<HTMLDivElement>(null);
    return (
        <>
        <DragDropProvider
            onDragEnd={(event) => {
                if (event.canceled) return;

                const cardId = event.operation.source?.id as string;
                const newZone = event.operation.target?.id as Zone;
console.log({cardId, newZone});

                if (!cardId || !newZone) return;
                console.group("Drag End Event");
                setCards((prev) =>
                    prev.map((card) => {
                        if (card.id === cardId) {
                            const updatedCard = {
                                ...card,
                                zone: newZone
                            };
                            console.log("UPDATED", updatedCard);
                            return updatedCard;
                        }
                        return card;
                    })
                );
                console.table(cards)
                console.groupEnd();
            }}
        >
        <article id="Playmat" className={`playmat ${!local ? 'local' : 'nonlocal'}`}>
            <LoreTracker maxLore={maxLore} trackerRef={trackerRef} local={local} count={actualLore} />
            <section className="spacer"></section>
            <section className={`central-area ${!local ? 'local' : 'nonlocal'}`}>
                <Inkwell  key={"Inkwell"} id={`${names.Inkwell}`} cards={filterCards(cards, names.Inkwell, names.owner)}/>
                <Play  key={"Play"} id={`${names.Play}`} cards={filterCards(cards, names.Play, names.owner)}/>
                <section className="column">
                    <Discard  key={"Discard"} id={`${names.Discard}`} cards={filterCards(cards, names.Discard, names.owner)}/>
                    <Deck  key={"Deck"} id={`${names.Deck}`} cards={filterCards(cards, names.Deck, names.owner)}/>        
                </section>
            </section>
            <section className={`off-area ${!local ? 'local' : 'nonlocal'}`}>
                <Hand  key={"Hand"} id={`${names.Hand}`} cards={filterCards(cards, names.Hand, names.owner)}/>
            </section>
        </article> 
        </DragDropProvider>
        </>
    )
}

export default Playmat;