const BarGraph = ({ weapons, title, toValue, invert, ...props }) => {
    const maxValue = Math.max(...weapons.map( toValue ).filter( v => !isNaN(v) ))
    return <div className="card shadow-sm h-100 d-flex">
        <div className="card-body flex-grow-1 d-flex flex-column">
            <h5>{title}</h5>
            { props.children }
            <div className="mx-4 my-2 flex-grow-1">
                {weapons.length === 0 ?
                <p className="text-center fst-italic">nothing selected</p> :
                <table className="table align-middle" style={{fontSize: '.8rem'}}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Value</th>
                            <th scope="col" style={{width: '100%'}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        { weapons.sort( (a,b) => ((a,b) => (isNaN(a) || isNaN(b)) ? (isNaN(b) ? 0 : 1) : (invert ? -1 : 1)*(b - a))( toValue(a), toValue(b) )).map( (w, i) => {
                        const value = toValue(w)
                        return <tr key={w.name} style={{cursor: 'pointer'}} onClick={ () => window.scrollBy(0, document.getElementById(w.name).getBoundingClientRect().y - 15)}> 
                            <td>{i+1}</td>
                            <td style={{whiteSpace: 'nowrap'}}>{w.name}</td>
                            <td style={{whiteSpace: 'nowrap', fontSize: '.6rem'}}>{w.type}</td>
                            <td>{isNaN(value) ? '??' : value}</td>
                            <td>
                                {!isNaN(value) && <div className="progress" style={{margin: '0', height: '.5rem'}}>
                                    <div className="progress-bar" role="progressbar" style={{backgroundColor: '#019b9b', width: (value === Infinity ? maxValue : value) / maxValue*100+'%'}}></div>
                                </div>}
                            </td>
                        </tr>})}
                    </tbody>
                </table>}
            </div>
        </div>
    </div>
}

export default BarGraph