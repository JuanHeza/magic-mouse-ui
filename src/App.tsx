import { useState, useEffect } from 'react'
import {androidAdd} from 'react-icons-kit/ionicons/androidAdd'
import {androidRemove} from 'react-icons-kit/ionicons/androidRemove'
import {androidRefresh} from 'react-icons-kit/ionicons/androidRefresh'
import  { withBaseIcon } from 'react-icons-kit'
import './App.css'
import Playmat from './board/playmat'

function App() {
  const [lore, setLore] = useState({local: 0, nonLocal: 0});
  function setLoreLocal(count: number){
    setLore((lore) => ({...lore, local: count}));
  }
  function setLoreNonLocal(count: number){
    setLore((lore) => ({...lore, nonLocal: count}));
  }
  
  const [maxLore, setMaxLore] = useState({local: 20, nonLocal: 20});
  function setMaxLoreLocal(max: number){
    setMaxLore((maxLore) => ({...maxLore, local: max}));
  }
  function setMaxLoreNonLocal(max: number){
    setMaxLore((maxLore) => ({...maxLore, nonLocal: max}));
  }

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return JSON.parse(saved); 
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  })
  useEffect(() => {
    // Guarda cada vez que cambie
    localStorage.setItem("darkMode", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: any) => {
      // Solo cambia si no hay preferencia guardada
      if (localStorage.getItem("darkMode") === null) {
        setTheme(event.matches);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);


// function buildLoreTracker() {
//   const divs = [];
//   for (let i = 1; i <= maxLore; i++) {
//       divs.push(
//       <div className={`lore-item ${count === i ? "active" : ""}`} key={ i } > 
//         <img className="lore-number" src={ uninkable} alt={`Uninkable ${i}`} />
//         <span> { i }</span>
//       </div>
//       );
//   }
//   return <>
//     { divs }
//     <img
//         src={illuminary}
//         alt="Illuminary"
//         className="illuminary"
//         style={{
//           display: count > 0 ? "block" : "none",
//           transform: `translateX(${count > 0 ? positions[count-1].left : 0}px)`,
//         }}
//     />
//     </>;
// }

const SideIconContainer = 
    withBaseIcon({ size: 24, className:"action-button"})
  return (
    <>
    <div className={theme ? "dark" : "light"}>
      <h1>{theme ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}</h1>
      <button onClick={() => setTheme(!theme)}>
        Cambiar tema manualmente
      </button>
    </div>
    <article style={{display: "flex", justifyContent: "space-between"}}> 
      <section className='button-set'>
        <button type="button" title='sub' className="counter" disabled={lore.local <= 0} onClick={() => setLoreLocal((lore.local - 1) % (maxLore.local+1))}>
          <SideIconContainer icon={androidRemove}/>
        </button>
        <button type="button" title='reset' className="counter" onClick={() => setLoreLocal(0)}>
          <SideIconContainer icon={androidRefresh}/>
        </button>
        <button type="button" title='add' className="counter" disabled={lore.local >= maxLore.local} onClick={() => setLoreLocal((lore.local + 1) % (maxLore.local+1))}>
          <SideIconContainer icon={androidAdd}/> 
        </button>
      </section>
      <section className='button-set'>
        <button type="button" title='sub' className="counter" disabled={lore.nonLocal <= 0} onClick={() => setLoreNonLocal((lore.nonLocal - 1) % (maxLore.nonLocal+1))}>
          <SideIconContainer icon={androidRemove}/>
        </button>
        <button type="button" title='reset' className="counter" onClick={() => setLoreNonLocal(0)}>
          <SideIconContainer icon={androidRefresh}/>
        </button>
        <button type="button" title='add' className="counter" disabled={lore.nonLocal >= maxLore.nonLocal} onClick={() => setLoreNonLocal((lore.nonLocal + 1) % (maxLore.nonLocal+1))}>
          <SideIconContainer icon={androidAdd}/> 
        </button>
      </section>
    </article>
      
      <section id="center">
        <Playmat maxLore={maxLore.nonLocal} setMaxLore={setMaxLoreNonLocal} setLore={setLoreNonLocal} actualLore={lore.nonLocal} local={true}  />
        <section className="spacer"></section>
        <Playmat maxLore={maxLore.local} setMaxLore={setMaxLoreLocal} setLore={setLoreLocal} actualLore={lore.local} local={false} />
      </section>

    </>
  )
}

export default App
