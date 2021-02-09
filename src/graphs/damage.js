import BarGraph from './bargraph'
import LinearGraph from './lineargraph'

const toGraphData = w => w.stats[w.tier].damage.map( s => ({ x: s.range, y: s.value }))
const toValue = w => w.stats[w.tier].damage[0].value
const DamageLines = props => <LinearGraph toGraphData={toGraphData} title='Damage per bullet' ticks={4} {...props} />
const DamageBars = props => <BarGraph toValue={toValue} title='Damage per bullet' {...props} />

export { DamageLines, DamageBars }