import './App.css'
import { useState, useRef } from 'react'
import Grouping from './grouping'
import data from './data'
import 'd3-transition'
import Graphs from './graphs/graphs'
import colors from './colors'

const initData = data => data.map( (w, i) => ({ ...w, color: colors(i) }))
  
function App() {
  const [ weapons, setWeapons ] = useState(initData(data))
  const [ grouping, setGrouping ] = useState('type')
  const [ range, setRange ] = useState(0)
  const graphsEl = useRef(null)

  const toggleCompare = weapon => {
    setWeapons( weapons.map( w => w === weapon ? { ...w, active: !w.active } : w ))
  }

  const changeTier = (tier, weapon) => {
    setWeapons( weapons.map( w => w === weapon ? { ...w, tier } : w ))
  }

  const clearSelection = () => setWeapons( weapons.map( w => ({ ...w, active: false })))
  const selectAll = () => setWeapons( weapons.map( w => ({ ...w, active: true })))
  const maxTier = () => setWeapons( weapons.map( w => ({ ...w, tier: w.stats.length - 1 })))
  const baseTier = () => setWeapons( weapons.map( w => ({ ...w, tier: 0 })))

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
              <div className="col-6">
                <div className="px-3 my-2" style={{color: 'navy', fontSize: '.75rem', cursor: 'pointer'}}>
                  <span className="ms-3 d-inline-block" style={{ color: 'darkgray'}}>group by</span>
                  <span className="mx-2 d-inline-block" style={{borderBottom: grouping === 'type' ? '1px solid navy' : 'none'}} onClick={() => setGrouping('type')}>type</span>
                  <span className="mx-2 d-inline-block" style={{borderBottom: grouping === 'rogue' ? '1px solid navy' : 'none'}} onClick={() => setGrouping('rogue')}>rogue</span>
                </div>
              </div>
              <div className="col-6 text-end">
                <div className="px-3 my-2" style={{color: 'navy', fontSize: '.75rem', cursor: 'pointer'}}>
                  <span className="mx-3 d-inline-block" onClick={ () => baseTier() }>base tier</span>
                  <span className="mx-3 d-inline-block" onClick={ () => maxTier() }>max tier</span>
                  <span className="mx-3 d-inline-block" onClick={ () => selectAll() }>compare all</span>
                </div>
              </div>
            </div>
            { grouping === 'type' ? 
              <Grouping toGroups={w => [w.type]} weapons={weapons} setWeapons={setWeapons} toggleCompare={toggleCompare} changeTier={changeTier} range={range} /> :
              <Grouping toGroups={w => w.rogues} weapons={weapons} setWeapons={setWeapons} toggleCompare={toggleCompare} changeTier={changeTier} range={range} />
            }
            <div className="text-end" style={{position: 'sticky', bottom: 0, top: 0, zIndex: 2, fontSize: '.8rem'}}>
              <span className="d-inline-block p-2 m-2 card shadow-sm" style={{ borderRadius: '.4rem' }}>
                <div className="d-flex">
                  <div className="mx-1" style={{fontSize: '.75rem'}}>range</div>
                  <input type="range" className="form-range mx-1" value={range} onChange={ e => setRange(e.currentTarget.value) }></input>
                  <div className="mx-1">{range}</div>
                </div>
              </span>
              <span className="d-inline-block p-2 m-2 card shadow-sm" style={{ borderRadius: '15%' }} onClick={ () => clearSelection() }>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M5.662 23l-5.369-5.365c-.195-.195-.293-.45-.293-.707 0-.256.098-.512.293-.707l14.929-14.928c.195-.194.451-.293.707-.293.255 0 .512.099.707.293l7.071 7.073c.196.195.293.451.293.708 0 .256-.097.511-.293.707l-11.216 11.219h5.514v2h-12.343zm3.657-2l-5.486-5.486-1.419 1.414 4.076 4.072h2.829zm.456-11.429l-4.528 4.528 5.658 5.659 4.527-4.53-5.657-5.657z"/></svg>
              </span>
              <span className="d-inline-block p-2 m-2 card shadow-sm" style={{ borderRadius: '15%' }} onClick={ () => window.scrollBy(0,graphsEl.current.getBoundingClientRect().y) }>
                <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 19h-4v-8h4v8zm6 0h-4v-18h4v18zm6 0h-4v-12h4v12zm6 0h-4v-4h4v4zm1 2h-24v2h24v-2z"/></svg>
                <span className="badge bg-secondary">{weapons.filter( w => w.active).length}</span>
              </span>
            </div>
            <div ref={graphsEl}>
              <Graphs weapons={weapons} range={range} />
            </div>
          </div>
        </div>
        
      </main>

      <footer className="text-muted py-5">
        <div className="container">
          <p className="float-end mb-1">
            <span onClick={ () => window.scrollTo(0,0) }>Back to top</span>
          </p>
          <p className="mb-1">Have Feedback? Found an error? Want to contribute? Visit <a href="https://github.com/timum-viw/rctd" target="_blank" rel="noreferrer">https://github.com/timum-viw/rctd</a></p>
          <p className="mb-1">RCTD is &copy; by github.com/timum-viw</p>
        </div>
      </footer>
    </div>
  )
}

export default App
