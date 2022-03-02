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

function goToEditUserPage(userId){
    model.app.page = 'editUser';
    model.inputs.editUser.userId = userId;
    const user = findUserById(userId);
    model.inputs.editUser.name = user.name;
    updateView();
}

function goToEditHappeningPage(happeningId){
    model.app.page = 'edithappening';
    model.inputs.editHappening.happeningId = happeningId;
    const happening = findHappeningById(happeningId);
    model.inputs.editHappening.name = happening.name;
    updateView();
}