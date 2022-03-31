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

function deleteCommentViewAdmin() {
    let id = model.inputs.deleteUser.id;
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuDeleteCommentHtmlAdmin()}  
        <div class="deleteAndEdit">
        <h3> Slett kommentar</h3>
        ${createDeleteCommentHtmlAdmin()}
        </div>
       `;
}

function createDeleteCommentHtml() {
    let html = ''
    const happeningId = model.inputs.deleteComment.doneHappeningId;
    let comments = getAllCommentsFromDoneHappening(happeningId);
    for (comment of comments) {
        html +=/*html*/`
        ${comment.comment} <button class="btn--small" onclick="deleteComment(${comment.commentId}, ${happeningId})">Slett</button> <br /><br />
    `;
    }
    return html
}

function createDeleteCommentHtmlAdmin() {
    let html = ''
    const happeningId = model.inputs.deleteComment.doneHappeningId;
    let comments = getAllCommentsFromDoneHappening(happeningId);
    for (comment of comments) {
        html +=/*html*/`
        ${comment.comment} <button class="btn--small" onclick="deleteCommentAdmin(${comment.commentId}, ${happeningId})">Slett</button> <br /><br />
    `;
    }
    return html
}

function createMenuDeleteCommentHtmlAdmin() {
    return /*html*/ `
          <div class="topMenu">
          <button class="btn--top" onclick="model.app.page='happeningsAdmin'; updateAdminView()">Tilbake</button>
          </div>
      `;
  }
  
  function createMenuDeleteCommentHtml() {
    return /*html*/ `
          <div class="topMenu">
          <button class="btn--top" onclick="model.app.page='login'; updateView()">Admin</button>
          <button class="btn--top" onclick="model.app.page='happening'; updateView()">Tilbake</button>
          </div>
      `;
  }
  