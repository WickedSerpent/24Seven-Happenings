function updateAdminViewHome() {
  document.getElementById('app').innerHTML = /*html*/ `
    ${createMenuHtmlAdmin()}
    
    <div class="containerHome">
        <h3 class="headerHome">Arrangementer</h3>

        
        <div class="boxOneHome">

        ${getAllHappeningsHome()}
        </div>
        <div class="addArrangementBox">
        <form>
        <input 
        oninput="model.inputs.newHappening.name = this.value" 
        placeholder="Legg til arrangement"
        type="text"
        onfocus="this.value=''"
        oninvalid="this.setCustomValidity('Feltet kan ikke være tomt')"
        title="Skriv navn på arrangement"
        required
        >
        
        <button title="Legg til" class="addBtn" onclick="createNewHappening()">+</button>
        </form>
        </div>

        <h3 class="headerHome2">Personer</h3>
        
        <div class="boxTwoHome">

        ${getusersHome()}
        </div>
        <div class="addPersonBox">
        <form>
        <input 
        oninput="model.inputs.newUser.name = this.value" 
        placeholder="Legg til person" 
        type="text"
        onfocus="this.value=''"
        oninvalid="this.setCustomValidity('Feltet kan ikke være tomt')"
        title="Skriv navn på person"
        required
        >
        <button title="Legg til" class="addBtn" onclick="createNewUser()">+</button>
        </form>

        </div>
    </div>
        `;
}

function getusersHome() {
  let html = '';
  const users = model.data.users;
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
  const happenings = model.data.happenings;
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
