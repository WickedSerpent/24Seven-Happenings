function createNewUser(){
    const user = {};
    user.id = getMaxUserId() + 1;
    user.name = modelUsers.inputs.newUser.name
    modelUsers.app.page='home';
    user.points = 0;
    modelUsers.data.allUsers.push(user);
    updateView()
}

function createNewHappening(){
    const happening = {};
    happening.id = getMaxHappeningId() + 1;
    happening.name = modelHappenings.inputs.newHappening.name
    modelUsers.app.page='home';
    modelHappenings.data.happenings.push(happening);
    updateView()
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