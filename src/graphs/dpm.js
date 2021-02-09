import BarGraph, { withRange } from './bargraph'
import LinearGraph from './lineargraph'

const toGraphData = w => w.stats[w.tier].damage.map( s => ({ x: s.range, y: s.value*w.stats[w.tier].magSize }))
const toValue = range => w => {
    const damage = w.stats[w.tier].damage.find( d => d.range >= range )
    if(!damage) return NaN
    return damage.value*w.stats[w.tier].magSize
}
const DPMLines = props => <LinearGraph toGraphData={toGraphData} title='Damage per mag' {...props} />
const DPMBars = withRange(({ range, ...props}) => <BarGraph toValue={toValue(range)} title='Damage per mag' {...props} />)

export { DPMLines, DPMBars }