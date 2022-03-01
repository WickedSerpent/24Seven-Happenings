function deleteHappening(){
    if (! model.inputs.deleteHappening.areYouSure) return;
    const index = findHappeningIndexById(model.inputs.deleteHappening.id);
    model.data.happenings.splice(index, 1);
    model.app.page='admin';
    model.inputs.deleteHappening.areYouSure = false;
    updateView()
}