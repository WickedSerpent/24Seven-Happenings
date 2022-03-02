function editHappening() {
    const happening = findUserById(modelHappening.inputs.editHappening.Id);
    happening.name = modelHappening.inputs.editHappening.name;
    modelUser.app.page = 'home';
    updateView();
}