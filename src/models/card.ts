import type { Owner, Zone } from "./playmat";
import jack from "../assets/card.webp"

type CardData = {
    id: string;
    owner: Owner;
    name: string;
    zone: Zone;
    cost: number;
    inkable: boolean;
    will?: number;
    moveCost?: number;
    defense: number;
    image: string;
}
const TestCards: CardData[] = [{
    id: 'card-1',
    name: 'Hero',
    zone: 'HAND',
    owner: 'LOCAL',
    cost: 0,
    inkable: false,
    defense: 0,
    image: ''
},
{
    id: 'card-2',
    name: 'Villain',
    zone: 'HAND',
    owner: 'REMOTE',
    cost: 0,
    inkable: false,
    defense: 0,
    image: ''
},
{
    
    id: 'card-3',
    name: 'Villain',
    zone: 'HAND',
    owner: 'REMOTE',
    cost: 5,
    inkable: true,
    defense: 0,
    image: jack
},
{
    
    id: 'card-4',
    name: 'Villain',
    zone: 'HAND',
    owner: 'LOCAL',
    cost: 5,
    inkable: true,
    defense: 0,
    image: jack
}
];

export { TestCards };
export type {CardData };