import LinearGraph from './lineargraph'

const toGraphData = w => w.stats[w.tier].damage.map( s => ({ x: s.range, y: s.value }))
const Damage = props => <LinearGraph toGraphData={toGraphData} title='Damage per bullet' ticks={4} {...props} />

export default Damage