function updateViewUsers() {
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuHtml()} 
        <h1>Alle brukere</h1>
        ${getAllUsers()}
        
        

        
    `;
}

function getAllUsers(){
    let html = '';
    const users = model.data.users;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        html += /*html*/`
            <ul>
            <li>Navn - ${user.name}<br></li>
            </ul>
        `;
    }
    return html;
}