function updateUserHappenings(){
    const users = model.data.users;
    for(let i=0; i < users.length; i++){
        for(let j = 0; j < model.data.happenings.length; j++){
        model.data.happenings[j].push(happening)
        }
    }
}   