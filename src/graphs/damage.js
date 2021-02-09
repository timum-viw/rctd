import BarGraph, { withRange } from './bargraph'
import LinearGraph from './lineargraph'

const toGraphData = w => w.stats[w.tier].damage.map( s => ({ x: s.range, y: s.value }))
const toValue = range => w => {
    const damage = w.stats[w.tier].damage.find( d => d.range >= range)
    return damage ? damage.value : NaN
}
const DamageLines = props => <LinearGraph toGraphData={toGraphData} title='Damage per bullet' ticks={4} {...props} />
const DamageBars = withRange(({ range, ...props }) => <BarGraph toValue={toValue(range)} title='Damage per bullet' {...props} />)

export { DamageLines, DamageBars }