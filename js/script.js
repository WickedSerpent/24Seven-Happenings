updateView()
        function updateView(){
            const page = model.app.page;
            if(page === 'home') updateViewHome();
            else if(page === 'happenings') updateViewHappenings();
            else if(page === 'editUser') updateViewUserEdit();
            else if(page === 'editHappening') updateViewHappeningEdit();
            else if(page === 'deleteUser') updateViewDeleteUser();
            else if(page === 'deleteHappening') updateViewDeleteHappening();
            else if(page === 'happening') updateViewHappeningPage();
            else if(page === 'doneHappening') updateViewDoneHappening();
        }