function goToHappeningPage(happeningId) {
    model.app.page = 'happening';
    modelHappenings.data.happenings.id = happeningId;
    updateView()
}
