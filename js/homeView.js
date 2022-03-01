function updateViewHome() {
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuHtml()} 
        <h1>Her vises alle arrangementer!</h1>
        ${getAllHappenings()}
        
    `;

}


function getAllHappenings(){
    let html = '';
    const happenings = model.data.happenings;
    for (let i = 0; i < happenings.length; i++) {
        const happening = happenings[i];
        html += /*html*/`
            <ul>
            <li>${happening.name}</li>
            </ul>      
        `;
    }
    return html;
}