function deleteHappening(){
    if (! modelHappenings.inputs.deleteHappening.areYouSure) return;
    const index = findHappeningIndexById(modelHappenings.inputs.deleteHappening.id);
    modelHappenings.data.happenings.splice(index, 1);
    modelUsers.app.page='home';
    modelHappenings.inputs.deleteHappening.areYouSure = false;
    updateView()
}