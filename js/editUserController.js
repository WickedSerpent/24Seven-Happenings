function editUser() {
    const user = findUserById(model.inputs.editUser.userId);
    user.name = model.inputs.editUser.name;
    model.app.page = 'admin';
    updateView();
}