function loginView(){
    document.getElementById('app').innerHTML = /*html*/`
    ${createMenuHtml()}
        <input 
        type="password"
        placeholder="Passord"
        />
        <button>Logg inn</button>
    
        `; 
}