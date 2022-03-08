function createNewUser() {
    model.app.page = 'home';
    let user = {};
    user.id = getMaxUserId() + 1;
    user.name = model.inputs.newUser.name
    user.points = 0;
    user.isSelected = false;
    if (user.name == '') {
        alert('Fyll inn navn')
    } else {
    model.data.users.push(user);
    newHappeningPointsObj()
    
    updateView()
    sum()
    }
    model.inputs.newUser.name = '';
}

function createNewHappening() {
    model.app.page = 'home'
    let happening = {};
    happening.id = getMaxHappeningId() + 1;
    happening.name = model.inputs.newHappening.name
    happening.isSelected = false
    if (happening.name == '') {
        alert('Fyll ut navn på arrangement')
    } else {
    model.data.happenings.push(happening);
    newUserPointsObj()
    updateView()}
    model.inputs.newHappening.name = '';
}

function newHappeningPointsObj() {
    const happenings = model.data.happenings
    const points = getLowestPointsFromEachHappening()
    const newObjsId = getMaxUserId()
    const newObjs = model.data.userPoints.points
    for (let i = 0; i < happenings.length;) {
            for (point of points) { 
            const userObj = {}
            userObj.userId = getMaxUserId()
            userObj.happeningId = happenings[i].id
            userObj.points = point + 2 
            if(point === Infinity){
                userObj.points = 0
            }
            i++
            for (let j = 0; j < 1; j++) {
                model.data.userPoints.push(userObj);
            }
        }
    }
}

function newUserPointsObj() {
    let allUsers = model.data.users
    for (user of allUsers) {
        const pointsObj = {}
        pointsObj.userId = user.id
        pointsObj.happeningId = getMaxHappeningId()
        pointsObj.points = 1
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

function sum(){
    userPoints = model.data.userPoints;
    let sum = 0;
    for(points in userPoints){
        const summed = userPoints.reduce(
        (points, userPoints) => points + (userPoints[points], 0)
        );
        console.log(summed);
        // return points;
    }
}