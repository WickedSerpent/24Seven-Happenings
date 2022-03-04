function selectAllOrNone(selectAll) {
    model.data.selectAll = selectAll;
    for (let user of model.data.allUsers) {
      user.isSelected = selectAll;
    }
    updateView();
  }


function getChecked(isSelected) {
    return isSelected ? 'checked="checked"' : '';
  }

function togglePersonSelected(id) {
    const user = findUserById(id);
    user.isSelected = !user.isSelected;
    updateView();
  }


function getCheckedUsers(){
  let happening = model.data.happenings.users;
  let users = model.data.allUsers;
  let checkedUsers = users.filter(user => {
    return user.isSelected === true
  })
  return checkedUsers;
  }

function drawUser(){
  let listOfUsers = findUsersWithLowestPoint()
  let winner = listOfUsers[Math.floor(Math.random()*listOfUsers.length)];
  console.log(winner)
}