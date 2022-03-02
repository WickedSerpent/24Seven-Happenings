function editUser() {
    const user = findUserById(modelUsers.inputs.editUser.userId);
    user.name = modelUsers.inputs.editUser.name;
    modelUsers.app.page = 'home';
    updateView();
}