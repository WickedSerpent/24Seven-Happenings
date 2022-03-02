function updateViewDeleteHappening(){
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuHtml()}  
        <h2> Slett </h2>
        ${createDeleteHappeningHtml()}
        <input
            type="checkbox"
            oninput="modelHappenings.inputs.deleteHappening.areYouSure = this.checked"
            ${modelHappenings.inputs.deleteHappening.areYouSure ? 'checked' : ''}
            /> Er du sikker på at du vil slette?<br>
        <button onclick="deleteHappening()"> Slett! </button>
       `;
}

function createDeleteHappeningHtml(){
    const happeningId = modelHappenings.inputs.deleteHappening.id;
    const happening = findHappeningById(happeningId);
    return /*html*/`
        Navn: ${happening.name}<br>
    `;
}