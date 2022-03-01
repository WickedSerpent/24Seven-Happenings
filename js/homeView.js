
function getAllHappenings(){
    let html = '';
    const happenings = model.data.happenings;
    for (let i = 0; i < happenings.length; i++) {
        const happening = happenings[i];
        html += /*html*/`
        
        
            <ul>
            <li>${happening.name}</li>
            </ul><br>
            </div>

        `;
    }
    return html;
}
function getAllUsers(){
    let html = '';
    const users = model.data.users;
    for(let i = 0; i < users.length; i++) {
        const user = users[i];
        html += /*html*/`
            <ul>
            <li>${user.name}</li>
            </ul>
            </div>
        `;
    }
    return html;
}
    
