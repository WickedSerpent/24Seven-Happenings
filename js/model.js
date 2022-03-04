const model = {

    app: {
        page: 'home',
    },

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
            selected: [],
        }
    },

    data: {

        selectAll: false,
        users: [
            {id: 1, name:'Per', points: 2, isSelected: false, },
            {id: 2, name:'Pål', points: 2, isSelected: false, },
            {id: 3, name:'Espen', points: 2, isSelected: false, },
            {id: 4, name:'Ingrid', points: 3, isSelected: false, },
        ],
       
        happenings: [
            {
                id: 1, 
                name:'Kahoot',
            }, 
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