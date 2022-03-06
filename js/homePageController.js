function createNewUser(){
    model.app.page='home';
    const user = {};
    user.id = getMaxUserId() + 1;
    user.name = model.inputs.newUser.name
    user.points = 0;
    user.isSelected = false;
    // user.happeningArray = model.data.happenings
    model.data.users.push(user);
    updateUserHappenings();
    updateView()
}

function createNewHappening(){
    model.app.page='home';
    // let users = model.data.users;
    // let user = users.length > 0 ? true : false -- ser ann denne. 
    const happeningExists = model.inputs.newHappening.happeningExists;
    const happeningsName = model.data.happenings.name;
    // const userPoints = `${happeningsName}`+'points: 0,';
    const happenings = model.data.happenings;
    let happening = {};
    happening.id = getMaxHappeningId() + 1;
    happening.name = model.inputs.newHappening.name;
    if(happening.name == null){happeningExists === true};
    if(happening.name.value ===  happeningsName){happeningExists === true};
    if(happeningExists == true){alert('Du kan ikke legge til identiske/blanke happenings :(')}
    else(happenings.push(happening));
        // updateUserHappenings();
        updateView()
}


// function createNewHappening(){
//     model.app.page='home'
//     let allUsers = model.data.users
//     let happening = {};
//     happening.name = model.inputs.newHappening.name
//     happening.id = getMaxHappeningId() + 1;
//     happening.points = '0'; 
//     model.data.happenings.push(happening);
//     for(user of allUsers) {
//     model.data.happenings.push(happening) //dette parameter gjør slik at vi får 2 arrangementer per 1-ny bruker, men hvis vi tar det bort får ingen "gamle brukere" det nye arrangementet
//     }
//     updateView()
// }

function updateUserHappenings(){
    const users = model.data.users;
for(let i=0; i < users.length; i++){
    for(let j = 0; j < model.data.happenings.length; j++){
    model.data.happenings[j].push(happening)
    }
}  
}                


function goToDeleteUserPage(userId) {
    model.app.page = 'deleteUser';
    model.inputs.deleteUser.id = userId;
    updateView()
}

function goToDeleteHappeningPage(happeningId) {
    model.app.page = 'deleteHappening';
    model.inputs.deleteHappening.id = happeningId;
    updateView()
}

function goToEditUserPage(userId){
    model.app.page = 'editUser';
    model.inputs.editUser.userId = userId;
    const user = findUserById(userId);
    model.inputs.editUser.name = user.name;
    updateView();
}

function goToEditHappeningPage(happeningId){
    model.app.page = 'editHappening';
    model.inputs.editHappening.happeningId = happeningId;
    const happening = findHappeningById(happeningId);
    model.inputs.editHappening.name = happening.name;
    updateView();
} 

