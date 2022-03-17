function loginView(){
    document.getElementById('app').innerHTML = /*html*/`
    ${createMenuHtml()}
    <form>
        <input
        id="password"
        type="password"
        placeholder="Passord"
        required
        />
        <input type="submit" onclick=validate() value="Logg inn">
    </form>
        `; document.getElementById("password").focus();
}