updateView()
        function updateView(){
            const page = modelUsers.app.page;
            if(page === 'home') updateViewHome();
            else if(page === 'happenings') updateViewHappenings();
            else if(page === 'editUser') updateViewEditUser();
            else if(page === 'editHappening') updateViewEditUser();
            else if(page === 'deleteUser') updateViewDeleteUser();
            else if(page === 'deleteHappening') updateViewDeleteHappening();
            else if(page === 'happening') updateViewHappeningPage();
            else if(page === 'doneHappening') updateViewDoneHappening();
        }