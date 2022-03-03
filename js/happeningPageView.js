function updateViewHappeningPage(){
    html = '';
    document.getElementById('app').innerHTML = /*html*/ `
    ${createMenuHtml()}
    ${createHappeningPageHtml()}
    <h3>Velg hvem som skal være med i trekningen</h3>
    <input type="checkbox" onclick='selectAll(this.checked)'${getChecked(modelUsers.inputs.selectAll)}/><p>velg alle</p><br/>
    ${getAllUsers()}       
    `;
}


function createHappeningPageHtml(){
    const happeningId = modelHappenings.data.happenings.id;
    const happening = findHappeningById(happeningId);
    return /*html*/`
        <h1>${happening.name}</h1>

    `;
}

function getAllUsers(){
    let html = '';
    const users = modelUsers.data.allUsers;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        html += /*html*/`
        <input type="checkbox" onclick="toggleSelectedUser()"/> ${user.name} <br> 
        `;
    }
    return html;
}
function getChecked(isSelected) {
    return isSelected ? 'checked="checked"' : '';
  }