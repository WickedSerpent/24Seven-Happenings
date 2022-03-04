function updateViewDoneHappening() {
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuHtml()}  
        <h2>Trekninger</h2>
        ${getHappening()}
       `;
}

// function getHappening(){
//     let html = '';
//     const happening = modelUsers.data.doneHappenings
//     for (let i = 0; i < happening.length; i++) {
//         const doneHappenings = happening[i];
//         html += /*html*/`

//             <h3>Trekning - ${doneHappening.name}</h3>
//             <h4>Trukket person - ${doneHappening.winners}</h4>
//             <h5>Trukket person - ${doneHappening.participants}</h5>
//         `;
//     }
//     return html;
// }

function getHappening() {
    let html = '';
    const happenings = model.data.doneHappenings;
    for (let i = 0; i < happenings.length; i++) {
        const doneHappening = happenings[i];
        html += /*html*/`
        <h3>Trekning - ${doneHappening.name}</h3>
        <h3>Trukket person - ${doneHappening.winners}</h3>
        <h3>Trukket fra disse personene med samme verdi - ${doneHappening.participants}</h3>
        `;
    }
    return html;
}