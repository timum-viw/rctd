import { LinearChart } from '../Charting/Chart'
import LinearGraph from './lineargraph'

const toGraphData = w => w.stats[w.tier].damage.map( s => ({ x: s.range, y: s.value*w.stats[w.tier].firerate }))
const DPS = props => <LinearGraph toGraphData={toGraphData} title='Damage per second' ticks={4} {...props} />

export default DPS