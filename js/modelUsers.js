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
            {id: 1, name:'Per', points: 7, isSelected: false,},
            {id: 2, name:'Pål', points: 2, isSelected: false,},
            {id: 3, name:'Espen', points: 3, isSelected: false,},
            {id: 4, name:'Oskar', points: 8, isSelected: false,},
            {id: 5, name:'Emilie', points: 3, isSelected: false,},
            {id: 6, name:'Ingrid', points: 23, isSelected: false,},
            {id: 7, name:'Roger', points: 21, isSelected: false,},
            {id: 8, name:'Nils', points: 2, isSelected: false,},
            {id: 9, name:'Åge', points: 8, isSelected: false,},
            {id: 10, name:'Petter', points: 2, isSelected: false,},
        ],
       
    },

}