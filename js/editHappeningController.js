function editHappening() {
    const happening = findUserById(modelHappenings.inputs.editHappening.Id);
    happening.name = modelHappenings.inputs.editHappening.name;
    modelUser.app.page = 'home';
    updateView();
}