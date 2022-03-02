function updateViewHappenings(){
    document.getElementById('app').innerHTML = /*html*/ `
    ${createMenuHtml()}
    <h2>Velg en trekning!</h2>
    ${getAllHappenings()}
    `;
}

function getAllHappenings(){
    let html = '';
    const happenings = modelHappenings.data.happenings;
    for (let i = 0; i < happenings.length; i++) {
        const happening = happenings[i];
        html += /*html*/`
            <ul>
            <button onclick="goToHappeningPage(${happening.id})">${happening.name}</button> 
            </ul>      
        `;
    }
    return html;
}