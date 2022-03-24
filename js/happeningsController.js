function selectAllOrNone(selectAll) {
    model.data.selectAll = selectAll;
    for (let user of model.data.users) {
        user.isSelected = selectAll;
    }
    updateView();
}

function selectNone(selectAll) {
    model.data.selectAll = selectAll;
    for (let user of model.data.happenings) {
        user.isSelected = selectAll;
    }
    updateView();
}

function getChecked(isSelected) {
    return isSelected ? 'checked="checked"' : '';
}

function togglePersonSelected(id) {
    const user = getUserById(id);
    user.isSelected = !user.isSelected;
    updateView();
}

function toggleDetailsSelected(id) {
    const doneHappening = getDoneHappeningById(id);
    doneHappening.detailsShown = !doneHappening.detailsShown;
    updateView();
}

function toggleHappeningSelected(id) {
    const happening = getHappeningById(id)
    happening.isSelected = !happening.isSelected;
    updateView();
}


function getCheckedUsers() {
    let users = model.data.users;
    let checkedUsers = users.filter(user => {
        return user.isSelected === true
    })
    return checkedUsers;
}


function getCheckedUsersIds() {
    let userIds = []
    let users = getCheckedUsers()
    for (user of users) {
        userIds.push(user.id)
    }
        return userIds;
}

function getCheckedUsersNames() {
    let userNames = []
    let users = getCheckedUsers()
    for (user of users) {
        userNames.push(user.name)
    }
        return userNames;
}

function getCheckedHappeningName() {
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

function getAllHappeningIds(){
    let happenings = []
    let allHappenings = model.data.happenings
    for (let i = 0; i < allHappenings.length; i++) {
        happenings.push(allHappenings[i].id)
    }
    return happenings
}

function resetHappenings(){
    model.data.doneHappenings = []
    updateView()
}

function getCheckedHappenings() {
    let happening = model.data.happenings;
    let checkedhappenings = happening.filter(happening => {
        return happening.isSelected === true
    })
    return checkedhappenings;
}

function drawUser(){
    let checkedHappenings = getCheckedHappenings()
    let checkedHappeningName = getCheckedHappeningName()
    let checkedHappeningIds = getCheckedUsers()
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
    winner.comments = []
    winner.id = getMaxDoneHappeningId() + 1
    winner.userId = winnerId
    winner.happeningId = getCheckedHappeningId()
    winner.name = getCheckedHappeningName()
    winner.userDrawn = winnerUser.name
    winner.time = getNowForStorage()
    winner.comment = ''
    winner.detailsShown = false,
    winners.unshift(winner)
    model.app.page = 'happening'
    updateView()
    return winner
}

function addComment(id){
    let happening = getDoneHappeningById(id)
    if (model.inputs.comment === '') {
        return
    }
    else {
        let comment = {}
        comment.commentId = getMaxCommentIdDoneHappening(id) + 1
        comment.comment = model.inputs.comment
        happening.comments.push(comment)
        model.inputs.comment = ''
        updateView()
    }
}

function goToDeleteCommentPage(happeningId) {
    model.app.page = 'deleteComment';
    model.inputs.deleteComment.doneHappeningId = happeningId;
    updateView()
}


function check() {
    document.getElementById("cb1").checked = true;
}

function goToDetailsPage(happeningId) {
    model.app.page = 'details';
    document.getElementById("cb1").checked = true;
    updateDetailsView()
}

function getScrollPoistion() {
    const element = document.getElementById("doneHappenListId");
    var y = element.scrollTop;
    console.log(y);
    
  }


  
    
