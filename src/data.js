import data from './data.json'
import colors from './colors'

const weapons = data.weapons.map( (w, i) => ({ 
    ...w, 
    stats: w.stats.map( s => ({ ...s, damage: s.damage.map( d => ({ ...d, range: d.range === 'Infinity' ? Infinity : d.range })) })),
    tier: 0,
    color: colors(i) 
}))

export default weapons
export const maxValues = { 
    damage: { 
        body: Math.max(...weapons.flatMap( w => w.stats.flatMap( s => s.damage.map( d => d.body )))),
        headshot: Math.max(...weapons.flatMap( w => w.stats.flatMap( s => s.damage.map( d => d.headshot )))),
    },
    range: Math.max(...weapons.flatMap( w => w.stats.flatMap( s => s.damage.map( d => d.range ))).filter( r => r !== Infinity )),
    firerate: Math.max(...weapons.flatMap( w => w.stats.map( s => s.firerate ))),
    handling: Math.max(...weapons.flatMap( w => w.stats.map( s => s.handling ))),
    magSize: Math.max(...weapons.flatMap( w => w.stats.map( s => s.magSize ))),
    reloadtime: Math.min(...weapons.flatMap( w => w.stats.map( s => s.reloadtime ))),
}