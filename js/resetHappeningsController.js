function resetHappenings(){
  
    if (! model.inputs.resetDoneHappenings.areYouSure) return;
    model.data.doneHappenings = []
    model.inputs.resetDoneHappenings.areYouSure = false;
    model.app.page = 'happening'
    updateView()
}
/* Jeg vil prøve å targete happeningID via checked checkboxes for å gjøre resetten unik til den happeningen, 
kan kanskje ha en egen funk til det tenker jeg så vi kan knytte de til separerte knapper*/

// backup: 

// function resetHappenings(){
//     if (! model.inputs.resetDoneHappenings.areYouSure) return;
//     model.data.doneHappenings = []
//     model.inputs.resetDoneHappenings.areYouSure = false;
//     model.app.page = 'happening'
//     updateView()
// }

  // const id = getDoneHappeningIndexById(model.data.doneHappenings.id); && happening.isSelected === true 