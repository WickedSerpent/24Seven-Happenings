const modelHappenings = {

    inputs: {
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
        
    },

    data: {
        happenings: [
            {
                id: 1, 
                name:'Kahoot',
                points: '344',
            }, 
            {
                id: 2, 
                name:'Vaske kjøkkenet',
                points: '5664',
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