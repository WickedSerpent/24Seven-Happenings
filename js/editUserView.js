function updateViewUserEdit(){
    document.getElementById('app').innerHTML = /*html*/` 
    ${createMenuHtml()}
    <div class="deleteAndEdit">
    <p>Endre navn på bruker <strong>${model.inputs.editUser.name}</strong> 
    <br/><br/>
    <input 
        type="text" 
        value="${model.inputs.editUser.name}"
        oninput="model.inputs.editUser.name=this.value"
    >
    <br/>
    <br/>    
    <button onclick="editUser()">Endre</button>
    </div>
`;
}
