
updateViewDetails()

function updateViewDetails() {
        let html = document.getElementById('app')
        let id = getDoneHappeningIndexById(model.data.doneHappenings.id)
        let happenings = model.data.doneHappenings
      
        const dayNames = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
        const time = new Date(happenings[id].time);
        const dateText = getDateStringForDisplay(time);
        const dayName = dayNames[time.getDay()];
        const doneHappening = happenings[id];
        html += /*html*/`
        ${createMenuHtml()}
        <h3>Trekning - <span style="color: #FF5733;">${doneHappening.name}</span></h3>
        <h3>Trukket person - <span style="color: #6AB334;">${doneHappening.userDrawn}</span></h3>
        <h3>Trukket fra disse personene med færrest poeng:<br> 
        <span style="color: #0075ff;">${createTextList(doneHappening.participants)}</span></h3>
        <h4>Trukket: ${dayName} ${dateText}</h4>
        
        <hr>
        `;
        updateView()
    
    return html;
    }

  

// function getDoneHappeningDetails() {
//     let html = '';
//     let happenings = getDoneHappeningsCheckedHappening()
//     let doneHappenings = model.data.doneHappenings
//     if (happenings.length === 0){
//         happenings = doneHappenings
//     }
//     for (let i = 0; i < happenings.length; i++) {
//         let drawTime = model.data.doneHappenings
//         const dayNames = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
//         const time = new Date(drawTime[i].time);
//         const dateText = getDateStringForDisplay(time);
//         const dayName = dayNames[time.getDay()];
//         const doneHappening = happenings[i];
//         html += /*html*/`
//         <h3>Trekning - <span style="color: #FF5733;">${doneHappening.name}</span></h3>
//         <h3>Trukket person - <span style="color: #6AB334;">${doneHappening.userDrawn}</span></h3>
//         <h3>Trukket fra disse personene med færrest poeng:<br> 
//         <span style="color: #0075ff;">${createTextList(doneHappening.participants)}</span></h3>
//         <h4>Trukket: ${dayName} ${dateText}</h4>
//         <button onclick="deleteDoneHappening(${doneHappening.id})">Slett</button>
//         <hr>
//         `;
//     }
//     return html;
   
// } 