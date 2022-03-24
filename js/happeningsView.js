function updateViewHappenings() {
  document.getElementById('app').innerHTML = /*html*/ `
    ${happenMenuHtml()}
    <div class="container">
      
      <div class="kolonne1">
      <h4 class="headerAboveOne">Velg <span style="color: #FF5733">en</span> trekning!</h4>
            <div class="happeningList">
            ${getHappeningsHtml()}
            </div>
            <div  ><button class="trekkBtn"
            onclick=drawUser()
            >Trekk!</button>
            </div>
      </div>


      <div class="kolonne2">
        <h4 class="headerAboveTwo">Trekninger</h4>
           <div id="doneHappenListId" onscroll="getScrollPoistion()" class="doneHappenList">
            ${getDoneHappening()}
            </div>
      </div>

      <div class="kolonne3">
            <h4 class="headerAboveThree">Velg personer som skal være med i trekningen!</h4>
            <div class="userList">
            <input type="checkbox"
            onclick="selectAllOrNone(this.checked)"
            ${getChecked(
    model.data.selectAll
  )}/> <span style="color: #0075ff; font-weight: 600;">Velg alle</span><br/>
            ${getUsers()}<br/>
            </div>
      </div>
  </div>

    `;
}

function getHappeningsHtml() {
  let html = '';
  let happenings = model.data.happenings;
  happenings.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
  for (let i = 0; i < happenings.length; i++) {
    let happening = happenings[i];
    html += /*html*/ `
      <div class="checkboxWrap">
        <input type="checkbox" class="HappeningCheckbox"
        onclick="toggleHappeningSelected(${happening.id})" 
        ${getChecked(happening.isSelected)}/>
        ${happening.name}<br/>    
        </div>
        `;
  }
  return html;
}

function getUsers() {
  let html = '';
  let users = model.data.users;
  users.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    html += /*html*/ `
    <div class="checkboxWrap2">
        <input type="checkbox" 
        onclick="togglePersonSelected(${user.id})" 
        ${getChecked(user.isSelected)}/> ${user.name} <br>
        </div>
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

function getDoneHappening() {
  let html = '';
  let happenings = getDoneHappeningsCheckedHappening();
  let doneHappenings = model.data.doneHappenings;
  if (happenings.length === 0) {
    happenings = doneHappenings;
  }
  for (let i = 0; i < happenings.length; i++) {
    let comments = happenings[i].comments
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
        <h4>Trekning - <span style="color: #FF5733;">${
          doneHappening.name
        }</span>
        </h4> 
       
        <h3>Trukket person - <span style="color: #6AB334;">${
          doneHappening.userDrawn
        }</span></h3>
        <label class="switch">
        <input type="checkbox" class="cb1" onclick="toggleDetailsSelected(${
          doneHappening.id
        })"${getChecked(doneHappening.detailsShown)}">
        <span class="slider"></span>
        </label>`

        
        if (doneHappening.detailsShown === true){
          html += /*html*/`
        <div>
        <h4>Trukket: ${dayName} ${dateText}</h4>
        <h3>Kommentarer</h3>`
      for (let j = 0; j < comments.length; j++) {
        const commentTime = new Date(comments[j].commentTime);
        const commentTimeText = getDateStringForDisplay(commentTime);
        const commentDayName = dayNames[time.getDay()]; 
        let comment = comments[j]
        html += /*html*/`
          <span style="font-weight: 500;">- ${comment.comment} 
          <span style="font-weight: 400; font-size: 10px;">(${commentDayName} ${commentTimeText})</span></span><br />
        `;
      }

      html += /*html*/ `
        <br />
        <form>
        <input oninvalid="this.setCustomValidity('Feltet kan ikke være tomt')" 
        title="Skriv kommentar" 
        required type="text" 
        oninput="model.inputs.comment=this.value"/> 
        
        <button onclick=addComment(${doneHappening.id
        })>Legg til kommentar</button>
        </form>
        <button id="slette" onclick="goToDeleteCommentPage(${doneHappening.id
        })">Slette en kommentar</button>
        <hr>
        </div> 
        `;}else{html +=`<hr>`}
  }
  return html;
}

function showDetails(id) {
  let details = document.getElementById('details--' + id);
  if (details.style.display === 'none') {
    details.style.display = 'block';
  } else {
    details.style.display = 'none';
  }
}

function happenMenuHtml() {
  return /*html*/ `
          <div class="topMenu">
          <button class="btn--top" onclick="model.app.page='login'; updateView()">Admin</button>
          </div>
      `;
}

function getDoneHappeningsCheckedHappening() {
  let checkedDoneHappenings = [];
  let happenings = model.data.doneHappenings;
  let happeningObj = getAllCheckedHappeningIds();
  for (x in happenings) {
    for (y in happeningObj) {
      if (happenings[x].happeningId === happeningObj[y]) {
        checkedDoneHappenings.push(happenings[x]);
      }
    }
  }
  return checkedDoneHappenings;
}

function getAllCheckedHappeningIds() {
  let checkedHappenings = [];
  let happenings = model.data.happenings;
  for (happening of happenings) {
    if (happening.isSelected === true) checkedHappenings.push(happening.id);
  }
  return checkedHappenings;
}
