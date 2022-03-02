function updateViewUserEdit(){
    document.getElementById('app').innerHTML = /*html*/` 
    ${createMenuHtml()}

    <p>Endre navnet til <strong>${modelUsers.inputs.editUser.name}</strong> 
    <br/><br/>
    <input 
        type="text" 
        value="${modelUsers.inputs.editUser.name}"
        oninput="modelUsers.inputs.editUser.name=this.value"
    >
    <br/>
    <br/>    
    <button onclick="editUser()">Endre</button>
`;
}
