function createNewUser(){
    model.app.page='home';
    const user = {};
    user.id = getMaxUserId() + 1;
    user.name = model.inputs.newUser.name
    user.points = 0;
    user.isSelected = false;
    user.happeningArray = model.data.happenings
    model.data.allUsers.push(user);
    updateUserHappenings();
    updateView()
}

function createNewHappening(){
    model.app.page='home';
    let users = model.data.users;
    // let users = allUsers.length > 0 ? true : false -- ser ann denne. 
    let happeningExists = false;
    const happeningArray= model.data.happenings.name;
    const happening = {};
    happening.id = getMaxHappeningId() + 1;
    happening.name = model.inputs.newHappening.name
    happeningPoints = model.inputs.newHappening.name +

    if(happening.name ==  happeningArray){happeningExists === true};
    if(happeningExists === true){alert('Du kan ikke legge til identiske happenings')}
    else{for(let i = 0; i < users.length ; i++ ){
        for(let u = 0; u < happeningArray.length; u++ ){
        users[i].happenings[u].push(happening);}}
        updateUserHappenings();
        updateView()
}
}


function updateUserHappenings(){
for(let i=0; i < allUsers.length; i++){
    for(let j = 0; j < model.data.happenings.length; j++){
    allUsers[i].happeningArray.push(model.data.happenings)
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

