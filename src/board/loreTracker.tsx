import uninkable from '../assets/uninkable.png'
import illuminary from '../assets/illuminary.png'
import { useState, useEffect, type JSX } from 'react'

type LoreTrackerProps = {
    maxLore: number
    trackerRef: React.RefObject<HTMLDivElement | null>
    count: number
    local: boolean
}

function LoreTracker({ maxLore, trackerRef, count, local }: LoreTrackerProps) {
    
    const [positions, setPositions] = useState<{left:number}[]>([]);

    useEffect(() => {
        if (trackerRef.current) {
        const items = trackerRef.current.querySelectorAll(".lore-item");
        const rects = Array.from(items).map((el) => {
            const r = (el as HTMLElement);
            return { left: r.offsetLeft};
        });
        setPositions(rects);
    }
    }, []);

    const numbers = Array.from(
        { length: maxLore },
        (_, index) => index + 1
    )
//     console.table(positions)
// console.log({local: local, ...positions[local ? positions.length - count : count-1], count: local ? positions.length - count : count-1})
    let points = numbers.reduce((acc: JSX.Element[], num: number) => {
        acc.push(
        <div className={`lore-item ${count === num ? "active" : ""}`} key={ num } > 
            <img className="lore-number" src={ uninkable} alt={`Uninkable ${num}`} />
            <span> { num }</span>
        </div>
        );
        return acc;
    }, [])

    return (<>
    <section className={`lore-tracker ${!local ? "local" : "non-local"}`}  ref={trackerRef}>
    { points}
    <img
        src={illuminary}
        alt="Illuminary"
        className={`illuminary ${!local ? "local" : "non-local"}`}
        style={{
            display: count > 0 ? "block" : "none",
            transform: `translateX(${count > 0 ? positions[count-1].left * (local ? -1 : 1) : 0}px)`,
        }}
        />
    </section>
    </>)
}

export default LoreTracker;