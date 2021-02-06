import './App.css'
import { useState } from 'react'
import Weapon from './weapon'
import data from './data'
import 'd3-transition'
import Graphs from './graphs/graphs'
import colors from './colors'

const initData = data => data.map( (w, i) => ({ ...w, color: colors(i) }))
function App() {
  const [ weapons, setWeapons ] = useState(initData(data))
  const [ search, setSearch ] = useState('')

  const toggleCompare = weapon => {
    setWeapons( weapons.map( w => w === weapon ? { ...w, active: !w.active } : w ))
  }

  const changeTier = (tier, weapon) => {
    setWeapons( weapons.map( w => w === weapon ? { ...w, tier } : w ))
  }

  const filteredWeapons = weapons.filter( w => !search || w.name.toLowerCase().includes(search.toLowerCase()) || w.type.toLowerCase().includes(search.toLowerCase()) )
  return (
    <div className="App">
      <header>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container">
            <a href="/" className="navbar-brand d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24"><path d="M5 19h-4v-8h4v8zm6 0h-4v-18h4v18zm6 0h-4v-12h4v12zm6 0h-4v-4h4v4zm1 2h-24v2h24v-2z"/></svg>
              <strong>RCTD</strong>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Rogue Company True Data</h1>
              <p className="lead text-muted">We collected the stats of all the weapons in Rogue Company for you to explore. Compare and select the equipment that suits your needs!</p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="px-3">
                  <input className="w-100 my-2" type="text" placeholder="search..." value={search} onChange={ e => setSearch(e.currentTarget.value) } />
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              { filteredWeapons.map( w => <Weapon key={w.name} onCompare={() => toggleCompare(w)} changeTier={changeTier} data={w} />) }
            </div>
            <Graphs weapons={filteredWeapons} />
          </div>
        </div>
        
      </main>

      <footer className="text-muted py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="/">Back to top</a>
          </p>
          <p className="mb-1">RCTD is &copy; by github.com/timum-viw</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
