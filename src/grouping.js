import Weapon from './weapon'

const Grouping = ({ toGroups, weapons, setWeapons, toggleCompare, changeTier, range, headshot }) => {
    const deselectGroup = g => setWeapons( weapons.map( w => ({...w, active: w.active && !toGroups(w).includes(g) })))
    const selectGroup = g => setWeapons( weapons.map( w => ({...w, active: w.active || toGroups(w).includes(g) })))

    return <div className="row">
        {weapons
        .reduce( (acc, curr) => toGroups(curr).filter( g => !acc.includes(g) ).concat(acc), [] )
        .map( g => <div key={g} className="col-12">
            <div className="p-1 my-3 d-flex" style={{ borderBottom: '1px solid darkgray'}}>
            <div style={{fontSize: '1.1rem'}} className="flex-grow-1">{g}</div>
            { weapons.some( w => w.active && toGroups(w).includes(g)) ?                    
                <div style={{color: 'navy', fontSize: '.75rem', cursor: 'pointer'}} onClick={() => deselectGroup(g)}>select none</div> :
                <div style={{color: 'navy', fontSize: '.75rem', cursor: 'pointer'}} onClick={() => selectGroup(g)}>select all</div>
            }
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
            {weapons
                .filter( w => toGroups(w).includes(g) )
                .map( w => <Weapon key={w.name} onCompare={() => toggleCompare(w)} changeTier={changeTier} data={w} range={range} headshot={headshot} />)}
            </div>
        </div>)}
    </div>
}

  export default Grouping