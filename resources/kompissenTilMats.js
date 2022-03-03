/*
 __  __           __    __                                                                                         __      
/\ \/\ \         /\ \__/\ \__                                                                                     /\ \__   
\ \ `\\ \  __  __\ \ ,_\ \ ,_\         __     _ __   _ __    __      ___      __      __    ___ ___      __    ___\ \ ,_\  
 \ \ , ` \/\ \/\ \\ \ \/\ \ \/       /'__`\  /\`'__\/\`'__\/'__`\  /' _ `\  /'_ `\  /'__`\/' __` __`\  /'__`\/' _ `\ \ \/  
  \ \ \`\ \ \ \_\ \\ \ \_\ \ \_     /\ \L\.\_\ \ \/ \ \ \//\ \L\.\_/\ \/\ \/\ \L\ \/\  __//\ \/\ \/\ \/\  __//\ \/\ \ \ \_ 
   \ \_\ \_\/`____ \\ \__\\ \__\    \ \__/.\_\\ \_\  \ \_\\ \__/.\_\ \_\ \_\ \____ \ \____\ \_\ \_\ \_\ \____\ \_\ \_\ \__\
    \/_/\/_/`/___/> \\/__/ \/__/     \/__/\/_/ \/_/   \/_/ \/__/\/_/\/_/\/_/\/___L\ \/____/\/_/\/_/\/_/\/____/\/_/\/_/\/__/
               /\___/                                                         /\____/                                      
               \/__/                                                          \_/__/                                       



Når du lager et nytt arrangement så må alle personer (allUsers) oppdateres med det nye arrangementet
I enkle trekk blir det:
1. Loop gjennom allUsers
2. Dytt inn nytt arrangement
    2.1 Man må sjekke at arrangementet allerede eksisterer. Hvis ikke får man duplikater og det vil bli rot
*/


let user1 = {id: 1, name: "mats", age: 27, arrangementsArray: [{name: "Kahoot", currentScore: 2}]}
let user2 = {id: 2, name: "håkon", age: 28, arrangementsArray: [{name: "Kahoot", currentScore: 1}]}
let user3 = {id: 3, name: "truls", age: 32, arrangementsArray: [{name: "Kahoot", currentScore: 0}]}

let allUsers = [user1, user2, user3]

console.log(JSON.stringify(allUsers, null, 2)); // <--- Dette er bare for å printe i consolen og gjøre det fint

let newArrangement = {name: "Kjøpe pizza", currentScore: 0}

// Først må vi sjekke om arrangementet ikke finnes allerede
// Vi kan bare velge ut hvem som helst av personene våre siden alle har samme arrangementer
// Først så sjekker vi om vi har noen personer
// Så sjekker vi om personen har et arrangement med samme navn om i det nye arragemenetet vårt (newArrangement)
// Bonus oppgave: Prøv å forhindre at man ikke man ikke har mellomrom. F.eks hvis "Kahoot" finnes så skal ikke " Kahoot " med mellomrom godkjennes!
let haveusers = allUsers.length > 0 ? true : false
let arragementAlreadyExist = false;
if(haveusers) {
    for(let arragementIndex = 0; arragementIndex< allUsers[0].arrangementsArray.length && !arragementAlreadyExist; arragementIndex++) {
        let arragementName = allUsers[0].arrangementsArray[arragementIndex].name;
        if(arragementName === newArrangement.name) {
            arragementAlreadyExist = true;
        }
    }
}

if(arragementAlreadyExist === true) {
    console.error("Oisann! Du prøver å legge til arrangement som allerede finnes. Det er ikke lov.");
}
// Nå kan vi bare dytte det nye arrangementet inn i alle user objektene
else {
    for(user of allUsers) { // <-- Dette er bare en annen for loop enn den ovenfor. Jeg syntes denne er mer clean
        user.arrangementsArray.push(newArrangement);
    }
    console.log("------------ nytt arrangement ---------------")
    console.log(JSON.stringify(allUsers, null, 2));
}

/*

 __  __                                                              
/\ \/\ \                                                             
\ \ `\\ \  __  __      _____      __   _ __   ____    ___     ___    
 \ \ , ` \/\ \/\ \    /\ '__`\  /'__`\/\`'__\/',__\  / __`\ /' _ `\  
  \ \ \`\ \ \ \_\ \   \ \ \L\ \/\  __/\ \ \//\__, `\/\ \L\ \/\ \/\ \ 
   \ \_\ \_\/`____ \   \ \ ,__/\ \____\\ \_\\/\____/\ \____/\ \_\ \_\
    \/_/\/_/`/___/> \   \ \ \/  \/____/ \/_/ \/___/  \/___/  \/_/\/_/
               /\___/    \ \_\                                       
               \/__/      \/_/                                       

Når en ny person legges til må vi hente hente ut scoren til alle personene og lage en verdi for den nye personen.
Her kan man ta gjennomsnitt, median eller bare laveste scoren som finnes. I dette eksempelet vil vi ta gjennomsnittet
*/

let newPerson = {id: 4, name: "Mari", age: 69, arrangementsArray: []}
let arrangementsTotalScore = new Map();


// Her må vi gå gjennom alle personene og hente ut arrangementene deres og lagre dem. En fin struktur å benytte for å samle opp score er Map!
// Gulp.. Et map er på en måte en liste med tupler. Tuplene er key og value. [(key1, value1), (key2, value2)...]
for(let i = 0; i < allUsers.length; i++) {
     for(arrangement of allUsers[i].arrangementsArray) {
         if(arrangementsTotalScore.has(arrangement.name)) {
             arrangementsTotalScore.set(arrangement.name, arrangementsTotalScore.get(arrangement.name) + arrangement.currentScore)
         }
         else {
            arrangementsTotalScore.set(arrangement.name, arrangement.currentScore)
         }
     }
}

console.log("------------ Map med arrangementer og samlet score ---------------")

console.log(arrangementsTotalScore)