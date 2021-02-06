import LinearGraph from './lineargraph'

const toGraphData = w => w.stats[w.tier].damage.map( s => ({ x: s.range, y: s.value*w.stats[w.tier].magSize }))
const DPM = props => <LinearGraph toGraphData={toGraphData} title='Damage per mag' {...props} />

export default DPM