
type Zone = 'HAND' | 'PLAY' | 'INKWELL' | 'DISCARD' | 'DECK';
const ZoneEnum = { HAND: 'HAND', PLAY: 'PLAY', INKWELL: 'INKWELL', DISCARD: 'DISCARD', DECK: 'DECK' };
type Owner = 'LOCAL' | 'REMOTE';
const OwnerEnum = { LOCAL: 'LOCAL', REMOTE: 'REMOTE' };

const ZonesDir = {
    local: {
        Hand: `${ZoneEnum.HAND}`,
        Deck: `${ZoneEnum.DECK}`,
        Inkwell: `${ZoneEnum.INKWELL}`,
        Play: `${ZoneEnum.PLAY}`,
        Discard: `${ZoneEnum.DISCARD}`,
        owner: OwnerEnum.LOCAL,
    },
    nonlocal: {
        Hand: `${ZoneEnum.HAND}`,
        Deck: `${ZoneEnum.DECK}`,
        Inkwell: `${ZoneEnum.INKWELL}`,
        Play: `${ZoneEnum.PLAY}`,
        Discard: `${ZoneEnum.DISCARD}`,
        owner: OwnerEnum.REMOTE,
    }
}
export type { Zone, Owner };
export { ZoneEnum, OwnerEnum, ZonesDir };