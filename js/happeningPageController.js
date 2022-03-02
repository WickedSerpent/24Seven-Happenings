function selectAllOrNone(selectAll) {
    modelHappenings.data.happenings.selectAll = selectAll;
    for (let user of model.data.happenings) {
      user.isSelected = selectAll;
    }
    updateView();
  }

function togglePersonSelected(id) {
    const user = findUserById(id);
    user.isSelected = !user.isSelected;
    updateView();
  }

function getChecked(isSelected) {
    return isSelected ? 'checked="checked"' : '';
  }