import LinearGraph from './lineargraph'
import BarGraph from './bargraph'

const toGraphData = headshot => w => w.stats[w.tier].damage.map( s => ({ x: s.range, y: (headshot ? s.headshot : s.body)*w.stats[w.tier].firerate }))
const toValue = (range, headshot) => w => {
    const damage = w.stats[w.tier].damage.find( d => d.range >= range)
    if(!damage) return NaN
    return Math.round((headshot ? damage.headshot : damage.body)*w.stats[w.tier].firerate)
}
const DPSLines = ({ headshot, ...props }) => <LinearGraph toGraphData={toGraphData(headshot)} title='Damage per second' ticks={4} {...props} />
const DPSBars = ({ range, headshot, ...props }) => <BarGraph toValue={toValue(range, headshot)} title='Damage per second' {...props} />

export { DPSLines, DPSBars }