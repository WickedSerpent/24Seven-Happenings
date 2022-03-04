function createNewUser(){
    modelUsers.app.page='home';
    const user = {};
    user.id = getMaxUserId() + 1;
    user.name = modelUsers.inputs.newUser.name
    user.points = 0;
    user.isSelected = false;
    user.happeningArray = modelHappenings.data.happenings
    modelUsers.data.allUsers.push(user);
    updateUserHappenings();
    updateView()
}

function createNewHappening(){
    modelUsers.app.page='home';
    let allUsers = modelUsers.data.allUsers;
    let haveUsers = allUsers.length > 0 ? true : false
    let happeningExists = false;
    const happeningArrayName = modelUsers.data.allUsers.happeningArray.name;
    const happening = {};
    happening.id = getMaxHappeningId() + 1;
    happening.name = modelHappenings.inputs.newHappening.name
    happening.points = '' ;

    if(happening.name ==  happeningArrayName){happeningExists === true};
    if(happeningExists === true){alert('Du kan ikke legge til identiske happenings')}
    else{for(let i = 0; i < allUsers.length ; i++ )allUsers[i].happening.push(happening);}
 
        updateUserHappenings();
        updateView()
}



function updateUserHappenings(){
for(let i=0; i < allUsers.length; i++){
    for(let j = 0; j < modelHappenings.data.happenings.length; j++){
    allUsers[i].happeningArray.push(modelHappenings.data.happenings)
    }
}  
}                


function goToDeleteUserPage(userId) {
    modelUsers.app.page = 'deleteUser';
    modelUsers.inputs.deleteUser.id = userId;
    updateView()
}

function goToDeleteHappeningPage(happeningId) {
    modelUsers.app.page = 'deleteHappening';
    modelHappenings.inputs.deleteHappening.id = happeningId;
    updateView()
}

function goToEditUserPage(userId){
    modelUsers.app.page = 'editUser';
    modelUsers.inputs.editUser.userId = userId;
    const user = findUserById(userId);
    modelUsers.inputs.editUser.name = user.name;
    updateView();
}

function goToEditHappeningPage(happeningId){
    modelUsers.app.page = 'editHappening';
    modelHappenings.inputs.editHappening.happeningId = happeningId;
    const happening = findHappeningById(happeningId);
    modelHappenings.inputs.editHappening.name = happening.name;
    updateView();
} 

