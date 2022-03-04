function updateViewDeleteUser(){
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuHtml()}  
        <div class="box--home">
        <h2> Slett </h2>
        ${createDeleteUserHtml()}
        <input
            type="checkbox"
            oninput="model.inputs.deleteUser.areYouSure = this.checked"
            ${model.inputs.deleteUser.areYouSure ? 'checked' : ''}
            /> Er du sikker på at du vil slette?<br>
        <button onclick="deleteUser()"> Slett! </button>
        </div>
       `;
}

function createDeleteUserHtml(){
    const userId = model.inputs.deleteUser.id;
    const user = findUserById(userId);
    return /*html*/`
        Navn: ${user.name}<br>
    `;
}