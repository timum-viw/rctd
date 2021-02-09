const Legend = ({ weapons }) => <div>
    { weapons.map( w => <span key={w.name} style={{fontSize: '.8rem', color: '#212529'}} className="mx-1" onClick={ () => window.scrollBy(0, document.getElementById(w.name).getBoundingClientRect().y - 15)}>
        <span className="d-inline-block" style={{height:'1rem', width: '1rem', borderRadius: '.2rem', backgroundColor: w.color}}></span>
        &nbsp;{ w.name }
    </span>
    )}
</div>

export default Legend