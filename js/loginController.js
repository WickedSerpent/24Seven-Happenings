function validate(){

let password = document.getElementById("password").value;

if (password == "temp123"){
model.app.page = 'admin'; 
} else {
    alert("Feil passord!")
}
updateAdminView();
}