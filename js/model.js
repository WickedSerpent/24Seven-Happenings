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
        users: [ 1, 2, 3, {happenings:[1, 2, 3,]},],

        userArray: [
            {id: 1, 
            name:'Per',
            
            isSelected: false, },
            {id: 2, 
            name:'Pål', 
            isSelected: false, },
            {id: 3, 
            name:'Espen', 
            isSelected: false, },
        ],

        happenings: [
            {
                id: 1, 
                name:'Kahoot',
                
            }, 
            {
                id: 2, 
                name:'Vaske kjøkkenet',
            }, 
        ],

        
        doneHappenings: [
            {   
                id: 1,
                name: 'Kahoot',
                userDrawn: 1,
                participants: [],
            }
        ]
    
    },

}