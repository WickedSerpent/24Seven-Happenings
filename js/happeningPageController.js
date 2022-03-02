
function selectAll(SA){
  modelUsers.inputs.selectAll = SA;
  for(let person of modelUsers.data.allUsers){
      person.isSelected = SA;
  }
  updateView();
}

function toggleSelected(id){
  const user = findUser(id);
  user.isSelected = !user.isSelected;
  updateView();
}

function findUser(id){
  return modelUsers.data.allUsers.find(p => p.id === id);
}

// function selectAllOrNone(selectAll) {
//   const selectAll = modelUsers.data.allUsers;
//     for (let user of selectAll){
//       user.isSelected = selectAll;
//     }
//     updateView();
//   }

// function togglePersonSelected(id) {
//     const user = findUserById(id);
//     user.isSelected = !user.isSelected;
//     updateView();
//   }

