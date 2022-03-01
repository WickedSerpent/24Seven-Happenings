const appDiv = document.getElementById("app");

let content = '';

showView();

function showView() {
    let html = /*html*/ `
    <button class="button">Administratorside</button>
    <button class="button">Arrangementsside</button>
    <button class="button">Brukerside</button>
    <button class="button">Unik bruker</button>
    <hr>
    <header>Arrangementsside</header>
    <div class="container">
        <div class="boxOne">
            <div>Arrangementer</div>
            <li>Arrangement<button class="inBox">Endre</button><button class="inBox">Slett</button></li>
            <li>Arrangement<button class="inBox">Endre</button><button class="inBox">Slett</button></li>
            <li>Arrangement<button class="inBox">Endre</button><button class="inBox">Slett</button></li>
            <li>Arrangement<button class="inBox">Endre</button><button class="inBox">Slett</button></li>
            <li>Arrangement<button class="inBox">Endre</button><button class="inBox">Slett</button></li>
            <li>Arrangement<button class="inBox">Endre</button><button class="inBox">Slett</button></li>
        </div>
        <div class="boxTwo">
            <div>Personer</div>
            <li>Navn<button class="inBox">Endre</button><button class="inBox">Slett</button></li>
            <li>Navn<button class="inBox">Endre</button><button class="inBox">Slett</button></li>
            <li>Navn<button class="inBox">Endre</button><button class="inBox">Slett</button></li>
            <li>Navn<button class="inBox">Endre</button><button class="inBox">Slett</button></li>
            <li>Navn<button class="inBox">Endre</button><button class="inBox">Slett</button></li>
        </div>
    </div>
    <input class="input--bottom1"type="text"><button class="btn--bottom1">Legg til nytt arrangement</button>
    <input class="input--bottom2"type="text"><button class="btn--bottom2">Legg til ny person</button>
    <div>${content}</div>
  `;

  appDiv.innerHTML = html;
}



