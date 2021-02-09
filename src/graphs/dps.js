import { LinearChart } from '../Charting/Chart'
import LinearGraph from './lineargraph'
import BarGraph from './bargraph'

const toGraphData = w => w.stats[w.tier].damage.map( s => ({ x: s.range, y: s.value*w.stats[w.tier].firerate }))
const toValue = w => Math.round(w.stats[w.tier].damage[0].value*w.stats[w.tier].firerate)
const DPSLines = props => <LinearGraph toGraphData={toGraphData} title='Damage per second' ticks={4} {...props} />
const DPSBars = props => <BarGraph toValue={toValue} title='Damage per second' {...props} />

export { DPSLines, DPSBars }