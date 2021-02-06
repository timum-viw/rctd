import { useState } from 'react'
import LinearGraph from './lineargraph'

const TTK = ({ weapons }) => {
    const [armored, setArmored] = useState(false)
    const toGraphData = w => w.stats[w.tier].damage.map( s => ({ x: s.range, y: Math.floor((armored ? 125 : 100)/s.value)/w.stats[w.tier].firerate }))

    return <LinearGraph weapons={weapons} toGraphData={toGraphData} title='Time to Kill' ticks={4} >
        <div><label style={{fontSize: '.7rem'}}><input style={{verticalAlign: '-.1rem'}} type="checkbox" checked={armored} onChange={() => setArmored(!armored)} /> armored</label></div>
    </LinearGraph>
}

export default TTK