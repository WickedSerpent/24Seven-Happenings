function deleteUser(){
    if (! modelUsers.inputs.deleteUser.areYouSure) return;
    const index = findUserIndexById(modelUsers.inputs.deleteUser.id);
    modelUsers.data.allUsers.splice(index, 1);
    modelUsers.app.page='home';
    modelUsers.inputs.deleteUser.areYouSure = false;
    updateView()
}