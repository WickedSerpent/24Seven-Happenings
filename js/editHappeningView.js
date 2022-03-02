function updateViewHappeningEdit(){
    document.getElementById('app').innerHTML = /*html*/` 
    ${createMenuHtml()}

    <p>Endre happening <strong>${model.data.happenings.name}</strong> 
    <br/><br/>
    <input 
        type="text" 
        value="${model.data.happenings.name}"
        oninput="model.inputs.editUser.name=this.value"
    >
    <br/>
    <br/>    
    <button onclick="editUser()">Endre</button>
`;
}
