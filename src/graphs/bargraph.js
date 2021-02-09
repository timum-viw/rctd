const BarGraph = ({ weapons, title, toValue, invert, ...props }) => {
    const maxValue = Math.max(...weapons.map( toValue ).filter( v => !isNaN(v) ))
    return <div className="card shadow-sm h-100 d-flex">
        <div className="card-body flex-grow-1 d-flex flex-column">
            <h5>{title}</h5>
            { props.children }
            <div className="mx-4 my-2 flex-grow-1">
                {weapons.length === 0 ?
                <p className="text-center fst-italic">nothing selected</p> :
                <table className="table" style={{fontSize: '.8rem'}}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">value</th>
                            <th scope="col" style={{width: '100%'}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        { weapons.sort( (a,b) => isNaN(toValue(a)) ? (isNaN(toValue(b)) ? -1 : 1) : (invert ? -1 : 1)*(toValue(b) - toValue(a))).map( (w, i) => {
                        const value = toValue(w)
                        return <tr key={w.name} > 
                            <td>{i+1}</td>
                            <td style={{whiteSpace: 'nowrap'}}>{w.name}</td>
                            <td>{isNaN(value) ? 'NaN' : value}</td>
                            <td style={{verticalAlign: 'middle'}}>
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