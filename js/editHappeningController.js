function editHappening() {
    const happening = findHappeningById(model.inputs.editHappening.happeningId);
    happening.name = model.inputs.editHappening.name;
    model.app.page = 'home';
    updateView();
}