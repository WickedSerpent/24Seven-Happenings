function updateViewHappenings() {
    document.getElementById('app').innerHTML = /*html*/ `
    ${happenMenuHtml()}
    <div class="container">
    <h3 class="boxOne0">Velg <span style="color: #FF5733">en</span> trekning!</h3>
        <div class="boxOne">

            
            <div class="boxOne2">
            ${getHappeningsHtml()}
            </div>
        
            <h3>Velg personer som skal være med i trekningen!</h3>
            <div class="boxOne3">
            <input type="checkbox"
            onclick="selectAllOrNone(this.checked)"
            ${getChecked(model.data.selectAll)}/> <span style="color: #0075ff; font-weight: 600;">Velg alle</span><br/>
            ${getUsers()}<br/>
            </div>
            <div  ><button class="trekkBtn"
            onclick=drawUser()
            >Trekk!</button>
            
        </div></div>
            
        <h3 class="boxtwo0">Trekninger</h3>
        <div class="boxTwo">

            <div id="box2"className="boxTwo2">

            ${getDoneHappening()}
            
            </div>
            
        </div>
    </div>
    `;
}
function updateViewDetails() {
    document.getElementById('app').innerHTML = /*html*/ `
    ${happenMenuHtml()}
    <div class="container">
    <h3 class="boxOne0">Velg <span style="color: #FF5733">en</span> trekning!</h3>
        <div class="boxOne">

            
            <div class="boxOne2">
            ${getHappeningsHtml()}
            </div>
        
            <h3>Velg personer som skal være med i trekningen!</h3>
            <div class="boxOne3">
            <input type="checkbox"
            onclick="selectAllOrNone(this.checked)"
            ${getChecked(model.data.selectAll)}/> <span style="color: #0075ff; font-weight: 600;">Velg alle</span><br/>
            ${getUsers()}<br/>
            </div>
            <div  ><button class="trekkBtn"
            onclick=drawUser()
            >Trekk!</button>
            
        </div></div>
            
        <h3 class="boxtwo0">Trekninger</h3>
        <div class="boxTwo">

            <div id="box2"className="boxTwo2">

            ${getDoneHappeningDetails()}
            
            </div>
            
        </div>
    </div>
    `;
}




function getHappeningsHtml() {
    let html = '';
    const happenings = model.data.happenings;
    for (let i = 0; i < happenings.length; i++) {
        let happening = happenings[i];
        html += /*html*/`
        <input type="checkbox"
        onclick="toggleHappeningSelected(${happening.id})" 
        ${getChecked(happening.isSelected)}/>
        ${happening.name}<br/>    
        `;
    }
    return html;
}

function getUsers() {
    let html = '';
    const users = model.data.users;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        html += /*html*/`
        <input type="checkbox" 
        onclick="togglePersonSelected(${user.id})" 
        ${getChecked(user.isSelected)}/> ${user.name} <br>
        `;
    }
    return html;
}

function createTextList(liste) {
    if (liste.length === 0) return '';
    if (liste.length === 1) return liste[0];

    const tekstListe = liste.join(', ');
    const indexSisteKomma = tekstListe.lastIndexOf(',');
    return tekstListe.substr(0, indexSisteKomma) +
        ' og ' + tekstListe.substr(indexSisteKomma + 1);

}

function getDoneHappening() {
    let html = '';
    let happenings = getDoneHappeningsCheckedHappening()
    let doneHappenings = model.data.doneHappenings
    if (happenings.length === 0){
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
        <h3>Kommentar: <span style="font-weight: 300;">${doneHappening.comment}</span><br>
        <hr>
        <form>
        <input oninvalid="this.setCustomValidity('Feltet kan ikke være tomt')" title="Skriv kommentar" required type="text" oninput="model.inputs.comment='<br>' + '- ' + this.value"/> 
        <button onclick=addComment(${doneHappening.id})>Legg til kommentar</button>
        </form>
        <button id="slette" onclick="deleteComments(${doneHappening.id})">Slette alle kommentarer</button>
        <hr>
        `;
    }
    return html;
}


function happenMenuHtml() {
    return /*html*/ `
          <div class="topMenu">
          <button class="btn--top" onclick="model.app.page='login'; updateView()">Admin</button>
          <label class="switch">
          <input type="checkbox" id="cd1"onchange="updateViewDetails()">
          <label for="cb1"
          <span class="slider"></span>
          </label>
          </div>
      `;
  }


function getDoneHappeningsCheckedHappening() {
    let checkedDoneHappenings = []
    let happenings = model.data.doneHappenings
    let happeningObj = getAllCheckedHappeningIds()
    for (x in happenings) {
        for (y in happeningObj) {
            if (happenings[x].happeningId === happeningObj[y]) {
                checkedDoneHappenings.push(happenings[x]);
            }
        }
    }
    return checkedDoneHappenings
}

function getAllCheckedHappeningIds() {
    let checkedHappenings = []
    let happenings = model.data.happenings
    for (happening of happenings) {
        if (happening.isSelected === true)
        checkedHappenings.push(happening.id)
    }
    return checkedHappenings

}

