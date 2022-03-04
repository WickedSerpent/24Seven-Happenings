function updateViewHappenings(){
    document.getElementById('app').innerHTML = /*html*/ `
    ${createMenuHtml()}
    <div class="box--home">
    <h2>Velg en trekning!</h2>
    ${getHappeningWithButton()}
    </div>
    `;
}

function getHappeningWithButton(){
    let html = '';
    const happenings = model.data.happenings;
    for (let i = 0; i < happenings.length; i++) {
        let happening = happenings[i];
        html += /*html*/`
            <ul>
            <button onclick="goToHappeningPage(${happening.id})">${happening.name}</button> 
            </ul>      
        `;
    }
    return html;
}