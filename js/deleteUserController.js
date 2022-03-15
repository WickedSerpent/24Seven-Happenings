function deleteUser(id){
    if (! model.inputs.deleteUser.areYouSure) return;
    const index = getUserIndexById(model.inputs.deleteUser.id);
    model.data.users.splice(index, 1);
    model.app.page='admin';
    model.inputs.deleteUser.areYouSure = false;
    model.data.userPoints = model.data.userPoints.filter(userid => userid.userId !== id)
    updateAdminView()
}