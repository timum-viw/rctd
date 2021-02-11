import { useState } from 'react'
import BarGraph from './bargraph'
import LinearGraph from './lineargraph'

const withArmored = WrappedComp => props => {
    const [armored, setArmored] = useState(false)
    return <WrappedComp armored={armored} {...props} >
        {props.children}
        <div className="form-check">
            <label className="form-check-label" style={{fontSize: '.7rem'}}>
                <input className="form-check-input" type="checkbox" checked={armored} onChange={() => setArmored(!armored)} />
                armored
            </label>
        </div>
    </WrappedComp>
}

const TTKLines = withArmored(({ armored, weapons, ...props }) => {
    const toGraphData = w => w.stats[w.tier].damage.map( s => {
        const bullets = Math.ceil((armored ? 125 : 100) / s.value)
        return { x: s.range, y: (bullets-1) / w.stats[w.tier].firerate + (bullets > w.stats[w.tier].magSize ? w.stats[w.tier].reloadtime : 0) }
    })
    return <LinearGraph weapons={weapons} toGraphData={toGraphData} title='Time to Kill' ticks={4} >
        {props.children}
    </LinearGraph>
})

const TTKBars = withArmored(({ armored, range, weapons, ...props }) => {
    const toValue = w => {
        const damage = w.stats[w.tier].damage.find( d => d.range >= range )
        if(!damage) return NaN
        const bullets = Math.ceil((armored ? 125 : 100) / damage.value)
        return Math.round(((bullets-1) / w.stats[w.tier].firerate + (bullets > w.stats[w.tier].magSize ? w.stats[w.tier].reloadtime : 0))*1000)/1000
    }

    return <BarGraph weapons={weapons} toValue={toValue} title='Time to Kill' invert>
        {props.children}
    </BarGraph>
})

export { TTKLines, TTKBars }