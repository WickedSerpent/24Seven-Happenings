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
            {id: 1, name:'Per', points: 7, isSelected: false, happeningArray: [{id: 1, name: 'Kahoot', points: ''}, {id: 2, name: 'Vaske kjøkkenet', points: ''}],},
            {id: 2, name:'Pål', points: 2, isSelected: false, happeningArray: [{id: 1, name: 'Kahoot', points: ''}, {id: 2, name: 'Vaske kjøkkenet', points: ''}],},
            {id: 3, name:'Espen', points: 3, isSelected: false, happeningArray: [{id: 1, name: 'Kahoot', points: ''}, {id: 2, name: 'Vaske kjøkkenet', points: ''}],},
            {id: 4, name:'Oskar', points: 8, isSelected: false, happeningArray: [{id: 1, name: 'Kahoot', points: ''}, {id: 2, name: 'Vaske kjøkkenet', points: ''}],},
            {id: 5, name:'Emilie', points: 3, isSelected: false, happeningArray: [{id: 1, name: 'Kahoot', points: ''}, {id: 2, name: 'Vaske kjøkkenet', points: ''}],},
            {id: 6, name:'Ingrid', points: 23, isSelected: false, happeningArray: [{id: 1, name: 'Kahoot', points: ''}, {id: 2, name: 'Vaske kjøkkenet', points: ''}],},
            {id: 7, name:'Roger', points: 21, isSelected: false, happeningArray: [{id: 1, name: 'Kahoot', points: ''}, {id: 2, name: 'Vaske kjøkkenet', points: ''}],},
            {id: 8, name:'Nils', points: 2, isSelected: false, happeningArray: [{id: 1, name: 'Kahoot', points: ''}, {id: 2, name: 'Vaske kjøkkenet', points: ''}],},
            {id: 9, name:'Åge', points: 8, isSelected: false, happeningArray: [{id: 1, name: 'Kahoot', points: ''}, {id: 2, name: 'Vaske kjøkkenet', points: ''}],},
            {id: 10, name:'Petter', points: 2, isSelected: false, happeningArray: [{id: 1, name: 'Kahoot', points: ''}, {id: 2, name: 'Vaske kjøkkenet', points: ''}],},
        ],
       
    },

}