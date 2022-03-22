function updateAdminViewHappenings() {
  document.getElementById('app').innerHTML = /*html*/ `
    ${happenMenuHtmlAdmin()}
        <div class="adminHappen">
            ${adminGetDoneHappening()}
            </div>
    `;
}

function adminGetHappeningsHtml() {
  let html = '';
  let happenings = model.data.happenings;
  happenings.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
  for (let i = 0; i < happenings.length; i++) {
    let happening = happenings[i];
    html += /*html*/ `
        <input type="checkbox"
        onclick="adminGetDoneHappening()" />
        ${happening.name}<br/>    
        `;
  }
  return html;
}

function adminGetUsers() {
  let html = '';
  let users = model.data.users;
  users.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
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
  let happenings = getDoneHappeningsCheckedHappening()
  let doneHappenings = model.data.doneHappenings
  if (happenings.length === 0) {
    happenings = doneHappenings
  }
  for (let i = 0; i < happenings.length; i++) {
    let drawTime = model.data.doneHappenings
    const dayNames = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
    const time = new Date(drawTime[i].time);
    const dateText = getDateStringForDisplay(time);
    const dayName = dayNames[time.getDay()];
    const doneHappening = happenings[i];
    html += /*html*/`
      <h3>Trekning - <span style="color: #FF5733;">${doneHappening.name}</span></h3> 
      <h3>Trukket person - <span style="color: #6AB334;">${doneHappening.userDrawn}</span></h3>
      <h3>Kommentar: <span style="font-weight: 500;">${doneHappening.comment}</span></h3>
      <h3>Trukket fra disse personene med færrest poeng:<br> 
      <span style="color: #0075ff;">${createTextList(doneHappening.participants)}</span></h3><br> 
      <h4>Trukket: ${dayName} ${dateText}</h4>
      <button class="slettDoneHappen" onclick="deleteDoneHappening(${doneHappening.id})">Slett</button>
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
          <button class="btn--top" onclick="model.app.page='happening'; logout()">Logg ut</button>
          </div>
      `;
}
