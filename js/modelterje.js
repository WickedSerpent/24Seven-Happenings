const modelUsers = {

    app: {
        page: 'home', // administratorside, arrangementsside, unikbrukerside
    },

    inputs: {
        newUser: {
            name: '',
            points: '',
            isSelected: false,
        },
        editUser: {
            userId: null,
            name: '',
            points: '',
        },
        deleteUser: {
            userId: null,
            name: '',
            points: '',
            areYouSure: false,
        },
        newHappening: {
            name: '',
            points: '',
        },

        editHappening: {
            happeningId: null,
            name: '',
        },

        deleteHappening: {
            happeningId: null,
            areYouSure: false,
        },

        happening: {
            selected: [1, 3, 4, 5, 6, 7],
        },
    },

    data: {

        selectAll: false,
        users: [
            { id: 1, name: 'Anders', points: 7, isSelected: false, },
            { id: 2, name: 'Ingrid', points: 2, isSelected: false, },
            { id: 3, name: 'Roger', points: 2, isSelected: false, },
            { id: 4, name: 'Anja', points: 2, isSelected: false, },
            { id: 5, name: 'Espen', points: 2, isSelected: false, },
            { id: 6, name: 'Pål', points: 2, isSelected: false, },
            { id: 7, name: 'Nina', points: 2, isSelected: false, },
        ],

        happenings: [
            {
                id: 1,
                name: 'Kahoot',
            },
            {
                id: 2,
                name: 'Vaske kjøkkenet',
            },
        ],

        doneHappenings: [
            {
                host: 1, 
                happeningId: 1,
                winners: [2],
                time: '2022-01-01 15:10',
                participants: [1, 2, 3 ],
            },
        ]
    },

}