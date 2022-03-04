function editHappening() {
    const happening = findHappeningById(modelHappenings.inputs.editHappening.happeningId);
    happening.name = modelHappenings.inputs.editHappening.name;
    model.app.page = 'home';
    updateView();
}