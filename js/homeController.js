function updateViewHome() {
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuHtml()} 
        <h1>Her vises alle arrangementer!</h1>
        <div class="boxOne">
        ${getAllHappenings()}
        </div>
        <div class="boxTwo">
        ${getAllUsers()}
        </div>
    `;

}