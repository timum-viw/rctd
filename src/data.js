const data = [
    {
        name: 'Spitfire',
        type: 'pistol',
        stats: [
            {
                damage: [{range: 9, value: 16}, {range: 18, value: 13}, {range: Infinity, value: 9}],
                firerate: 10,
                handling: 29,
                magSize: 15,
                reloadtime: 1.6
            },
            {
                damage: [{range: 9, value: 16}, {range: 18, value: 13}, {range: Infinity, value: 9}],
                firerate: 10,
                handling: 29,
                magSize: 20,
                reloadtime: 1.6
            },
            {
                damage: [{range: 9, value: 16}, {range: 18, value: 13}, {range: Infinity, value: 9}],
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
                damage: [{range: 15, value: 25}, {range: 23.5, value: 16}, {range: Infinity, value: 13}],
                firerate: 5.26,
                handling: 41,
                magSize: 8,
                reloadtime: 1.4,
                other: ['suppressed']
            },
            {
                damage: [{range: 15, value: 25}, {range: 23.5, value: 16}, {range: Infinity, value: 13}],
                firerate: 5.26,
                handling: 48,
                magSize: 8,
                reloadtime: 1.4,
                other: ['suppressed', 'increased hipfire accuracy', 'reduced reticle bloom']
            },
            {
                damage: [{range: 15, value: 25}, {range: 23.5, value: 16}, {range: Infinity, value: 13}],
                firerate: 5.26,
                handling: 48,
                magSize: 14,
                reloadtime: 1.4,
                other: ['suppressed', 'increased hipfire accuracy', 'reduced reticle bloom']
            },
        ],
        rogues: ['Talon', 'Kestrel', 'Phantom']
    },
    {
        name: 'Executioner',
        type: 'pistol',
        stats: [
            {
                damage: [{range: 15, value: 32}, {range: 24, value: 24}, {range: Infinity, value: 20}],
                firerate: 4.44,
                handling: 28,
                magSize: 12,
                reloadtime: 2
            },
            {
                damage: [{range: 15, value: 32}, {range: 24, value: 24}, {range: Infinity, value: 20}],
                firerate: 4.44,
                handling: 28,
                magSize: 16,
                reloadtime: 2
            },
            {
                damage: [{range: 15, value: 32}, {range: 24, value: 24}, {range: Infinity, value: 20}],
                firerate: 4.44,
                handling: 34,
                magSize: 16,
                reloadtime: 2,
                other: ['increased hipfire accuracy']
            }
        ],
        rogues: ['Dima', 'Saint', 'Anvil', 'Dahlia', 'G|1tch', 'Trench', 'Vy']
    },
    {
        name: 'A3 Salvo',
        type: 'pistol',
        stats: [
            {
                damage: [{range: 13, value: 18}, {range: 22, value: 14}, {range: Infinity, value: 12}],
                firerate: 7.14,
                handling: 57,
                magSize: 18,
                reloadtime: 1.8
            },
            {
                damage: [{range: 13, value: 18}, {range: 22, value: 14}, {range: Infinity, value: 12}],
                firerate: 7.14,
                handling: 57,
                magSize: 24,
                reloadtime: 1.8
            },
            {
                damage: [{range: 13, value: 18}, {range: 22, value: 14}, {range: Infinity, value: 12}],
                firerate: 7.14,
                handling: 64,
                magSize: 24,
                reloadtime: 1.8,
                other: ['increased hipfire accuracy']
            },
        ],
        rogues: ['Scorch']
    },
    {
        name: 'Warrant',
        type: 'pistol',
        stats: [
            {
                damage: [{range: 12, value: 20}],
                firerate: 6.9,
                handling: 28,
                magSize: 15,
                reloadtime: 1.7
            },
            {
                damage: [{range: 12, value: 20}],
                firerate: 6.9,
                handling: 28,
                magSize: 15,
                reloadtime: 1.25
            },
            {
                damage: [{range: 12, value: 20}],
                firerate: 6.9,
                handling: 28,
                magSize: 15,
                reloadtime: 1.25,
                other: ['reduced reticle bloom']
            },
        ],
        rogues: ['Sigrid', 'The Fixer']
    },
    {
        name: 'LW6 Revolver',
        type: 'pistol',
        stats: [
            {
                damage: [{range: 16, value: 36}, {range: 25, value: 32}, {range: Infinity, value: 12}],
                firerate: 2.78,
                handling: 47,
                magSize: 6,
                reloadtime: 1.6
            },
            {
                damage: [{range: 22, value: 36}, {range: 31, value: 32}, {range: Infinity, value: 12}],
                firerate: 2.78,
                handling: 47,
                magSize: 6,
                reloadtime: 1.6
            },
            {
                damage: [{range: 22, value: 36}, {range: 31, value: 32}, {range: Infinity, value: 12}],
                firerate: 2.78,
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
                damage: [{range: 11.5, value: 12}, {range: 23, value: 10}, {range: Infinity, value: 8}],
                firerate: 15,
                handling: 22,
                magSize: 30,
                reloadtime: 1.4
            },
            {
                damage: [{range: 11.5, value: 12}, {range: 23, value: 10}, {range: Infinity, value: 8}],
                firerate: 15,
                handling: 22,
                magSize: 40,
                reloadtime: 1.4
            },
            {
                damage: [{range: 11.5, value: 12}, {range: 23, value: 10}, {range: Infinity, value: 8}],
                firerate: 15,
                handling: 22,
                magSize: 40,
                reloadtime: 1.4,
                other: ['increased hipfire accuracy']
            },
            {
                damage: [{range: 11.5, value: 12}, {range: 23, value: 10}, {range: Infinity, value: 8}],
                firerate: 15,
                handling: 26,
                magSize: 40,
                reloadtime: 1.4,
                other: ['increased hipfire accuracy', 'suppressed']
            },
        ],
        rogues: ['Ronin', 'Scorch']
    },
    {
        name: 'LMP-X',
        type: 'smg',
        stats: [
            {
                damage: [{range: 13, value: 16}, {range: 23, value: 13}, {range: Infinity, value: 10}],
                firerate: 10.87,
                handling: 35,
                magSize: 30,
                reloadtime: 1.35,
                other: ['silenced']
            },
            {
                damage: [{range: 13, value: 16}, {range: 23, value: 13}, {range: Infinity, value: 10}],
                firerate: 10.87,
                handling: 35,
                magSize: 40,
                reloadtime: 1.35,
                other: ['silenced']
            },
            {
                damage: [{range: 16, value: 16}, {range: 26, value: 13}, {range: Infinity, value: 10}],
                firerate: 10.87,
                handling: 41,
                magSize: 40,
                reloadtime: 1.35,
                other: ['silenced']
            },
            {
                damage: [{range: 16, value: 16}, {range: 26, value: 13}, {range: Infinity, value: 10}],
                firerate: 10.87,
                handling: 41,
                magSize: 40,
                reloadtime: 1.35,
                other: ['silenced', 'increased ads accuracy']
            },
        ],
        rogues: ['Talon', 'G|1tch']
    },
    {
        name: 'KA30',
        type: 'ar',
        stats: [
            {
                damage: [{range: 18, value: 19}, {range: 33, value: 16}, {range: Infinity, value: 13}],
                firerate: 8.2,
                handling: 37,
                magSize: 30,
                reloadtime: 2.3
            },
            {
                damage: [{range: 18, value: 19}, {range: 33, value: 16}, {range: Infinity, value: 13}],
                firerate: 8.2,
                handling: 37,
                magSize: 40,
                reloadtime: 2.3
            },
            {
                damage: [{range: 18, value: 19}, {range: 33, value: 16}, {range: Infinity, value: 13}],
                firerate: 8.2,
                handling: 43,
                magSize: 40,
                reloadtime: 2.3,
                other: ['increased hipfire accuracy']
            },
            {
                damage: [{range: 22, value: 19}, {range: 38, value: 16}, {range: Infinity, value: 13}],
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
                damage: [{range: 12.5, value: 15}, {range: 23, value: 12}, {range: Infinity, value: 9}],
                firerate: 11.36,
                handling: 24,
                magSize: 24,
                reloadtime: 1.35
            },
            {
                damage: [{range: 12.5, value: 15}, {range: 23, value: 12}, {range: Infinity, value: 9}],
                firerate: 11.36,
                handling: 24,
                magSize: 24,
                reloadtime: 1.35,
                other: ['increased hipfire accuracy']
            },
            {
                damage: [{range: 15.5, value: 15}, {range: 26, value: 12}, {range: Infinity, value: 9}],
                firerate: 11.36,
                handling: 24,
                magSize: 24,
                reloadtime: 1.35,
                other: ['increased hipfire accuracy']
            },
            {
                damage: [{range: 15.5, value: 15}, {range: 26, value: 12}, {range: Infinity, value: 9}],
                firerate: 11.36,
                handling: 24,
                magSize: 34,
                reloadtime: 1.35,
                other: ['increased hipfire accuracy']
            },
        ],
        rogues: ['Lancer']
    },
    {
        name: 'D40-C',
        type: 'smg',
        stats: [
            {
                damage: [{range: 12.5, value: 13}, {range: 22, value: 10}, {range: Infinity, value: 8}],
                firerate: 13.33,
                handling: 20,
                magSize: 40,
                reloadtime: 2
            },
            {
                damage: [{range: 12.5, value: 13}, {range: 22, value: 10}, {range: Infinity, value: 8}],
                firerate: 13.33,
                handling: 20,
                magSize: 40,
                reloadtime: 2,
                other: ['increased hipfire accuracy']
            },
            {
                damage: [{range: 15.5, value: 13}, {range: 25, value: 10}, {range: Infinity, value: 8}],
                firerate: 13.33,
                handling: 20,
                magSize: 40,
                reloadtime: 2,
                other: ['increased hipfire accuracy']
            },
            {
                damage: [{range: 15.5, value: 13}, {range: 25, value: 10}, {range: Infinity, value: 8}],
                firerate: 13.33,
                handling: 23,
                magSize: 40,
                reloadtime: 2,
                other: ['increased hipfire accuracy']
            },
        ],
        rogues: ['Chaac', 'Sigrid']
    },
    {
        name: 'Objection',
        type: 'smg',
        stats: [
            {
                damage: [{range: 10, value: 11}, {range: 20, value: 9}, {range: Infinity, value: 7}],
                firerate: 16.67,
                handling: 35,
                magSize: 30,
                reloadtime: 1.35
            },
            {
                damage: [{range: 10, value: 11}, {range: 20, value: 9}, {range: Infinity, value: 7}],
                firerate: 16.67,
                handling: 38,
                magSize: 30,
                reloadtime: 1.35
            },
            {
                damage: [{range: 10, value: 11}, {range: 20, value: 9}, {range: Infinity, value: 7}],
                firerate: 16.67,
                handling: 38,
                magSize: 30,
                reloadtime: 1.05
            },
            {
                damage: [{range: 13, value: 11}, {range: 24, value: 9}, {range: Infinity, value: 7}],
                firerate: 16.67,
                handling: 38,
                magSize: 30,
                reloadtime: 1.05,
                other: ['suppressed']
            },
        ],
        rogues: ['Dahlia']
    },
    {
        name: 'Knight',
        type: 'smg',
        stats: [
            {
                damage: [{range: 12, value: 22}],
                firerate: 8,
                handling: 33,
                magSize: 20,
                reloadtime: 1.6
            },
            {
                damage: [{range: 12, value: 22}],
                firerate: 8,
                handling: 33,
                magSize: 30,
                reloadtime: 1.6
            },
            {
                damage: [{range: 12, value: 22}],
                firerate: 8,
                handling: 36,
                magSize: 30,
                reloadtime: 1.6
            },
            {
                damage: [{range: 15, value: 22}],
                firerate: 8,
                handling: 36,
                magSize: 30,
                reloadtime: 1.6,
                other: ['suppressed']
            },
        ],
        rogues: ['Kestrel']
    },
    {
        name: 'SKL-6',
        type: 'shotgun',
        stats: [
            {
                damage: [{range: 7.5, value: 88}, {range: 16, value: 49}, {range: Infinity, value: 33}],
                firerate: 1.85,
                handling: 31,
                magSize: 5,
                reloadtime: 0.38*5
            },
            {
                damage: [{range: 7.5, value: 88}, {range: 16, value: 49}, {range: Infinity, value: 33}],
                firerate: 1.85,
                handling: 31,
                magSize: 8,
                reloadtime: .38*8
            },
            {
                damage: [{range: 9.5, value: 88}, {range: 18, value: 49}, {range: Infinity, value: 33}],
                firerate: 1.85,
                handling: 31,
                magSize: 8,
                reloadtime: .38*8
            },
            {
                damage: [{range: 9.5, value: 88}, {range: 18, value: 49}, {range: Infinity, value: 33}],
                firerate: 1.85,
                handling: 31,
                magSize: 8,
                reloadtime: .38*8,
                other: ['increased hipfire accuracy']
            },
        ],
        rogues: ['Chaac', 'G|1tch']
    },
    {
        name: 'Striker 8x10',
        type: 'shotgun',
        stats: [
            {
                damage: [{range: 6, value: 60}],
                firerate: 3.57,
                handling: 23,
                magSize: 8,
                reloadtime: 2.47
            },
            {
                damage: [{range: 8, value: 60}],
                firerate: 3.57,
                handling: 23,
                magSize: 8,
                reloadtime: 2.47
            },
            {
                damage: [{range: 8, value: 60}],
                firerate: 3.57,
                handling: 23,
                magSize: 8,
                reloadtime: 2.47,
                other: ['increased hipfire accuracy']
            },
            {
                damage: [{range: 8, value: 60}],
                firerate: 3.57,
                handling: 23,
                magSize: 12,
                reloadtime: 2.47,
                other: ['increased hipfire accuracy']
            },
        ],
        rogues: ['Lancer']
    },
    {
        name: 'S12 Tactical',
        type: 'shotgun',
        stats: [
            {
                damage: [{range: 8, value: 64}],
                firerate: 2.67,
                handling: 36,
                magSize: 6,
                reloadtime: 2.28
            },
            {
                damage: [{range: 8, value: 64}],
                firerate: 2.67,
                handling: 36,
                magSize: 10,
                reloadtime: .38*10
            },
            {
                damage: [{range: 8, value: 64}],
                firerate: 2.67,
                handling: 36,
                magSize: 10,
                reloadtime: .38*10,
                other: ['increased hipfire accuracy']
            },
            {
                damage: [{range: 10, value: 64}],
                firerate: 2.67,
                handling: 36,
                magSize: 10,
                reloadtime: .38*10,
                other: ['increased hipfire accuracy']
            },
        ],
        rogues: ['Sigrid', 'Vy']
    },
    {
        name: 'Arbitrator',
        type: 'shotgun',
        stats: [
            {
                damage: [{range: 6.5, value: 104}, {range: 15, value: 59}, {range: Infinity, value: 40}],
                firerate: 2.5,
                handling: 20,
                magSize: 2,
                reloadtime: 2.4
            },
            {
                damage: [{range: 6.5, value: 104}, {range: 15, value: 59}, {range: Infinity, value: 40}],
                firerate: 2.5,
                handling: 20,
                magSize: 2,
                reloadtime: 1.8
            },
            {
                damage: [{range: 6.5, value: 104}, {range: 15, value: 59}, {range: Infinity, value: 40}],
                firerate: 2.5,
                handling: 20,
                magSize: 2,
                reloadtime: 1.8,
                other: ['increased hipfire accuracy', 'reduced reticle bloom']
            },
            {
                damage: [{range: 8.5, value: 104}, {range: 17, value: 59}, {range: Infinity, value: 40}],
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
                damage: [{range: 29, value: 15}, {range: 40, value: 14}, {range: Infinity, value: 12}],
                firerate: 8.9,
                handling: 49,
                magSize: 30,
                reloadtime: 2
            },
            {
                damage: [{range: 29, value: 15}, {range: 40, value: 14}, {range: Infinity, value: 12}],
                firerate: 8.9,
                handling: 49,
                magSize: 42,
                reloadtime: 2
            },
            {
                damage: [{range: 29, value: 15}, {range: 40, value: 14}, {range: Infinity, value: 12}],
                firerate: 8.9,
                handling: 56,
                magSize: 42,
                reloadtime: 2,
                other: ['increased accuracy']
            },
            {
                damage: [{range: 35, value: 15}, {range: 45, value: 14}, {range: Infinity, value: 12}],
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
                damage: [{range: 26, value: 19}, {range: 41, value: 16}, {range: Infinity, value: 14}],
                firerate: 7.52,
                handling: 55,
                magSize: 30,
                reloadtime: 2.3
            },
            {
                damage: [{range: 26, value: 19}, {range: 41, value: 16}, {range: Infinity, value: 14}],
                firerate: 7.52,
                handling: 55,
                magSize: 40,
                reloadtime: 2.3
            },
            {
                damage: [{range: 26, value: 19}, {range: 41, value: 16}, {range: Infinity, value: 14}],
                firerate: 7.52,
                handling: 67,
                magSize: 40,
                reloadtime: 2.3
            },
            {
                damage: [{range: 30, value: 19}, {range: 45.5, value: 16}, {range: Infinity, value: 14}],
                firerate: 7.52,
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
                damage: [{range: 23, value: 24}, {range: 38, value: 21}, {range: Infinity, value: 18}],
                firerate: 6.06,
                handling: 30,
                magSize: 20,
                reloadtime: 1.9
            },
            {
                damage: [{range: 27, value: 24}, {range: 42, value: 21}, {range: Infinity, value: 18}],
                firerate: 6.06,
                handling: 30,
                magSize: 20,
                reloadtime: 1.9
            },
            {
                damage: [{range: 27, value: 24}, {range: 42, value: 21}, {range: Infinity, value: 18}],
                firerate: 6.06,
                handling: 30,
                magSize: 20,
                reloadtime: 1.9,
                other: ['increased hipfire accuracy']
            },
            {
                damage: [{range: 27, value: 24}, {range: 42, value: 21}, {range: Infinity, value: 18}],
                firerate: 6.06,
                handling: 42,
                magSize: 20,
                reloadtime: 1.9,
                other: ['increased hipfire accuracy', 'suppressed']
            },
        ],
        rogues: ['Dallas', 'Trench']
    },
    {
        name: 'Riptide',
        type: 'ar',
        stats: [
            {
                damage: [{range: 24, value: 16}],
                firerate: 9.17,
                handling: 32,
                magSize: 30,
                reloadtime: 2
            },
            {
                damage: [{range: 24, value: 16}],
                firerate: 9.17,
                handling: 32,
                magSize: 40,
                reloadtime: 2
            },
            {
                damage: [{range: 27, value: 16}],
                firerate: 9.17,
                handling: 32,
                magSize: 40,
                reloadtime: 2,
                other: ['suppressed']
            },
            {
                damage: [{range: 27, value: 16}],
                firerate: 9.17,
                handling: 35,
                magSize: 40,
                reloadtime: 2,
                other: ['suppressed']
            },
        ],
        rogues: ['Kestrel']
    },
    {
        name: 'Nightshade',
        type: 'ar',
        stats: [
            {
                damage: [{range: 15, value: 17}],
                firerate: 9.9,
                handling: 46,
                magSize: 25,
                reloadtime: 2.3,
                other: ['suppressed']
            },
            {
                damage: [{range: 15, value: 17}],
                firerate: 9.9,
                handling: 46,
                magSize: 35,
                reloadtime: 2.3,
                other: ['suppressed']
            },
            {
                damage: [{range: 15, value: 17}],
                firerate: 9.9,
                handling: 46,
                magSize: 35,
                reloadtime: 2.3,
                other: ['suppressed', 'increased hipfire accuracy', 'reduced reticle bloom']
            },
            {
                damage: [{range: 18, value: 17}],
                firerate: 9.9,
                handling: 46,
                magSize: 35,
                reloadtime: 2.3,
                other: ['suppressed', 'increased hipfire accuracy', 'reduced reticle bloom']
            },
        ],
        rogues: ['Phantom', 'Vy']
    },
    {
        name: 'D3D-i',
        type: 'dmr',
        stats: [
            {
                damage: [{range: 34, value: 38}, {range: 44, value: 34}, {range: Infinity, value: 30}],
                firerate: 3.23,
                handling: 41,
                magSize: 12,
                reloadtime: 1.8
            },
            {
                damage: [{range: 34, value: 38}, {range: 44, value: 34}, {range: Infinity, value: 30}],
                firerate: 3.23,
                handling: 41,
                magSize: 16,
                reloadtime: 1.8
            },
            {
                damage: [{range: 34, value: 38}, {range: 44, value: 34}, {range: Infinity, value: 30}],
                firerate: 3.23,
                handling: 41,
                magSize: 16,
                reloadtime: 1.8,
                other: ['increased hipfire accuracy', 'reduced reticle bloom']
            },
            {
                damage: [{range: 34, value: 38}, {range: 44, value: 34}, {range: Infinity, value: 30}],
                firerate: 3.23,
                handling: 50,
                magSize: 16,
                reloadtime: 1.8,
                other: ['increased hipfire accuracy', 'reduced reticle bloom', 'suppressed']
            },
        ],
        rogues: ['Talon', 'The Fixer']
    },
    {
        name: 'Devotion',
        type: 'dmr',
        stats: [
            {
                damage: [{range: 37, value: 47}, {range: 47, value: 40}, {range: Infinity, value: 36}],
                firerate: 2.22,
                handling: 47,
                magSize: 6,
                reloadtime: .5*6+.5
            },
            {
                damage: [{range: 37, value: 47}, {range: 47, value: 40}, {range: Infinity, value: 36}],
                firerate: 2.22,
                handling: 47,
                magSize: 6,
                reloadtime: .5*6+.5,
                other: ['increased bullet penetration']
            },
            {
                damage: [{range: 37, value: 47}, {range: 47, value: 40}, {range: Infinity, value: 36}],
                firerate: 2.22,
                handling: 47,
                magSize: 8,
                reloadtime: .45*8+.5,
                other: ['increased bullet penetration']
            },
            {
                damage: [{range: Infinity, value: 47}],
                firerate: 2.22,
                handling: 47,
                magSize: 8,
                reloadtime: .45*8+.5,
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
                damage: [{range: 27, value: 30}, {range: 37, value: 23}, {range: Infinity, value: 21}],
                firerate: 4.65,
                handling: 36,
                magSize: 12,
                reloadtime: 2
            },
            {
                damage: [{range: 27, value: 30}, {range: 37, value: 23}, {range: Infinity, value: 21}],
                firerate: 4.65,
                handling: 36,
                magSize: 18,
                reloadtime: 2
            },
            {
                damage: [{range: 32.5, value: 30}, {range: 45, value: 23}, {range: Infinity, value: 21}],
                firerate: 4.65,
                handling: 36,
                magSize: 18,
                reloadtime: 2
            },
            {
                damage: [{range: 32.5, value: 30}, {range: 45, value: 23}, {range: Infinity, value: 21}],
                firerate: 4.65,
                handling: 44,
                magSize: 18,
                reloadtime: 2,
                other: ['suppressed']
            },
        ],
        rogues: ['Dahlia', 'Trench']
    },
    {
        name: 'MLX Maw',
        type: 'lmg',
        stats: [
            {
                damage: [{range: 18, value: 16}, {range: 33, value: 13}, {range: Infinity, value: 11}],
                firerate: 11,
                handling: 26,
                magSize: 60,
                reloadtime: 4
            },
            {
                damage: [{range: 18, value: 16}, {range: 33, value: 13}, {range: Infinity, value: 11}],
                firerate: 11,
                handling: 26,
                magSize: 90,
                reloadtime: 4,
                other: ['increased movmentspeed while aiming']
            },
            {
                damage: [{range: 21, value: 16}, {range: 36, value: 13}, {range: Infinity, value: 11}],
                firerate: 11,
                handling: 26,
                magSize: 90,
                reloadtime: 4
            },
            {
                damage: [{range: 21, value: 16}, {range: 36, value: 13}, {range: Infinity, value: 11}],
                firerate: 11,
                handling: 31,
                magSize: 90,
                reloadtime: 4,
                other: ['reduced reticle bloom']
            },
        ],
        rogues: ['Anvil']
    },
    {
        name: 'LR15 Fullbody',
        type: 'sniper',
        stats: [
            {
                damage: [{range: 70, value: 70}],
                firerate: 1,
                handling: 56,
                magSize: 4,
                reloadtime: .5*4
            },
            {
                damage: [{range: 70, value: 70}],
                firerate: 1,
                handling: 56,
                magSize: 6,
                reloadtime: .5*4
            },
            {
                damage: [{range: 70, value: 70}],
                firerate: 1,
                handling: 66,
                magSize: 6,
                reloadtime: .5*4,
                other: ['increased ads speed']
            },
            {
                damage: [{range: Infinity, value: 70}],
                firerate: 1,
                handling: 66,
                magSize: 6,
                reloadtime: .5*4,
                other: ['increased ads speed']
            },
        ],
        rogues: ['Phantom']
    },
    {
        name: 'Tyr',
        type: 'sniper',
        stats: [
            {
                damage: [{range: 60, value: 40}],
                firerate: 3,
                handling: 20,
                magSize: 2,
                reloadtime: 2.4,
            },
            {
                damage: [{range: 60, value: 40}],
                firerate: 3,
                handling: 20,
                magSize: 2,
                reloadtime: 2.4,
                other: ['increased ads speed', 'increased movement speed while aiming']
            },
            {
                damage: [{range: 60, value: 40}],
                firerate: 3,
                handling: 23,
                magSize: 2,
                reloadtime: 2.4,
                other: ['increased ads speed', 'increased movement speed while aiming']
            },
            {
                damage: [{range: Infinity, value: 40}],
                firerate: 3,
                handling: 23,
                magSize: 2,
                reloadtime: 1.5,
                other: ['increased ads speed', 'increased movement speed while aiming']
            },
        ],
        rogues: ['The Fixer']
    },
]

export default data.map( w => ({ ...w, tier: 0 }))
export const maxValues = { 
    damage: Math.max(...data.flatMap( w => w.stats.flatMap( s => s.damage.map( d => d.value )))),
    range: Math.max(...data.flatMap( w => w.stats.flatMap( s => s.damage.map( d => d.range ))).filter( r => r !== Infinity )),
    firerate: Math.max(...data.flatMap( w => w.stats.map( s => s.firerate ))),
    handling: Math.max(...data.flatMap( w => w.stats.map( s => s.handling ))),
    magSize: Math.max(...data.flatMap( w => w.stats.map( s => s.magSize ))),
    reloadtime: Math.min(...data.flatMap( w => w.stats.map( s => s.reloadtime ))),
}