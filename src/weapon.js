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

const Weapon = ({ data, onCompare, changeTier, range }) => {
    const damage = data.stats[data.tier].damage.find( d => d.range >= range )
    return <div className="col" id={data.name}>
        <div className="card shadow-sm">
        {/* {data.image ? 
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
        } */}
        <div className="card-body">
            <div>
                <h5>{data.name}<small style={{color: '#44444499', marginLeft: '.5rem'}} >{data.type}</small></h5>
                <div className="fst-italic mb-1" style={{ fontSize: '.7rem' }}>{data.rogues.join(', ')}</div>
            </div>
            <div className="card-text" style={{color: 'grey', fontSize: '.8rem'}}>
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <Stat name="damage" value={damage ? damage.value : NaN} maxValue={maxValues.damage} />  
                        <Stat name="range" value={damage ? damage.range : NaN } maxValue={maxValues.range} />  
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
                    <span className="mx-1" style={{cursor: 'pointer', visibility: data.tier > 0 ? 'visible' : 'hidden' }} onClick={ () => changeTier(Math.max(data.tier - 1, 0), data) }>&lt;</span>
                    <span>{data.tier}</span>
                    <span className="mx-1" style={{cursor: 'pointer', visibility: data.tier < data.stats.length - 1 ? 'visible' : 'hidden' }} onClick={ () => changeTier(Math.min(data.tier + 1, data.stats.length - 1), data) }>&gt;</span>
                </small>
                </div>
            </div>
        </div>
    </div>
}

export default Weapon