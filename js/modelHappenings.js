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
                users: [
                    {id: 1, name:'Per', isSelected: true},
                    {id: 2, name:'Pål', isSelected: true},
                    {id: 3, name:'Espen', isSelected: true},
                ],
                selectAll: true,
            }, 
            {
                id: 2, 
                name:'Vaske kjøkkenet',
                users: [  
                    {id: 1, name:'Per', isSelected: false},
                    {id: 2, name:'Pål', isSelected: false},
                    {id: 3, name:'Espen', isSelected: false},
                ],
                selectAll: false,
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