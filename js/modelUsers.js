const modelUsers = {

    app: {
        page: 'home', // administratorside, arrangementsside, unikbrukerside
    },

    inputs: {
        selectAll: false,
        newUser: {
            name: '',
            points: null,
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
        
        allUsers: [
            {id: 1, name:'Per', isSelected: true, points: ''},
            {id: 2, name:'Pål', isSelected: true, points: ''},
            {id: 3, name:'Espen', isSelected: true, points: ''},
        ],
       
    },

}