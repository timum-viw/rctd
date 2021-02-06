import { maxValues } from './data'

const Stat = ({ name, value, maxValue, invert }) => <div>
    <div>{ name }</div>
    <div className="d-flex align-items-center">
        <div className="flex-grow-1">
            <div className="progress" style={{margin: '0', height: '.5rem'}}>
                <div className="progress-bar" role="progressbar" style={{backgroundColor: '#019b9b', width: Math.pow((value === Infinity ? maxValue : value) / maxValue, invert ? -1 : 1)*100+'%'}}></div>
            </div>
        </div>
        <div className="mx-3">{ value === Infinity ? '∞' : value }</div>
    </div>
</div>

const Weapon = ({ data, onCompare, changeTier }) => <div className="col">
    <div className="card shadow-sm">
    {data.image ? 
        <div style={{height: '225px'}} className="d-flex align-items-center">
            <img src={data.image} alt={data.name} width="100%" height="auto" /> 
        </div> : 
        <svg className="bd-placeholder-img card-img-top" 
            width="100%" 
            height="225" 
            xmlns="http://www.w3.org/2000/svg" 
            role="img" aria-label="Placeholder: Thumbnail" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"/>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    {data.name}
                </text>
        </svg>
    }
    <div className="card-body">
        <div>
            <h5>{data.name}<small style={{color: '#44444499', marginLeft: '.5rem'}} >{data.type}</small></h5>
            
        </div>
        <div className="card-text" style={{color: 'grey', fontSize: '.8rem'}}>
            <div className="d-flex">
                <div className="flex-grow-1">
                    <Stat name="damage" value={data.stats[data.tier].damage[0].value} maxValue={maxValues.damage} />  
                    <Stat name="range" value={(data.stats[data.tier].damage[1] || {range:Infinity}).range } maxValue={maxValues.range} />  
                    <Stat name="firerate" value={data.stats[data.tier].firerate} maxValue={maxValues.firerate} />  
                </div>
                <div className="flex-grow-1">
                    <Stat name="handling" value={data.stats[data.tier].handling} maxValue={maxValues.handling} />  
                    <Stat name="mag size" value={data.stats[data.tier].magSize} maxValue={maxValues.magSize} />  
                    <Stat name="reloadtime" value={data.stats[data.tier].reloadtime} maxValue={maxValues.reloadtime} invert />  
                </div>
            </div>
            <div className="fst-italic text-end my-1">{ data.stats[data.tier].other && data.stats[data.tier].other.join(', ') }</div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-2">
            <div className="btn-group">
                <button
                    type="button" 
                    className={`btn btn-sm btn-outline-secondary ${ data.active && 'active'}`} 
                    data-bs-toggle="button"
                    onClick={onCompare}>
                    Compare
                </button>
            </div>
            <small className="text-muted">
                <span style={{paddingRight: '.4rem'}}>tier</span>
                {data.stats.map( (s, i) => <button
                    key={i}
                    type="button" 
                    className={`btn btn-sm btn-outline-secondary ${ data.tier === i && 'active'}`} 
                    data-bs-toggle="button"
                    onClick={() => changeTier(i, data)}>
                        {i}
                </button>)}
            </small>
            </div>
        </div>
    </div>
</div>

export default Weapon