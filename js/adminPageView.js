function updateViewAdmin(){
    document.getElementById('app').innerHTML = /*html*/`
    ${createMenuHtml()}
    <div class="container">
        <div class="boxOne">
            <div>Arrangementer</div>
            ${getAllHappeningsAdmin()}
            
        </div>
        <div class="boxTwo">
            <div>Personer</div>
            ${getAllUsersAdmin()}
        </div>
    </div>
    <input oninput="model.inputs.newHappening.name = this.value" type="text">
    <button onclick="createNewHappening()">Legg til nytt arrangement</button>
    <input oninput="model.inputs.newUser.name = this.value" type="text">
    <button onclick="createNewUser()">Legg til ny person</button>
    `; 
}


function getAllUsersAdmin(){
    let html = '';
    const users = model.data.users;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        html += /*html*/`
            <ul>
            <li>Navn - ${user.name} 
            <button onclick="goToEditPageUser(${user.id})">Endre</button> 
            <button onclick="goToDeleteUserPage(${user.id})">Slett</button><br></li>
            Poeng - ${user.points} <br>
            </ul>
        `;
    }
    return html;
}

function getAllHappeningsAdmin(){
    let html = '';
    const happenings = model.data.happenings;
    for (let i = 0; i < happenings.length; i++) {
        const happening = happenings[i];
        html += /*html*/`
            <ul>
            <li>${happening.name} <button>Endre</button> <button>Slett</button></li>
            </ul>      
        `;
    }
    return html;
}