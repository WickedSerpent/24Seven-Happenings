const model = {

    app: {
        page: 'admin', // administratorside, arrangementsside, unikbrukerside
    },

    inputs: {
        newHappening: {
            happeningId: '',
            name: '',
            points: '',
            },
        
        newUser: {
            name: '',
            lastName: '',
            points: null,
        },
        

        editHappening: {
            happeningId: null,
            name: ''
        },

        deleteHappening: {
            happeningId: null,
            areYouSure: false,
        },
        
        editUser: {
            userId: null,
            name: '',
            lastName: '',
            points: '',
        },

        
        deleteUser: {
            userId: null,
            name: '',
            lastName: '',
            points: '',
            areYouSure: false,
        },
    },

    data: {
        happenings: [
            {id: 1, name:'Kahoot'}, 
            {id: 2, name:'Vaske kjøkkenet'}, 
        ],

        users: [
            {id: 1, name:'Per', points: 12},
            {id: 2, name:'Pål', points: 12},
            {id: 3, name:'Espen', points: 12},
        ],
    },

}