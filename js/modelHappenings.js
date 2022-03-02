const modelHappenings = {

    inputs: {
        newHappening: {
            name: '',
            },
        
        editHappening: {
            happeningId: null,
            name: '',
        },

        deleteHappening: {
            happeningId: null,
            areYouSure: false,
        },
        
    },

    data: {
        happenings: [
            {
                id: 1, 
                name:'Kahoot',
                users: [],
            }, 
            {
                id: 2, 
                name:'Vaske kjøkkenet',
                users: [],
            }, 
        ],

        
        doneHappenings: [
            {   
                id: 1,
                name: 'Kahoot',
                winners: ['Pål'],
                time: '2022-01-01 15:10',
                participants: ['Per','Pål','Espen'],
            }
        ]
    },

}