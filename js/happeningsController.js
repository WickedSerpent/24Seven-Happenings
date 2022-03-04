function goToHappeningPage(happeningId) {
    model.app.page = 'happening';
    model.data.happenings.id = happeningId;
    updateView()
}
