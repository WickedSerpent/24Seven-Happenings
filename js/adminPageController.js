function createNewUser(){
    const user = {};
    user.id = getMaxUserId() + 1;
    user.name = model.inputs.newUser.name
    model.app.page='admin';
    user.points = 0;
    model.data.users.push(user);
    updateView()
}

function createNewHappening(){
    const happening = {};
    happening.id = getMaxHappeningId() + 1;
    happening.name = model.inputs.newHappening.name
    model.app.page='admin';
    model.data.happenings.push(happening);
    updateView()
}

function goToDeleteUserPage(userId) {
    model.app.page = 'deleteUser';
    model.inputs.deleteUser.id = userId;
    updateView()
}