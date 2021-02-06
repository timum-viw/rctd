const data = [
    {
        name: 'Spitfire',
        type: 'pistol',
        stats: [
            {
                damage: [{range: 0, value: 16}, {range: 9, value: 13}, {range:18, value: 9}],
                firerate: 10,
                handling: 29,
                magSize: 15,
                reloadtime: 1.6
            },
            {
                damage: [{range: 0, value: 16}, {range: 9, value: 13}, {range:18, value: 9}],
                firerate: 10,
                handling: 29,
                magSize: 20,
                reloadtime: 1.6
            },
            {
                damage: [{range: 0, value: 16}, {range: 9, value: 13}, {range:18, value: 9}],
                firerate: 10,
                handling: 35,
                magSize: 20,
                reloadtime: 1.6,
                other: ['suppressed', 'reduced reticle bloom']
            }
        ],
        rogues: ['Ronin', 'Lancer', 'Chaac']
    },
    {
        name: 'P12K',
        type: 'pistol',
        stats: [
            {
                damage: [{range: 0, value: 25}, {range: 15, value: 16}, {range:23.5, value: 13}],
                firerate: 5.3,
                handling: 41,
                magSize: 8,
                reloadtime: 1.4
            },
            {
                damage: [{range: 0, value: 25}, {range: 15, value: 16}, {range:23.5, value: 13}],
                firerate: 5.3,
                handling: 48,
                magSize: 8,
                reloadtime: 1.4,
                other: ['increased hipfire accuracy', 'reduced reticle bloom']
            },
            {
                damage: [{range: 0, value: 25}, {range: 15, value: 16}, {range:23.5, value: 13}],
                firerate: 5.3,
                handling: 48,
                magSize: 14,
                reloadtime: 1.4,
                other: ['increased hipfire accuracy', 'reduced reticle bloom']
            },
        ],
        rogues: ['Talon']
    },
    {
        name: 'Executioner',
        type: 'pistol',
        stats: [
            {
                damage: [{range: 0, value: 32}, {range: 15, value: 24}, {range:24, value: 20}],
                firerate: 4.4,
                handling: 28,
                magSize: 12,
                reloadtime: 2
            },
            {
                damage: [{range: 0, value: 32}, {range: 15, value: 24}, {range:24, value: 20}],
                firerate: 4.4,
                handling: 28,
                magSize: 16,
                reloadtime: 2
            },
            {
                damage: [{range: 0, value: 32}, {range: 15, value: 24}, {range:24, value: 20}],
                firerate: 4.4,
                handling: 34,
                magSize: 16,
                reloadtime: 2,
                other: ['increased hipfire accuracy']
            }
        ],
        rogues: ['Dima', 'Saint', 'Anvil', 'Dahlia']
    },
    {
        name: 'A3 Salvo',
        type: 'pistol',
        stats: [
            {
                damage: [{range: 0, value: 18}, {range: 13, value: 14}, {range:22, value: 12}],
                firerate: 7.1,
                handling: 57,
                magSize: 18,
                reloadtime: 1.8
            },
            {
                damage: [{range: 0, value: 18}, {range: 13, value: 14}, {range:22, value: 12}],
                firerate: 7.1,
                handling: 57,
                magSize: 24,
                reloadtime: 1.8
            },
            {
                damage: [{range: 0, value: 18}, {range: 13, value: 14}, {range:22, value: 12}],
                firerate: 7.1,
                handling: 64,
                magSize: 24,
                reloadtime: 1.8,
                other: ['increased hipfire accuracy']
            },
        ],
        rogues: ['Scorch']
    },
    {
        name: 'LW6 Revolver',
        type: 'pistol',
        stats: [
            {
                damage: [{range: 0, value: 36}, {range: 16, value: 32}, {range:25, value: 12}],
                firerate: 2.8,
                handling: 47,
                magSize: 6,
                reloadtime: 1.6
            },
            {
                damage: [{range: 0, value: 36}, {range: 22, value: 32}, {range:31, value: 12}],
                firerate: 2.8,
                handling: 47,
                magSize: 6,
                reloadtime: 1.6
            },
            {
                damage: [{range: 0, value: 36}, {range: 22, value: 32}, {range:31, value: 12}],
                firerate: 2.8,
                handling: 59,
                magSize: 6,
                reloadtime: 1.6,
                other: ['increased hipfire accuracy']
            },
        ],
        rogues: ['Dallas']
    },
    {
        name: 'SL-C',
        type: 'smg',
        stats: [
            {
                damage: [{range: 0, value: 12}, {range: 11.5, value: 10}, {range:23, value: 8}],
                firerate: 15,
                handling: 21,
                magSize: 30,
                reloadtime: 1.4
            },
            {
                damage: [{range: 0, value: 12}, {range: 11.5, value: 10}, {range:23, value: 8}],
                firerate: 15,
                handling: 21,
                magSize: 40,
                reloadtime: 1.4
            },
            {
                damage: [{range: 0, value: 12}, {range: 11.5, value: 10}, {range:23, value: 8}],
                firerate: 15,
                handling: 21,
                magSize: 40,
                reloadtime: 1.4,
                other: ['increased hipfire accuracy']
            },
            {
                damage: [{range: 0, value: 12}, {range: 11.5, value: 10}, {range:23, value: 8}],
                firerate: 15,
                handling: 25,
                magSize: 40,
                reloadtime: 1.4,
                other: ['increased hipfire accuracy', 'suppressed']
            },
        ],
        rogues: ['Ronin', 'Chaac', 'Scorch']
    },
    {
        name: 'LMP-X',
        type: 'smg',
        stats: [
            {
                damage: [{range: 0, value: 16}, {range: 13, value: 13}, {range:23, value: 10}],
                firerate: 10.9,
                handling: 35,
                magSize: 30,
                reloadtime: 1.4
            },
            {
                damage: [{range: 0, value: 16}, {range: 13, value: 13}, {range:23, value: 10}],
                firerate: 10.9,
                handling: 35,
                magSize: 40,
                reloadtime: 1.4
            },
            {
                damage: [{range: 0, value: 16}, {range: 16, value: 13}, {range:26, value: 10}],
                firerate: 10.9,
                handling: 41,
                magSize: 40,
                reloadtime: 1.4
            },
            {
                damage: [{range: 0, value: 16}, {range: 16, value: 13}, {range:26, value: 10}],
                firerate: 10.9,
                handling: 41,
                magSize: 40,
                reloadtime: 1.4,
                other: ['increased ads accuracy']
            },
        ],
        rogues: ['Talon']
    },
    {
        name: 'KA30',
        type: 'ar',
        stats: [
            {
                damage: [{range: 0, value: 19}, {range: 18, value: 15}, {range: 33, value: 13}],
                firerate: 8.2,
                handling: 37,
                magSize: 30,
                reloadtime: 2.3
            },
            {
                damage: [{range: 0, value: 19}, {range: 18, value: 16}, {range: 33, value: 13}],
                firerate: 8.2,
                handling: 37,
                magSize: 40,
                reloadtime: 2.3
            },
            {
                damage: [{range: 0, value: 19}, {range: 18, value: 16}, {range: 33, value: 13}],
                firerate: 8.2,
                handling: 43,
                magSize: 40,
                reloadtime: 2.3
            },
            {
                damage: [{range: 0, value: 19}, {range: 22, value: 16}, {range: 37, value: 13}],
                firerate: 8.2,
                handling: 43,
                magSize: 40,
                reloadtime: 2.3
            },
        ],
        rogues: ['Ronin', 'Dima']
    },
    {
        name: '24S',
        type: 'smg',
        image: 'https://static.wikia.nocookie.net/roguecompany/images/7/70/Render_24S.png',
        stats: [
            {
                damage: [{range: 0, value: 15}, {range: 12.5, value: 12}, {range: 23, value: 9}],
                firerate: 11.4,
                handling: 24,
                magSize: 24,
                reloadtime: 1.4
            },
            {
                damage: [{range: 0, value: 15}, {range: 12.5, value: 12}, {range: 23, value: 9}],
                firerate: 11.4,
                handling: 24,
                magSize: 24,
                reloadtime: 1.4,
                other: ['increased hipfire accuracy']
            },
            {
                damage: [{range: 0, value: 15}, {range: 15.5, value: 12}, {range: 26, value: 9}],
                firerate: 11.4,
                handling: 24,
                magSize: 24,
                reloadtime: 1.4,
                other: ['increased hipfire accuracy']
            },
            {
                damage: [{range: 0, value: 15}, {range: 15.5, value: 12}, {range: 26, value: 9}],
                firerate: 11.4,
                handling: 24,
                magSize: 34,
                reloadtime: 1.4,
                other: ['increased hipfire accuracy']
            },
        ],
        rogues: ['Ronin']
    },
    {
        name: 'D40-C',
        type: 'smg',
        stats: [
            {
                damage: [{range: 0, value: 13}, {range: 12.5, value: 10}, {range: 22, value: 8}],
                firerate: 13.3,
                handling: 20,
                magSize: 40,
                reloadtime: 2
            },
            {
                damage: [{range: 0, value: 13}, {range: 12.5, value: 10}, {range: 22, value: 8}],
                firerate: 13.3,
                handling: 20,
                magSize: 40,
                reloadtime: 2,
                other: ['increased hipfire accuracy']
            },
            {
                damage: [{range: 0, value: 13}, {range: 15.5, value: 10}, {range: 25, value: 8}],
                firerate: 13.3,
                handling: 20,
                magSize: 40,
                reloadtime: 2,
                other: ['increased hipfire accuracy']
            },
            {
                damage: [{range: 0, value: 13}, {range: 15.5, value: 10}, {range: 25, value: 8}],
                firerate: 13.3,
                handling: 23,
                magSize: 40,
                reloadtime: 2,
                other: ['increased hipfire accuracy']
            },
        ],
        rogues: ['Chaac']
    },
    {
        name: 'Objection',
        type: 'smg',
        stats: [
            {
                damage: [{range: 0, value: 11}, {range: 10, value: 9}, {range: 20, value: 7}],
                firerate: 16.7,
                handling: 35,
                magSize: 30,
                reloadtime: 1.4
            },
            {
                damage: [{range: 0, value: 11}, {range: 10, value: 9}, {range: 20, value: 7}],
                firerate: 16.7,
                handling: 38,
                magSize: 30,
                reloadtime: 1.4
            },
            {
                damage: [{range: 0, value: 11}, {range: 10, value: 9}, {range: 20, value: 7}],
                firerate: 16.7,
                handling: 38,
                magSize: 30,
                reloadtime: 1
            },
            {
                damage: [{range: 0, value: 11}, {range: 13, value: 9}, {range: 24, value: 7}],
                firerate: 16.7,
                handling: 38,
                magSize: 30,
                reloadtime: 1,
                other: ['suppressed']
            },
        ],
        rogues: ['Dahlia']
    },
    {
        name: 'SKL-6',
        type: 'shotgun',
        stats: [
            {
                damage: [{range: 0, value: 88}, {range: 7.5, value: 49}, {range: 16, value: 33}],
                firerate: 1.9,
                handling: 39,
                magSize: 5,
                reloadtime: 2
            },
            {
                damage: [{range: 0, value: 88}, {range: 7.5, value: 49}, {range: 16, value: 33}],
                firerate: 1.9,
                handling: 39,
                magSize: 8,
                reloadtime: 3.2
            },
            {
                damage: [{range: 0, value: 88}, {range: 9.5, value: 49}, {range: 18, value: 33}],
                firerate: 1.9,
                handling: 39,
                magSize: 8,
                reloadtime: 3.2
            },
            {
                damage: [{range: 0, value: 88}, {range: 9.5, value: 49}, {range: 18, value: 33}],
                firerate: 1.9,
                handling: 39,
                magSize: 8,
                reloadtime: 3.2,
                other: ['increased hipfire accuracy']
            },
        ],
        rogues: ['Chaac']
    },
    {
        name: 'Arbitrator',
        type: 'shotgun',
        stats: [
            {
                damage: [{range: 0, value: 104}, {range: 6.5, value: 59}, {range: 15, value: 40}],
                firerate: 2.5,
                handling: 20,
                magSize: 2,
                reloadtime: 2.4
            },
            {
                damage: [{range: 0, value: 104}, {range: 6.5, value: 59}, {range: 15, value: 40}],
                firerate: 2.5,
                handling: 20,
                magSize: 2,
                reloadtime: 1.8
            },
            {
                damage: [{range: 0, value: 104}, {range: 6.5, value: 59}, {range: 15, value: 40}],
                firerate: 2.5,
                handling: 20,
                magSize: 2,
                reloadtime: 1.8,
                other: ['increased hipfire accuracy', 'reduced reticle bloom']
            },
            {
                damage: [{range: 0, value: 104}, {range: 8.5, value: 59}, {range: 17, value: 40}],
                firerate: 2.5,
                handling: 20,
                magSize: 2,
                reloadtime: 1.8,
                other: ['increased hipfire accuracy', 'reduced reticle bloom']
            },
        ],
        rogues: ['Scorch', 'Anvil']
    },
    {
        name: 'Mamba',
        type: 'dmr',
        stats: [
            {
                damage: [{range: 0, value: 15}, {range: 29, value: 14}, {range: 40, value: 12}],
                firerate: 8.9,
                handling: 49,
                magSize: 30,
                reloadtime: 2
            },
            {
                damage: [{range: 0, value: 15}, {range: 29, value: 14}, {range: 40, value: 12}],
                firerate: 8.9,
                handling: 49,
                magSize: 42,
                reloadtime: 2
            },
            {
                damage: [{range: 0, value: 15}, {range: 29, value: 14}, {range: 40, value: 12}],
                firerate: 8.9,
                handling: 56,
                magSize: 42,
                reloadtime: 2,
                other: ['increased accuracy']
            },
            {
                damage: [{range: 0, value: 15}, {range: 35, value: 14}, {range: 45, value: 12}],
                firerate: 8.9,
                handling: 56,   
                magSize: 42,
                reloadtime: 2,
                other: ['increased accuracy']
            },
        ],
        rogues: ['Dima', 'Saint']
    },
    {
        name: 'MLX Mark 4',
        type: 'ar',
        stats: [
            {
                damage: [{range: 0, value: 19}, {range: 26, value: 16}, {range: 41, value: 14}],
                firerate: 7.5,
                handling: 55,
                magSize: 30,
                reloadtime: 2.3
            },
            {
                damage: [{range: 0, value: 19}, {range: 26, value: 16}, {range: 41, value: 14}],
                firerate: 7.5,
                handling: 55,
                magSize: 40,
                reloadtime: 2.3
            },
            {
                damage: [{range: 0, value: 19}, {range: 26, value: 16}, {range: 41, value: 14}],
                firerate: 7.5,
                handling: 67,
                magSize: 40,
                reloadtime: 2.3
            },
            {
                damage: [{range: 0, value: 19}, {range: 30, value: 16}, {range: 45.5, value: 14}],
                firerate: 7.5,
                handling: 67,
                magSize: 40,
                reloadtime: 2.3,
                other: ['suppressed']
            },
        ],
        rogues: ['Saint']
    },
    {
        name: 'HRM-30KS',
        type: 'ar',
        stats: [
            {
                damage: [{range: 0, value: 24}, {range: 23, value: 21}, {range: 38, value: 18}],
                firerate: 6.1,
                handling: 30,
                magSize: 20,
                reloadtime: 1.9
            },
            {
                damage: [{range: 0, value: 24}, {range: 27, value: 21}, {range: 42, value: 18}],
                firerate: 6.1,
                handling: 30,
                magSize: 20,
                reloadtime: 1.9
            },
            {
                damage: [{range: 0, value: 24}, {range: 27, value: 21}, {range: 42, value: 18}],
                firerate: 6.1,
                handling: 30,
                magSize: 20,
                reloadtime: 1.9,
                other: ['increased hipfire accuracy']
            },
            {
                damage: [{range: 0, value: 24}, {range: 27, value: 21}, {range: 42, value: 18}],
                firerate: 6.1,
                handling: 42,
                magSize: 20,
                reloadtime: 1.9,
                other: ['increased hipfire accuracy', 'suppressed']
            },
        ],
        rogues: ['Dallas']
    },
    {
        name: 'D3D-i',
        type: 'dmr',
        stats: [
            {
                damage: [{range: 0, value: 38}, {range: 34, value: 34}, {range: 44, value: 30}],
                firerate: 3.2,
                handling: 41,
                magSize: 12,
                reloadtime: 1.8
            },
            {
                damage: [{range: 0, value: 38}, {range: 34, value: 34}, {range: 44, value: 30}],
                firerate: 3.2,
                handling: 41,
                magSize: 16,
                reloadtime: 1.8
            },
            {
                damage: [{range: 0, value: 38}, {range: 34, value: 34}, {range: 44, value: 30}],
                firerate: 3.2,
                handling: 41,
                magSize: 16,
                reloadtime: 1.8,
                other: ['increased hipfire accuracy', 'reduced reticle bloom']
            },
            {
                damage: [{range: 0, value: 38}, {range: 34, value: 34}, {range: 44, value: 30}],
                firerate: 3.2,
                handling: 50,
                magSize: 16,
                reloadtime: 1.8,
                other: ['increased hipfire accuracy', 'reduced reticle bloom', 'suppressed']
            },
        ],
        rogues: ['Talon']
    },
    {
        name: 'Devotion',
        type: 'dmr',
        stats: [
            {
                damage: [{range: 0, value: 47}, {range: 37, value: 40}, {range: 47, value: 36}],
                firerate: 2.2,
                handling: 47,
                magSize: 6,
                reloadtime: 3.5
            },
            {
                damage: [{range: 0, value: 47}, {range: 37, value: 40}, {range: 47, value: 36}],
                firerate: 2.2,
                handling: 47,
                magSize: 6,
                reloadtime: 3.5,
                other: ['increased bullet penetration']
            },
            {
                damage: [{range: 0, value: 47}, {range: 37, value: 40}, {range: 47, value: 36}],
                firerate: 2.2,
                handling: 47,
                magSize: 8,
                reloadtime: 4,
                other: ['increased bullet penetration']
            },
            {
                damage: [{range: 0, value: 47}],
                firerate: 2.2,
                handling: 47,
                magSize: 8,
                reloadtime: 4,
                other: ['increased bullet penetration']
            },
        ],
        rogues: ['Dallas']
    },
    {
        name: 'MX-R',
        type: 'dmr',
        stats: [
            {
                damage: [{range: 0, value: 30}, {range: 27, value: 23}, {range: 37, value: 21}],
                firerate: 4.7,
                handling: 36,
                magSize: 12,
                reloadtime: 2
            },
            {
                damage: [{range: 0, value: 30}, {range: 27, value: 23}, {range: 37, value: 21}],
                firerate: 4.7,
                handling: 36,
                magSize: 18,
                reloadtime: 2
            },
            {
                damage: [{range: 0, value: 30}, {range: 32.5, value: 23}, {range: 45, value: 21}],
                firerate: 4.7,
                handling: 36,
                magSize: 18,
                reloadtime: 2
            },
            {
                damage: [{range: 0, value: 30}, {range: 32.5, value: 23}, {range: 45, value: 21}],
                firerate: 4.7,
                handling: 44,
                magSize: 18,
                reloadtime: 2,
                other: ['suppressed']
            },
        ],
        rogues: ['Dahlia']
    },
    {
        name: 'MLX Maw',
        type: 'lmg',
        stats: [
            {
                damage: [{range: 0, value: 16}, {range: 18, value: 13}, {range: 33, value: 11}],
                firerate: 11,
                handling: 26,
                magSize: 60,
                reloadtime: 4
            },
            {
                damage: [{range: 0, value: 16}, {range: 18, value: 13}, {range: 33, value: 11}],
                firerate: 11,
                handling: 26,
                magSize: 90,
                reloadtime: 4
            },
            {
                damage: [{range: 0, value: 16}, {range: 21, value: 13}, {range: 36, value: 11}],
                firerate: 11,
                handling: 26,
                magSize: 90,
                reloadtime: 4
            },
            {
                damage: [{range: 0, value: 16}, {range: 21, value: 13}, {range: 36, value: 11}],
                firerate: 11,
                handling: 31,
                magSize: 90,
                reloadtime: 4,
                other: ['reduced reticle bloom']
            },
        ],
        rogues: ['Anvil']
    },
]

export default data.map( w => ({ ...w, tier: 0 }))
export const maxValues = { 
    damage: Math.max(...data.flatMap( w => w.stats.flatMap( s => s.damage.map( d => d.value )))),
    range: Math.max(...data.flatMap( w => w.stats.flatMap( s => s.damage[1] ? s.damage[1].range : 0))),
    firerate: Math.max(...data.flatMap( w => w.stats.map( s => s.firerate ))),
    handling: Math.max(...data.flatMap( w => w.stats.map( s => s.handling ))),
    magSize: Math.max(...data.flatMap( w => w.stats.map( s => s.magSize ))),
    reloadtime: Math.min(...data.flatMap( w => w.stats.map( s => s.reloadtime ))),
}