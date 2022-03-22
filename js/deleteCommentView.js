function deleteCommentView() {
    let id = model.inputs.deleteUser.id;
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuDeleteCommentHtml()}  
        <div class="deleteAndEdit">
        <h3> Slett kommentar</h3>
        ${createDeleteCommentHtml()}
        </div>
       `;
}

function createDeleteCommentHtml() {
    let html = ''
    const happeningId = model.inputs.deleteComment.doneHappeningId;
    let comments = getAllCommentsFromDoneHappening(happeningId);
    for (comment of comments) {
        html +=/*html*/`
        ${comment.comment} <button onclick="deleteComment(${comment.commentId}, ${happeningId})">Slett</button> <br /><br />
    `;
    }
    return html
}