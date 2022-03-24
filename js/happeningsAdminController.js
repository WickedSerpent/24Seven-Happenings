

function adminGetAllHappeningIds(){
    let happenings = []
    let allHappenings = model.data.happenings
    for (let i = 0; i < allHappenings.length; i++) {
        happenings.push(allHappenings[i].id)
    }
    return happenings
}



function deleteDoneHappening(id){
    if (confirm("Er du sikker?") == true){
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
    }else{
    updateAdminView()
    }
}

function addCommentAdmin(id){
    let happening = getDoneHappeningById(id)
    if (model.inputs.comment === '') {
        return
    }
    else {
        let comment = {}
        comment.commentTime = getNowForStorage()
        comment.commentId = getMaxCommentIdDoneHappening(id) + 1
        comment.comment = model.inputs.comment
        happening.comments.push(comment)
        model.inputs.comment = ''
        updateView()
    }
}

function goToDeleteCommentPageAdmin(happeningId) {
    model.app.page = 'deleteCommentAdmin';
    model.inputs.deleteComment.doneHappeningId = happeningId;
    updateAdminView()
}

