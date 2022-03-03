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
            {id: 1, name:'Per',isSelected: false,},
            {id: 2, name:'Pål', isSelected: false,},
            {id: 3, name:'Espen', isSelected: false,},
            {id: 4, name:'Oskar', isSelected: false,},
            {id: 5, name:'Emilie', isSelected: false,},
            {id: 6, name:'Ingrid', isSelected: false,},
            {id: 7, name:'Roger',isSelected: false,},
            {id: 8, name:'Nils',isSelected: false,},
            {id: 9, name:'Åge', isSelected: false,},
            {id: 10, name:'Petter', isSelected: false,},
        ],
       
    },

}