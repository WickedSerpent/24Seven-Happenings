updateView()
        function updateView(){
            const page = model.app.page;
            if(page === 'happening') updateViewHappenings();
            else if(page === 'login') loginView();
            else if(page === 'details') updateDetailsView(); 
            else if(page === 'deleteComment') deleteCommentView();
            setScrollDoneHappen(model.inputs.scrollPositionDoneHappen) 
        }

        function updateAdminView(){
            const page = model.app.page;
            if(page === 'admin') updateAdminViewHome();
            else if(page === 'happeningsAdmin') updateAdminViewHappenings();
            else if(page === 'editUser') updateViewUserEdit();
            else if(page === 'editHappening') updateViewHappeningEdit();
            else if(page === 'deleteUser') updateViewDeleteUser();
            else if(page === 'deleteHappening') updateViewDeleteHappening();
            else if(page === 'resetHappenings') resetHappeningsView();
            else if(page === 'login') loginView();
            else if(page === 'details') updateDetailsView();
            else if(page === 'deleteCommentAdmin') deleteCommentViewAdmin(); 
        }



