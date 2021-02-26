import BarGraph from './bargraph'
import LinearGraph from './lineargraph'

const toGraphData = headshot => w => w.stats[w.tier].damage.map( s => ({ x: s.range, y: (headshot ? s.headshot : s.body)*w.stats[w.tier].magSize }))
const toValue = (range, headshot) => w => {
    const damage = w.stats[w.tier].damage.find( d => d.range >= range )
    if(!damage) return NaN
    return (headshot ? damage.headshot : damage.body)*w.stats[w.tier].magSize
}
const DPMLines = ({ headshot, ...props }) => <LinearGraph toGraphData={toGraphData(headshot)} title='Damage per mag' {...props} />
const DPMBars = ({ range, headshot, ...props}) => <BarGraph toValue={toValue(range, headshot)} title='Damage per mag' {...props} />

export { DPMLines, DPMBars }