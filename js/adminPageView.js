function updateAdminViewHome() {
  document.getElementById('app').innerHTML = /*html*/ `
    ${adminMenuHtmlAdmin()}
    
    <div class="containerAdmin">
      <div class="kolonne1Admin">
        <h3 class="headerAdmin" style="padding-left:40px">Arrangementer</h3>
        <div class="happeningListAdmin">

        ${getAllHappeningsHome()}
        </div>
        <div class="addArrangementBox">
        <form>
        <input 
        oninput="model.inputs.newHappening.name = this.value" 
        placeholder="Legg til arrangement"
        type="text"
        class="inputsAdmin"
        onfocus="this.value=''"
        oninvalid="this.setCustomValidity('Feltet kan ikke være tomt')"
        title="Skriv navn på arrangement"
        required
        >
        <button 
        title="Legg til" 
        class="addBtn" 
        onclick="createNewHappening()">+</button>
        </form>
        </div>
      </div>
      <div class="kolonne2Admin">
        <h3 class="headerAdmin2" style="padding-left:40px">Personer</h3>
        
        <div class="userListAdmin">

        ${getusersHome()}
        
        </div>
        <div class="addPersonBox">
        <form>
        <input 
        oninput="model.inputs.newUser.name = this.value" 
        placeholder="Legg til person" 
        type="text"
        class="inputsAdmin"
        onfocus="this.value=''"
        oninvalid="this.setCustomValidity('Feltet kan ikke være tomt')"
        title="Skriv navn på person"
        required
        >
        <button title="Legg til" class="addBtn" onclick="createNewUser()">+</button>
        </form>

        </div>
      </div>
    </div>
        `;
}

function getusersHome() {
  let html = '';
  let users = model.data.users
  users.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    html += /*html*/ `
            <ul>
            <li>${user.name} 
            <button title="Rediger" class="btn"onclick="goToEditUserPage(${user.id})">✎</button> 
            <button title="Slett" class="btn"onclick="goToDeleteUserPage(${user.id})">🗑</button><br></li>
            </ul>
        `;
  }
  return html;
}

function getAllHappeningsHome() {
  let html = '';
  let happenings = [...model.data.happenings];
  happenings.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
  for (let i = 0; i < happenings.length; i++) {
    const happening = happenings[i];
    html += /*html*/ `
            <ul>

            <li>${happening.name} 
            <button title="Rediger" class="btn"onclick="goToEditHappeningPage(${happening.id})">✎</button> 
            <button title="Slett" class="btn"onclick="goToDeleteHappeningPage(${happening.id})">🗑</button></li>

            </ul>      
        `;
  }
  return html;
}


