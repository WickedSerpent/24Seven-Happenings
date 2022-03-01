function createMenuHtml(){
    return /*html*/`
        <button onclick="model.app.page='home'; updateView()">Hjem</button>
        <button onclick="model.app.page='users'; updateView()">Alle brukere</button>
        <button onclick="model.app.page='admin'; updateView()">Administratorside</button>
        <button onclick="model.app.page='happening'; updateView()">Hold trekning</button>
        <hr>
    `;
}

function getMaxUserId(){
    let id = 0;
    for (let user of model.data.users) {
        if (user.id > id) id = user.id;
    }
    return id;
}

function getMaxHappeningId(){
    let id = 0;
    for (let happening of model.data.happenings) {
        if (happening.id > id) id = happening.id;
    }
    return id;
}

function findUserById(id){
    for(let user of model.data.users){
        if(user.id === id) return user;
    } 
    return null;
 
 }

 function getLowestPoints(){
     

}