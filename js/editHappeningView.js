function updateViewHappeningEdit(){
    document.getElementById('app').innerHTML = /*html*/` 
    ${createMenuHtml()}

    <p>Endre happening <strong>${modelHappenings.data.happenings.name}</strong> 
    <br/><br/>
    <input 
        type="text" 
        value="${modelHappenings.data.happenings.name}"
        oninput="modelHappenings.inputs.editHappening.name=this.value"
    >
    <br/>
    <br/>    
    <button onclick="editHappening()">Endre</button>
`;
}
