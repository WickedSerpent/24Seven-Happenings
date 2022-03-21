function updateAdminViewHappenings() {
  document.getElementById('app').innerHTML = /*html*/ `
    ${happenMenuHtmlAdmin()}
    <div class="container">
    <h3 class="boxOne0">Velg <span style="color: #FF5733">en</span> trekning!</h3>
        <div class="boxOne">

            
            <div class="boxOne2">
            ${adminGetHappeningsHtml()}
            </div>
        
            <h3>Velg personer som skal være med i trekningen!</h3>
            <div class="boxOne3">
            <input type="checkbox"
            onclick="adminSelectAllOrNone(this.checked)"
            ${adminGetChecked(
              model.data.selectAll
            )}/> <span style="color: #0075ff; font-weight: 600;">Velg alle</span><br/>
            ${adminGetUsers()}<br/>
            </div>
            <div title="Trekk en person" class="trekkBtn"><button style="
            width: 200px; 
            height: 40px; 
            font-size: 20px;
            cursor: pointer;
            font-weight: bold;"
            onclick=adminDrawUser()
            >Trekk!</button>
            
        </div></div>
            
        <h3 class="boxtwo0">Trekninger</h3>
        <div class="boxTwo">

            <div className="boxTwo2">

            ${adminGetDoneHappening()}
    </div>
    `;
}

function adminGetHappeningsHtml() {
  let html = '';
  const happenings = model.data.happenings;
  for (let i = 0; i < happenings.length; i++) {
    let happening = happenings[i];
    html += /*html*/ `
        <input type="checkbox"
        onclick="adminToggleHappeningSelected(${happening.id})" 
        ${adminGetChecked(happening.isSelected)}/>
        ${happening.name}<br/>    
        `;
  }
  return html;
}

function adminGetUsers() {
  let html = '';
  const users = model.data.users;
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    html += /*html*/ `
        <input type="checkbox" 
        onclick="adminTogglePersonSelected(${user.id})" 
        ${adminGetChecked(user.isSelected)}/> ${user.name} <br>
        `;
  }
  return html;
}

function createTextList(liste) {
  if (liste.length === 0) return '';
  if (liste.length === 1) return liste[0];

  const tekstListe = liste.join(', ');
  const indexSisteKomma = tekstListe.lastIndexOf(',');
  return (
    tekstListe.substr(0, indexSisteKomma) +
    ' og ' +
    tekstListe.substr(indexSisteKomma + 1)
  );
}

function adminGetDoneHappening() {
  let html = '';
  let happenings = adminGetDoneHappeningsCheckedHappening();
  let doneHappenings = model.data.doneHappenings;
  if (happenings.length === 0) {
    happenings = doneHappenings;
  }
  for (let i = 0; i < happenings.length; i++) {
    let drawTime = model.data.doneHappenings;
    const dayNames = [
      'Søndag',
      'Mandag',
      'Tirsdag',
      'Onsdag',
      'Torsdag',
      'Fredag',
      'Lørdag',
    ];
    const time = new Date(drawTime[i].time);
    const dateText = getDateStringForDisplay(time);
    const dayName = dayNames[time.getDay()];
    const doneHappening = happenings[i];
    html += /*html*/ `
        <h3>Trekning - <span style="color: #FF5733;">${doneHappening.name}</span></h3>
        <h3>Trukket person - <span style="color: #6AB334;">${doneHappening.userDrawn}</span></h3>
        <h3>Kommentar: <span style="font-weight: 300;">${doneHappening.comment}</span><br> 
        <h4>Trukket: ${dayName} ${dateText}</h4>
        <button title="Slett happening" class="btnDetailsAndDel" onclick="deleteDoneHappening(${doneHappening.id})">🗑</button>
        <button title="Detaljer (coming soon)" class="btnDetailsAndDel" onclick=updateDetailsView()>🛈</button> 
        <form>
        <input type="text" oninput="model.inputs.comment='<br>' + '- ' + this.value"/> 
        <button onclick=addCommentAdmin(${doneHappening.id})>Legg til kommentar</button>
        </form>
        <hr>
        `;
  }
  return html;
}

function adminGetDoneHappeningsCheckedHappening() {
  let checkedDoneHappenings = [];
  let happenings = model.data.doneHappenings;
  let happeningObj = adminGetAllCheckedHappeningIds();
  for (x in happenings) {
    for (y in happeningObj) {
      if (happenings[x].happeningId === happeningObj[y]) {
        checkedDoneHappenings.push(happenings[x]);
      }
    }
  }
  return checkedDoneHappenings;
}

function adminGetAllCheckedHappeningIds() {
  let checkedHappenings = [];
  let happenings = model.data.happenings;
  for (happening of happenings) {
    if (happening.isSelected === true) checkedHappenings.push(happening.id);
  }
  return checkedHappenings;
}
function happenMenuHtmlAdmin() {
  return /*html*/ `
          <div class="topMenu">
          <button class="btn--top" onclick="model.app.page='admin'; updateAdminView()">Administrer</button>
          <button class="btn--top" onclick="model.app.page='happeningsAdmin'; updateAdminView()">Trekningsside</button>
          <button class="btn--top" onclick="model.app.page='resetHappenings'; updateAdminView()">Tilbakestill trekninger</button>
          <button title="Detaljer (coming soon)" class="btn--top" onclick="model.app.page='details'; updateAdminView()">🛈</button>
          <button class="btn--top" onclick="model.app.page='happening'; logout()">Logg ut</button>
          </div>
      `;
}
