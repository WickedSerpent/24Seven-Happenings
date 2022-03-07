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
        
        ],

        userPoints: [
            
        ],
        
        happenings: [
            
        ],

        
        doneHappenings: [
            
        ],

    },

}