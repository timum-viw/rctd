import { useState } from 'react'
import { DamageLines, DamageBars } from './damage'
import { DPSLines, DPSBars } from './dps'
import { DPMLines, DPMBars } from './dpm'
import { TTKLines, TTKBars } from './ttk'

const graphs = [{ name: 'damage', lines: DamageLines, bars: DamageBars }, { name: 'dps', lines: DPSLines, bars: DPSBars }, { name: 'dpm', lines: DPMLines, bars: DPMBars }, { name: 'ttk', lines: TTKLines, bars: TTKBars }]
const Graphs = ({ weapons }) => {
    const [single, setSingle] = useState(null)
    const [mode, setMode] = useState('lines')

    return <div>
        <div className="px-3 my-2" style={{color: 'navy', fontSize: '.75rem', cursor: 'pointer'}}>
            <span className="mx-3 d-inline-block" style={{borderBottom: mode === 'type' ? '1px solid navy' : 'none'}} onClick={() => setMode('lines')}>lines</span>
            <span className="mx-3 d-inline-block" style={{borderBottom: mode === 'rogue' ? '1px solid navy' : 'none'}} onClick={() => setMode('bars')}>bars</span>
        </div>
        <div className="row row-cols-1 row-cols-md-2" style={{minHeight: '35rem'}}>
            {graphs.map( g => (single === g.name || !single) && <div key={g.name} className="col flex-grow-1 my-2">
                <div className="position-relative">
                    <span className="position-absolute p-1" style={{ right: '1rem', zIndex: 1, cursor: 'pointer' }} onClick={() => single ? setSingle(null) : setSingle(g.name)}>
                        { single ? 
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="#444" d="M13 10h-8v-2h8v2zm8.172 14l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg> : 
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="#444" d="M13 10h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2zm8.172 14l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg> }
                    </span>
                </div>
                {mode === 'lines' ?
                    <g.lines weapons={weapons} /> : 
                    <g.bars weapons={weapons} />
                }
            </div>)}
        </div>
    </div>
}

const comp = ({ weapons, ...props }) => <Graphs weapons={weapons.filter( w => w.active )} {...props} />
export default comp