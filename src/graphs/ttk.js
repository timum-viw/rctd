import { useState } from 'react'
import LinearGraph from './lineargraph'

const TTK = ({ weapons }) => {
    const [armored, setArmored] = useState(false)
    const toGraphData = w => w.stats[w.tier].damage.map( s => {
        const bullets = Math.ceil((armored ? 125 : 100) / s.value)
        return { x: s.range, y: (bullets-1) / w.stats[w.tier].firerate + (bullets > w.stats[w.tier].magSize ? w.stats[w.tier].reloadtime : 0) }
    })

    return <LinearGraph weapons={weapons} toGraphData={toGraphData} title='Time to Kill' ticks={4} >
        <div><label style={{fontSize: '.7rem'}}><input style={{verticalAlign: '-.1rem'}} type="checkbox" checked={armored} onChange={() => setArmored(!armored)} /> armored</label></div>
    </LinearGraph>
}

export default TTK