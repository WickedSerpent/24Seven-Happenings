updateView()
        function updateView(){
            const page = model.app.page;
            if(page === 'admin') updateViewAdmin();
            else if(page === 'happening') updateViewHappening();
            else if(page === 'home') updateViewHome();
            else if(page === 'users') updateViewUsers();
            else if(page === 'editUser') updateViewEditUser();
            else if(page === 'deleteUser') updateViewDeleteUser();
        }