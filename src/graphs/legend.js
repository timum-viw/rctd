const Legend = ({ weapons }) => <div>
    { weapons.map( w => <span key={w.name} style={{fontSize: '.8rem', color: '#212529'}} className="mx-1">
        <span className="d-inline-block" style={{height:'1rem', width: '1rem', borderRadius: '.2rem', backgroundColor: w.color}}></span>
        &nbsp;{ w.name }
    </span>
    )}
</div>

export default Legend