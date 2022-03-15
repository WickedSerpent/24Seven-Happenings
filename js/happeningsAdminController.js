function adminSelectAllOrNone(selectAll) {
    model.data.selectAll = selectAll;
    for (let user of model.data.users) {
        user.isSelected = selectAll;
    }
    updateAdminView();
}

function adminGetChecked(isSelected) {
    return isSelected ? 'checked="checked"' : '';
}

function adminTogglePersonSelected(id) {
    const user = getUserById(id);
    user.isSelected = !user.isSelected;
    updateAdminView();
}

function adminToggleHappeningSelected(id) {
    const happening = getHappeningById(id)
    happening.isSelected = !happening.isSelected;
    updateAdminView();
}


function adminGetCheckedUsers() {
    let users = model.data.users;
    let checkedUsers = users.filter(user => {
        return user.isSelected === true
    })
    return checkedUsers;
}


function adminGetCheckedUsersIds() {
    let userIds = []
    let users = getCheckedUsers()
    for (user of users) {
        userIds.push(user.id)
    }
        return userIds;
}

function adminGetCheckedUsersNames() {
    let userNames = []
    let users = getCheckedUsers()
    for (user of users) {
        userNames.push(user.name)
    }
        return userNames;
}

function adminGetCheckedHappeningName() {
    let happenings = model.data.happenings
    for (happening of happenings) {
        if (happening.isSelected === true)
            return happening.name
    }
}

function getCheckedHappeningId() {
    let happenings = model.data.happenings
    for (happening of happenings) {
        if (happening.isSelected === true)
            return happening.id
    }
}

function adminGetAllHappeningIds(){
    let happenings = []
    let allHappenings = model.data.happenings
    for (let i = 0; i < allHappenings.length; i++) {
        happenings.push(allHappenings[i].id)
    }
    return happenings
}

function resetHappenings(){
    model.data.doneHappenings = []
    updateAdminView()
}

function deleteDoneHappening(id){
    const doneHappenings = model.data.doneHappenings
    let userId = null
    let happeningId = null
    for(happening of doneHappenings){
        if(happening.id === id)
        userId = happening.userId
    }
    for(happening of doneHappenings){
        if(happening.id === id)
        happeningId = happening.happeningId
    }
    let userDrawn = getUserObjPoints(userId, happeningId)
    userDrawn.points = userDrawn.points - 2
    const index = getDoneHappeningIndexById(id);
    model.data.doneHappenings.splice(index, 1);
    model.app.page='happeningsAdmin';
    updateAdminView()
}

function adminGetCheckedHappenings() {
    let happening = model.data.happenings;
    let checkedhappenings = happening.filter(happening => {
        return happening.isSelected === true
    })
    return checkedhappenings;
}

function adminDrawUser(){
    let checkedHappenings = adminGetCheckedHappenings()
    let checkedHappeningName = adminGetCheckedHappeningName()
    let checkedHappeningIds = adminGetCheckedUsers()
    if(checkedHappeningName === undefined){
        alert('Velg arrangement!')
        return
    }
    if(checkedHappenings.length > 1){
        alert('Du har huket av flere arrangementer!')
        return
    }
    if(checkedHappeningIds.length === 0){
        alert('Velg personer å trekke mellom!')
        return
    }
    let winners = model.data.doneHappenings
    let winner = {}
    winner.participants = getCheckedUsersNamesFromLowestPoint()
    let listOfUsers = getUsersWithLowestPoint()
    let drawnPerson = listOfUsers[Math.floor(Math.random()*listOfUsers.length)];
    drawnPerson.points += 2
    let winnerId = drawnPerson.userId
    let winnerUser = getUserById(winnerId)
    winner.id = getMaxDoneHappeningId() + 1
    winner.userId = winnerId
    winner.happeningId = getCheckedHappeningId()
    winner.name = getCheckedHappeningName()
    winner.userDrawn = winnerUser.name
    winner.time = getNowForStorage()
    winners.unshift(winner)
    model.app.page = 'happeningsAdmin'
    updateAdminViewHappenings()
    return winner
}

// bookmark

  function goToDetailsPage(happeningId) {
        model.app.page = 'details';
        model.data.doneHappenings.id = doneId;
        updateAdminView()
    }

