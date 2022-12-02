//working on ----------------------------------------

function main(user,console){
//checks equality

    if (userinput === rock && console === paper) {
        console.log("console (rock) wins!")

    } else if (userinput === rock && console === scissors) {
        console.log("user (rock) wins!")

    } else if (userinput === paper && console === rock) {
        console.log("user (paper) wins!")

    } else if (userinput === paper && console === scissors) {
        console.log("console (scissors) wins!")

    } else if (userinput === scissors && console === rock) {
        console.log("console (rock) wins!")

    } else if (userinput === scissors && console === paper) {
        console.log("user (scissors) wins!")

    } else if (userinput === console) {
        console.log("tie!")
    }
}



var consoleSelect;

function roll() {
    let consoleSelect = Math.floor((Math.random() * 3) + 1);
    console.log(consoleSelect)
    if (consoleSelect === 1) {
        document.getElementById("console").innerHTML = "<img src=\"images/rock.png\">";
    } else if (consoleSelect === 2) {
        document.getElementById("console").innerHTML = "<img src=\"images/paper.png\">";
    } else if (consoleSelect === 3) {
        document.getElementById("console").innerHTML = "<img src=\"images/scissors.png\">";
    } else
        console.log("roll-error")
}

let returnx = function(){return consoleSelect;}


//to-do ---------------------------------------------
function deffeat(){
    window.alert("you lost :(")

}
function win(){
    window.alert("you won!")
}

//finished -------------------------------------------

function select(number){
    if (number === 1) {
        document.getElementById("userSelect").innerHTML = "<img src=\"images/rock.png\">";
    } else if (number === 2) {
        document.getElementById("userSelect").innerHTML = "<img src=\"images/paper.png\">";
    } else if (number === 3) {
        document.getElementById("userSelect").innerHTML = "<img src=\"images/scissors.png\">";
    } else {
        console.log("select-error")
    }
}
function test() {
    toDoArray = [
        "user buttons (rock,paper,scissors)",
        "text -> icons", 
        "roll/bounce animation"
    ]
    console.log(toDoArray)
}