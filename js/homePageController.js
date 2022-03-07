function createNewUser() {
    model.app.page = 'home';
    let user = {};
    user.id = getMaxUserId() + 1;
    user.name = model.inputs.newUser.name
    user.points = 0;
    user.isSelected = false;
    if (happening.name == '') {
        alert('Fyll ut navn på bruker')
    }
    else {
        model.data.users.push(user);
        newHappeningPointsObj()
        updateView()
    }
}

function createNewHappening() {
    model.app.page = 'home'
    let happening = {};
    happening.id = getMaxHappeningId() + 1;
    happening.name = model.inputs.newHappening.name
    happening.isSelected = false
    happening.isSelected = false
    if (happening.name == '') {
        alert('Fyll ut navn på arrangement')
    } else {
        model.data.happenings.push(happening);
        newUserPointsObj()
        updateView()
    }
}

function newUserPointsObj() {
    let allUsers = model.data.users
    for (user of allUsers) {
        let pointsObj = {}
        pointsObj.points = ''
        pointsObj.happeningId = getMaxHappeningId()
        pointsObj.userId = user.id
        for (let j = 0; j < 1; j++) {
            model.data.userPoints.push(pointsObj);
        }
    }

}


function newUserPointsObj() {
    let allUsers = model.data.users
    let pointsObj = {}
    pointsObj.points = ''
    pointsObj.happeningId = getMaxHappeningId()
    for (user of allUsers) {
        pointsObj.userId = user.id
        for (let j = 0; j < 1; j++) {
            model.data.userPoints.push(pointsObj);
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

function goToEditUserPage(userId) {
    model.app.page = 'editUser';
    model.inputs.editUser.userId = userId;
    const user = getUserById(userId);
    model.inputs.editUser.name = user.name;
    updateView();
}

function goToEditHappeningPage(happeningId) {
    model.app.page = 'editHappening';
    model.inputs.editHappening.happeningId = happeningId;
    const happening = getHappeningById(happeningId);
    model.inputs.editHappening.name = happening.name;
    updateView();
}