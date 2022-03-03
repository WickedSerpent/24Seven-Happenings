function createNewUser(){
    const user = {};
    user.id = getMaxUserId() + 1;
    user.name = modelUsers.inputs.newUser.name
    modelUsers.app.page='home';
    user.points = '';
    user.isSelected = false;
    user.happeningArray = modelHappenings.data.happenings
    modelUsers.data.allUsers.push(user);
    updateView()
}

function createNewHappening(){
    let allUsers = modelUsers.data.allUsers;
    const happening = {};
    happening.id = getMaxHappeningId() + 1;
    happening.name = modelHappenings.inputs.newHappening.name
    happening.points = '' ;
    modelUsers.app.page='home';
    modelHappenings.data.happenings.push(happening);
    for(user of allUsers) {
    user.happeningArray.push(happening)
    }
    updateView()
    console.log('test')
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