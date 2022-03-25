function updateViewHappeningEdit(){
    document.getElementById('app').innerHTML = /*html*/` 
    ${createMenuHtmlAdmin()}
    <div class="deleteAndEdit">
    <p>Endre navn på arrangement <strong>${model.inputs.editHappening.name}</strong> 
    <br/><br/>
    <input 
        class="inputFields"
        type="text" 
        value="${model.inputs.editHappening.name}"
        oninput="model.inputs.editHappening.name=this.value"
    >
    <br/><br/>  
    <button
    class="btn--small"
    style="cursor: pointer;"
    onclick="editHappening()"
    >Endre</button>
    </div>
`;
}
