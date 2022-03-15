function editUser() {
    const user = getUserById(model.inputs.editUser.userId);
    user.name = model.inputs.editUser.name;
    model.app.page = 'home';
    updateAdminView();
}

function editPoints(userId, happeningId) {
    const obj = editPointsObj(userId, happeningId)
    obj.points = model.inputs.editUser.points;
    alert("Du har endret poeng!")
    updateAdminView();
}

function editPointsObj(userId, happeningId) {
    let users = model.data.userPoints;
    for (user of users) {
        if (user.userId === userId && user.happeningId === happeningId) {
            return user;
        }
    }
}