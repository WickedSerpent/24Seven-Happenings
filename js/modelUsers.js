const modelUsers = {

    app: {
        page: 'home', // administratorside, arrangementsside, unikbrukerside
    },

    inputs: {
      
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
            points: '',
            areYouSure: false,
        },
    },

    data: {

        selectAll: false,
        allUsers: [
            {id: 1, name:'Per', points: '', isSelected: false,},
            {id: 2, name:'Pål', points: '', isSelected: false,},
            {id: 3, name:'Espen', points: '', isSelected: false,},
        ],
       
    },

}