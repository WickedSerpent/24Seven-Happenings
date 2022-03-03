function createNewUser(){
    modelUsers.app.page='home';
    const user = {};
    user.id = getMaxUserId() + 1;
    user.name = modelUsers.inputs.newUser.name
    user.points = 0;
    user.isSelected = false;
    user.happeningArray = modelHappenings.data.happenings
    modelUsers.data.allUsers.push(user);
    updateUserHappenings();
    updateView()
}

function createNewHappening(){
    modelUsers.app.page='home';
    let allUsers = modelUsers.data.allUsers;
    let haveUsers = allUsers.length > 0 ? true : false
    let happeningExists = false;
    const happening = {};
    happening.id = getMaxHappeningId() + 1;
    happening.name = modelHappenings.inputs.newHappening.name
    happening.points = '' ;
    modelHappenings.data.happenings.push(happening);
    if(haveUsers){
        for(let I = 0; I < allUsers[0].happeningArray.length && !happeningExists; I++){
            let happeningName = allUsers[0].happeningArray[I].name;
        }if(happeningName === happening.name){
                happeningExists = true;
            }
            if(happeningExists === true){alert('Du prøver å legge inn flere identiske happenings')
        }else{
                for(user of allUsers){ 
                allUsers[I].happeningArray.push(happening);
                
        }
        updateUserHappenings();}
        updateView()
    }
}

function updateUserHappenings(){
for(let i=0; i < allUsers.length; i++){
    allUsers[i].happeningArray = []
    for(let j = 0; j < modelHappenings.data.happenings.length; j++){
    allUsers[i].happeningArray.push(modelHappenings.data.happenings)
    }
}
}


//     if(happeningExists === true)else{
//         for(user of allUsers) {
//             user.happeningArray.push();
//         }
//     }
//     updateView()
//     console.log('test')
// }
// if(arragementAlreadyExist === true) {
//     console.error("Oisann! Du prøver å legge til arrangement som allerede finnes. Det er ikke lov.");
// }


function goToDeleteUserPage(userId) {
    modelUsers.app.page = 'deleteUser';
    modelUsers.inputs.deleteUser.id = userId;
    updateView()
}

function goToDeleteHappeningPage(happeningId) {
    modelUsers.app.page = 'deleteHappening';
    modelHappenings.inputs.deleteHappening.id = happeningId;
    updateView()
}

function goToEditUserPage(userId){
    modelUsers.app.page = 'editUser';
    modelUsers.inputs.editUser.userId = userId;
    const user = findUserById(userId);
    modelUsers.inputs.editUser.name = user.name;
    updateView();
}

function goToEditHappeningPage(happeningId){
    modelUsers.app.page = 'editHappening';
    modelHappenings.inputs.editHappening.happeningId = happeningId;
    const happening = findHappeningById(happeningId);
    modelHappenings.inputs.editHappening.name = happening.name;
    updateView();
}