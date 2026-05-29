import LoreTracker from './loreTracker'
import {  useRef } from 'react'
import Play from './play'
import Discard from './discard'
import Inkwell from './inkweel'
import Deck from './deck'
import Hand from './hand'
type PlaymatProps = {
    maxLore: number
    setMaxLore: (value: number) => void
    setLore: (value: number) => void
    actualLore: number
    local: boolean
}

function Playmat( {maxLore, setMaxLore, setLore, actualLore, local} : PlaymatProps ) {

    const trackerRef = useRef<HTMLDivElement>(null);
    if (local) {
        return (
            <>
            <article id="Playmat" className="playmat">
                <section className='under-area'>
                    <Deck />          
                    <Inkwell />
                    <Discard />
                </section>
                <section className='upper-area'>
                    <Play />
                </section>
                <section className="spacer"></section>
                <LoreTracker maxLore={maxLore} trackerRef={trackerRef} local={local} count={actualLore} />
            </article> 
            </>
        )
    }else{
        return (
        <>
            <article id="Playmat" className="playmat">
                <LoreTracker maxLore={maxLore} trackerRef={trackerRef} local={local} count={actualLore} />
                <section className="spacer"></section>
                <section className='upper-area'>
                    <Play />
                </section>
                <section className='under-area'>
                    <Discard />
                    <Inkwell />
                    <Deck />          
                </section>
                <section className="off-area">
                    <Hand />
                </section>
            </article>  
        </>
        )
    }
}

export default Playmat;