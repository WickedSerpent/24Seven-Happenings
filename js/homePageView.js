function updateViewHome(){
    document.getElementById('app').innerHTML = /*html*/`
    ${createMenuHtml()}
    <div class="container">
        <div class="boxOne">
            <h2>Arrangementer</h2>
            ${getAllHappeningsHome()}
            <input oninput="modelHappenings.inputs.newHappening.name = this.value" type="text">
            <button onclick="createNewHappening()">Legg til nytt arrangement</button>
        </div>
        <div class="boxTwo">
            <h2>Personer</h2>
            ${getAllUsersHome()}
            <input oninput="modelUsers.inputs.newUser.name = this.value" type="text">
            <button onclick="createNewUser()">Legg til ny person</button>
        </div>
    </div>
    `; 
}


function getAllUsersHome(){
    let html = '';
    const users = modelUsers.data.allUsers;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        html += /*html*/`
            <ul>
            <li>Navn - ${user.name} 
            <button onclick="goToEditUserPage(${user.id})">Endre</button> 
            <button onclick="goToDeleteUserPage(${user.id})">Slett</button><br></li>
            </ul>
        `;
    }
    return html;
}

function getAllHappeningsHome(){
    let html = '';
    const happenings = modelHappenings.data.happenings;
    for (let i = 0; i < happenings.length; i++) {
        const happening = happenings[i];
        html += /*html*/`
            <ul>
            <li>${happening.name} <button onclick="goToEditHappeningPage(${happening.id})">Endre</button> 
            <button onclick="goToDeleteHappeningPage(${happening.id})">Slett</button></li>
            </ul>      
        `;
    }
    return html;
}