function createMenuHtml() {
    return /*html*/`
        <button onclick="modelUsers.app.page='home'; updateView()">Hjemmeside</button>
        <button onclick="modelUsers.app.page='happenings'; updateView()">Trekningsside</button>
        <button onclick="modelUsers.app.page='doneHappening'; updateView()">Tidligere trekninger</button>
        <hr>
    `;
}

function getMaxUserId() {
    let id = 0;
    for (let user of modelUsers.data.allUsers) {
        if (user.id > id) id = user.id;
    }
    return id;
}

function getMaxHappeningId() {
    let id = 0;
    for (let happening of modelHappenings.data.happenings) {
        if (happening.id > id) id = happening.id;
    }
    return id;
}

function findHappeningById(id) {
    for (let happening of modelHappenings.data.happenings) {
        if (happening.id === id) return happening;
    }
    return null;

}

function findHappeningIndexById(id) {
    for (let i = 0; i < modelHappenings.data.happenings.length; i++) {
        let happening = modelHappenings.data.happenings[i];
        if (happening.id === id) return i;
    }
    return null;

}

function findUserById(id) {
    for (let user of modelUsers.data.allUsers) {
        if (user.id === id) return user;
    }
    return null;
}

function findUserIndexById(id) {
    for (let i = 0; i < modelUsers.data.allUsers.length; i++) {
        let user = modelUsers.data.allUsers[i];
        if (user.id === id) return i;
    }
    return null;
}

function sortUserByPoints(){
    let users = modelUsers.data.allUsers
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
    const happenings = modelHappenings.data.happenings;
    for (let i = 0; i < happenings.length; i++) {
        const happening = happenings[i];
    }
    return happenings;
}