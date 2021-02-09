import LinearGraph from './lineargraph'
import BarGraph, { withRange } from './bargraph'

const toGraphData = w => w.stats[w.tier].damage.map( s => ({ x: s.range, y: s.value*w.stats[w.tier].firerate }))
const toValue = range => w => {
    const damage = w.stats[w.tier].damage.find( d => d.range >= range)
    if(!damage) return NaN
    return Math.round(damage.value*w.stats[w.tier].firerate)
}
const DPSLines = props => <LinearGraph toGraphData={toGraphData} title='Damage per second' ticks={4} {...props} />
const DPSBars = withRange(({ range, ...props }) => <BarGraph toValue={toValue(range)} title='Damage per second' {...props} />)

export { DPSLines, DPSBars }