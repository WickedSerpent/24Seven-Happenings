const model = {

    app: {
        page: 'home',
    },

    inputs: {

        newHappening: {
            name: '',
            happeningExists: false,
            },
        
        editHappening: {
            happeningId: null,
            name: '',
        },

        deleteHappening: {
            happeningId: null,
            areYouSure: false,
        },
      
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
            areYouSure: false,
        },

        happenings: {
            selected: [1,],
        },
        users: {
            selected: [1, 2, 3, 4, 5, 6, 7]
        },
    },

    data: {

        selectAll: false,
       
        users: [
            {id: 1, name:'Per', points: [1, 2, 3], isSelected: false, },
            {id: 2, name:'Pål', points: [1, 2, 3], isSelected: false, },
            {id: 3, name:'Espen', points: [1, 2, 3], isSelected: false, },
            {id: 4, name:'Ingrid', points: [1, 2, 3], isSelected: false, },
        ],
       
        happenings: [
            {
                id: 1, 
                name:'Kahoot',
            }, 
        ],
        userPoints: [
           {happeningId: 1, userId: 1, points: 5},
           {happeningId: 2, userId: 1, poinst: 3},
        ],
        
        doneHappenings: [
            {   
                id: 1,
                name: 'Kahoot',
                userDrawn: 1,
            }
        ]
    
    },

}