function updateViewUserEdit(){
    document.getElementById('app').innerHTML = /*html*/` 
    ${createMenuHtmlAdmin()}
    <div class="deleteAndEdit">
    <p>Endre navn på bruker <strong>${model.inputs.editUser.name}</strong> 
    <br/><br/>


    <ul>
        <li>
        <label>Navn</label> 
        <br> 
    <input 
        
        class="inputFields"
        type="text" 
        title="Endre navn på bruker"
        placeholder="Endre navn"
        value="${model.inputs.editUser.name}"
        oninput="model.inputs.editUser.name=this.value"
        oninvalid="this.setCustomValidity('Feltet kan ikke være tomt')"
        required
        
    >
        </li>
    </ul>
    <br/>
    ${getAllHappeningsEditUser()}

    <br/>    
    <button 
    class="btn--small"
    style="cursor: pointer;" 
    onclick="editUser()"
    >Lagre og gå tilbake</button>
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
                <br>
                    <input 
                    class="inputFields"
                    type="text"
                    title="Endre poeng til bruker"
                    placeholder="Endre poeng"
                    value="${userId.points}"
                    oninput="model.inputs.editUser.points=parseInt(this.value)"
                    onchange="editPoints(${userId.userId}, ${happening.id})"
                    oninvalid="this.setCustomValidity('Feltet kan ikke være tomt')"
                    required
                    >
            </li>
            </ul> 
        `
        i++}
    }   
};
    return html;
}