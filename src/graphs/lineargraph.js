import { LinearChart } from '../Charting/Chart'
import LineGraph from '../Charting/LineGraph'
import { XAxis, YAxis } from '../Charting/Axis'
import { curveStepBefore } from 'd3-shape'
import Legend from './legend'

const addFirst = a => [{...a[0], x: 0 }].concat(a)
const factor = 1.1

const LinearGraph = ({ weapons, toGraphData, title, ticks = 5, ...props }) => {
    const xMax = Math.min(Math.abs(Math.max(...weapons.flatMap( toGraphData ).filter( d => d.x !== Infinity).map( d => d.x ))), 9999) * factor
    const yMax = Math.max(...weapons.flatMap( toGraphData ).map( d => d.y === Infinity ? 0 : d.y ))
    const replaceInfinity = d => ({ y: d.y, x: d.x === Infinity ? xMax : d.x})

    return <div style={{ overflow: 'hidden' }} className="card shadow-sm h-100 d-flex">
        <div className="card-body flex-grow-1 d-flex flex-column">
            <h5>{title}</h5>
            { props.children }
            <div className="m-4 flex-grow-1">
                <LinearChart xDomain={[0, xMax]} yDomain={[0, yMax]} >
                    <XAxis />
                    <YAxis ticks={{count: ticks}} />
                    { weapons.map( w => 
                        <LineGraph noPoints key={w.name} curve={curveStepBefore} color={w.color} data={ addFirst(toGraphData(w)).map( replaceInfinity ) } /> 
                    )}
                </LinearChart>
            </div>
            <Legend weapons={weapons} />
        </div>
    </div>
}

export default LinearGraph