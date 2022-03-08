const model = {

    app: {
        page: 'happening',
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
        
        resetDoneHappenings: {
            areYouSure: false,
        },

    },

    data: {

        selectAll: false,
        users: [
            {id: 1, name:'Geir', isSelected: false, },
            {id: 2, name:'Eskil', isSelected: false, },
            {id: 3, name:'Terje', isSelected: false, },
        ],

        userPoints: [
            {userId: 1, happeningId: 1, points: 2},
            {userId: 2, happeningId: 1, points: 2},
            {userId: 3, happeningId: 1, points: 2},
            {userId: 1, happeningId: 2, points: 85},
            {userId: 2, happeningId: 2, points: 85},
            {userId: 3, happeningId: 2, points: 85},
            {userId: 1, happeningId: 3, points: 12},
            {userId: 2, happeningId: 3, points: 12},
            {userId: 3, happeningId: 3, points: 12},
            {userId: 1, happeningId: 4, points: 8},
            {userId: 2, happeningId: 4, points: 8},
            {userId: 3, happeningId: 4, points: 8},
        ],
        

        happenings: [
            {
                id: 1, 
                name:'Kahoot',
                isSelected: false,
            }, 
            {
                id: 2, 
                name:'Rense kaffemaskin',
                isSelected: false,
            }, 
            {
                id: 3, 
                name:'Ta ut av oppvaskmaskin',
                isSelected: false,
            }, 
            {
                id: 4, 
                name:'Sette inn i oppvaskmaskin',
                isSelected: false,
            }, 
        ],

        
        doneHappenings: [
            
        ],
    },

}