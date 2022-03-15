function loginView(){
    document.getElementById('app').innerHTML = /*html*/`
    ${createMenuHtml()}
    <div>
        <input
        id="password"
        type="password"
        placeholder="Passord"
        required
        />
        <input type="submit" onclick=validate() value="Logg inn">
    </div>
        `; 
}