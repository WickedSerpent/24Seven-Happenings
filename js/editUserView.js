function updateViewUserEdit(){
    document.getElementById('app').innerHTML = /*html*/` 
    ${createMenuHtmlAdmin()}
    <div class="deleteAndEdit">
    <p>Endre navn på bruker <strong>${model.inputs.editUser.name}</strong> 
    <br/><br/>

    <input 
        type="text" 
        value="${model.inputs.editUser.name}"
        oninput="model.inputs.editUser.name=this.value"
    >
    <br/>
    ${getAllHappeningsEditUser()}

    <br/>    
    <button onclick="editUser()">Endre navn og gå tilbake til hjemmesiden</button>
    </div>
    
    
`;
}


function getAllHappeningsEditUser(){
    let html = '';
    const happenings = model.data.happenings;
    const userIds = model.data.userPoints;
    const id = model.inputs.editUser.userId;
    
    for (let i = 0; i < happenings.length; ) {
        for(let j = 0; j < userIds.length; j++) {
            if (userIds[j].userId === id) {

            const happening = happenings[i];
            const userId = userIds[j];
        html += /*html*/`
            <ul>
            <li>
                ${happening.name}
                    <input 
                    type="text" 
                    value="${userId.points}"
                    oninput="model.inputs.editUser.points=parseInt(this.value)"
                    >
                    <button onclick="editPoints(${userId.userId}, ${happening.id})" >Endre poeng </button>
            </li>
            </ul> 

        `
        i++}
    }   
};
    
    return html;
}