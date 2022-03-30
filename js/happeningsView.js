function updateViewHappenings() {
  document.getElementById('app').innerHTML = /*html*/ `
    ${happenMenuHtml()}
    <div class="container">
      <div class="row">
        <div class="mainColumn1">
          <div class="dateAndDrawColumn">
           <h4 class="headerAboveDate">Skal utføres:</h4><br>
            <div class="datoBoxWrap">
            dato -

            <input
            class="setDateInput"
            type="date" 
            value="${model.inputs.drawDate}" 
            oninput="model.inputs.drawDate = (this.value),
            toggleDateSelected()"
            min="2022-03-01"/>
            </div><br>

            <div class="checkboxWrap">
            <span style="color:#FF5733;">
            Umiddelbart -</span>
            <input type="checkbox" 
            onclick="toggleDoAsapSelected()"
            ${getChecked(model.inputs.doAsap)}/>
            </div><br>

            <div class="checkboxWrap">
            <span style="color: blue">Innen en uke</span> -
            <input type="checkbox"
            onclick="toggleDoWithinWeekSelected()"
            ${getChecked(model.inputs.doWithinWeek)}/>
            </div><br>

            Antall <span style="color: #FF5733">trekninger:</span>
            <div class="dateInputWrap">
            <input
            type="number"
            class="drawTimesInput"
            min="1"
            size="1" 
            value="${model.inputs.drawCount}"
            onchange="model.inputs.drawCount=parseInt(this.value)"/>
            </div>
            <button class="btn--corner" 
            onclick="drawUser()">Trekk</button>
          </div>
        
          
          <div class="happeningsColumn">
            <h4 class="headerAboveHappen">Velg <span style="color: #FF5733">en</span> trekning!</h4>      
            <div class="happeningList">
            ${getHappeningsHtml()}
            </div>
          </div>    
          
      
          <div class="userColumn">
            <h4 class="headerAboveUsers">Velg <span style="color: #FF5733">personer</span> som skal være med i trekningen!</h4>
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
        
      
        <div class="doneHappeningsColumn">
          <h4 class="headerAboveDoneHappen"><span style="color: #FF5733">Trekninger</span></h4>
          <div id="doneHappenListId" onscroll="getScrollPoistion()" 
          class="doneHappenList">
          ${getDoneHappening()}
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
        <input type="checkbox" class="HappeningCheckbox"
        onclick="toggleHappeningSelected(${happening.id})" 
        ${getChecked(happening.isSelected)}/>
        ${happening.name}<br/>
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
    // doDate.setDate(doDate.getDate()+7);
    const time = new Date(drawTime[i].time);
    const dateText = getDateStringForDisplay(time);
    const dayName = dayNames[time.getDay()];
    const doneHappening = happenings[i];
    const date = doneHappening.doDate
    html += /*html*/ `
    <div class="doneHappeningBox">
    <h3>Trekning - <span style="color: #FF5733;">${doneHappening.name
    }</span>
    </h3>
    <label class="switch">
    <input 
    type="checkbox" 
    class="cb1" 
    onclick="toggleDetailsSelected(${doneHappening.id})"${getChecked(doneHappening.detailsShown)}">
    <span class="slider"></span>
    </label>
    
    <h4>Trukket person - <span style="color: #6AB334;">${doneHappening.userDrawn
    }</span></h4>
      `;
    if (date === 'Så fort som mulig') {
      html += /*html*/ `
      <h4 id=>Utføres - 
      <span style="color: #0075ff">Så fort som mulig</span></h4>
      `;
    }

    if (date === 'Innen en uke') {
      time.setDate(time.getDate() + 7)
      const doWithinText = getDateStringForDisplay(time);
      const doWithinName = dayNames[time.getDay()];
      html += /*html*/ `
      <h4 id=>
      Utføres innen - 
      <span style="color: #0075ff">${doWithinName} ${doWithinText}
      </span>
      </h4>
      `;
    }

    if (date !== null && date !== 'Så fort som mulig' && date !== 'Innen en uke') {
      const doDate = new Date(date)
      let doDateText = getDateStringForDisplay(doDate).substr(0, 9)
      let doDateName = dayNames[doDate.getDay()]
      html += /*html*/ `
        <h4 id=>Utføres - 
        <span style="color: #0075ff">${doDateName} ${doDateText}</span></h4>
        `;
    }

    if (doneHappening.detailsShown === true) {
      html += /*html*/`
      <div>
      <h4>Kommentarer - </h4>`
      for (let j = 0; j < comments.length; j++) {
        let comment = comments[j]
        if(comment.comment === 'Utført' || comment.comment === 'utført'){
          html += /*html*/`
          <img src="img/greenCheck.png" class="checkmark" alt=""/> 
          `;
        }
        const commentTime = new Date(comments[j].commentTime);
        const commentTimeText = getDateStringForDisplay(commentTime);
        const commentDayName = dayNames[commentTime.getDay()];
        html += /*html*/`
        <span style="font-weight: 500;">- ${comment.comment} 
        <span style="font-weight: 400; font-size: 10px;">(${commentDayName} ${commentTimeText})</span></span><br />
        `;
        
      }

      html += /*html*/ `
          <br/>
          <form>
          <input 
          class="inputFields"
          oninvalid="this.setCustomValidity('Feltet kan ikke være tomt')" 
          title="Skriv kommentar" 
          required type="text" 
          oninput="model.inputs.comment=this.value"/> 
          
        <button class="btn--small" onclick=addComment(${doneHappening.id
        })>Legg til kommentar</button>
        <button class="btn--small" id="slette" onclick="goToDeleteCommentPage(${doneHappening.id
        })">Slett en kommentar</button>
        </form>
        <h4>Trukket - ${dayName} ${dateText}</h4>
        </div> 
        `;
    }
    // else { 
    //   html += /*html*/`
    //   `; }
    html += /*html*/`<button class="btn--top"
        title="Detaljer" id="detailsSwich" 
        onclick=(toggleDetailsSelected(${doneHappening.id})"
        ${getChecked(doneHappening.detailsShown)}>Detaljer</button>
        <hr>
        </div>
        `;
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
