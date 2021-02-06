import { LinearChart } from '../Charting/Chart'
import LineGraph from '../Charting/LineGraph'
import { XAxis, YAxis } from '../Charting/Axis'
import { curveStepAfter } from 'd3-shape'
import Legend from './legend'

const extendLast = a => a.concat([{...a[ a.length - 1 ], x: 9999 }])

const LinearGraph = ({ weapons, toGraphData, title, ticks = 5, ...props }) => <div style={{ overflow: 'hidden' }} className="h-100 d-flex flex-column">
    <h5>{title}</h5>
    { props.children }
    <div className="m-4 flex-grow-1">
        <LinearChart xDomain={[0,Math.max(...weapons.flatMap( toGraphData ).map( d => d.x )) ]} yDomain={[0,Math.max(...weapons.flatMap( toGraphData ).map( d => d.y ))]} >
            <XAxis />
            <YAxis ticks={{count: ticks}} />
            { weapons.map( w => 
                <LineGraph noPoints key={w.name} curve={curveStepAfter} color={w.color} data={ extendLast(toGraphData(w)) } /> 
            )}
        </LinearChart>
    </div>
    <Legend weapons={weapons} />
</div>

export default LinearGraph