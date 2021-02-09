import BarGraph from './bargraph'
import LinearGraph from './lineargraph'

const toGraphData = w => w.stats[w.tier].damage.map( s => ({ x: s.range, y: s.value*w.stats[w.tier].magSize }))
const toValue = w => w.stats[w.tier].damage[0].value*w.stats[w.tier].magSize
const DPMLines = props => <LinearGraph toGraphData={toGraphData} title='Damage per mag' {...props} />
const DPMBars = props => <BarGraph toValue={toValue} title='Damage per mag' {...props} />

export { DPMLines, DPMBars }