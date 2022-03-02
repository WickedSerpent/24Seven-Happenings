function goToHappeningPage(happeningId) {
    modelUsers.app.page = 'happening';
    modelHappenings.data.happenings.id = happeningId;
    updateView()
}
