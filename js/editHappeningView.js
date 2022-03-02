function updateViewHappeningEdit(){
    document.getElementById('app').innerHTML = /*html*/` 
    ${createMenuHtml()}

    <p>Endre navn på arrangement <strong>${modelHappenings.inputs.editHappening.name}</strong> 
    <br/><br/>
    <input 
        type="text" 
        value="${modelHappenings.inputs.editHappening.name}"
        oninput="modelHappenings.inputs.editHappening.name=this.value"
    >
    <br/>
    <br/>    
    <button onclick="editHappening()">Endre</button>
`;
}
