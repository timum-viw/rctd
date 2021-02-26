import BarGraph from './bargraph'
import LinearGraph from './lineargraph'

const toGraphData = headshot => w => w.stats[w.tier].damage.map( s => ({ x: s.range, y: headshot ? s.headshot : s.body }))
const toValue = (range, headshot) => w => {
    const damage = w.stats[w.tier].damage.find( d => d.range >= range)
    return damage ? (headshot ? damage.headshot : damage.body) : NaN
}
const DamageLines = ({ headshot, ...props }) => <LinearGraph toGraphData={toGraphData(headshot)} title='Damage per bullet' ticks={4} {...props} />
const DamageBars = ({ range, headshot, ...props }) => <BarGraph toValue={toValue(range, headshot)} title='Damage per bullet' {...props} />

export { DamageLines, DamageBars }