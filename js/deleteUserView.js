function updateViewDeleteUser(){
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuHtml()}  
        <h2> Slett </h2>
        ${createDeleteUserHtml()}
        <input
            type="checkbox"
            oninput="modelUsers.inputs.deleteUser.areYouSure = this.checked"
            ${modelUsers.inputs.deleteUser.areYouSure ? 'checked' : ''}
            /> Er du sikker på at du vil slette?<br>
        <button onclick="deleteUser()"> Slett! </button>
       `;
}

function createDeleteUserHtml(){
    const userId = modelUsers.inputs.deleteUser.id;
    const user = findUserById(userId);
    return /*html*/`
        Navn: ${user.name}<br>
    `;
}