function createMenuHtml() {
    return /*html*/`
    <div class="header">
        <button class="btn--top" onclick="model.app.page='home'; updateView()">Hjemmeside</button>
        <button class="btn--top" onclick="model.app.page='happenings'; updateView()">Trekningsside</button>
        <button class="btn--top" onclick="model.app.page='doneHappening'; updateView()">Tidligere trekninger</button>
    </div>
        <hr>
    `;
}

function getMaxUserId() {
    let id = 0;
    for (let user of model.data.allUsers) {
        if (user.id > id) id = user.id;
    }
    return id;
}

function getMaxHappeningId() {
    let id = 0;
    for (let happening of model.data.happenings) {
        if (happening.id > id) id = happening.id;
    }
    return id;
}

function findHappeningById(id) {
    for (let happening of model.data.happenings) {
        if (happening.id === id) return happening;
    }
    return null;

}

function findHappeningIndexById(id) {
    for (let i = 0; i < model.data.happenings.length; i++) {
        let happening = model.data.happenings[i];
        if (happening.id === id) return i;
    }
    return null;

}

function findUserById(id) {
    for (let user of model.data.allUsers) {
        if (user.id === id) return user;
    }
    return null;
}

function findUserIndexById(id) {
    for (let i = 0; i < model.data.allUsers.length; i++) {
        let user = model.data.allUsers[i];
        if (user.id === id) return i;
    }
    return null;
}

function sortUserByPoints(){
    let users = model.data.allUsers
    users.sort(function(a,b){return a.points-b.points; })
    return users
}

function findLowestPoint(){
    let users = getCheckedUsers()
    return Math.min(...users.map(item => item.points));
}

function findUsersWithLowestPoint(){
    let checkedUsers = getCheckedUsers()
    let lowestPoint = findLowestPoint()
    let users = checkedUsers
    return users.filter(obj => { return obj.points === lowestPoint })
}

function getAllHappenings(){
    const happenings = model.data.happenings;
    for (let i = 0; i < happenings.length; i++) {
        const happening = happenings[i];
    }
    return happenings;
}