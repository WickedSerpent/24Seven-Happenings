const model = {

    app: {
        page: 'home', // administratorside, arrangementsside, unikbrukerside
    },

    inputs: {
        newHappening: {
            name: '',
            },
        
        newUser: {
            name: '',
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
            points: '',
        },
  
        deleteUser: {
            userId: null,
            name: '',
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