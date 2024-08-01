const messages = [
    "Yes",
    "No",
    "Maybe",
    "Ask again\nlater",
    "Definitely",
    "Certainly",
    "Without a\ndoubt",
    "Absolutely",
    "Most\nlikely",
    "No\nway",
    "Not likely",
    "Try again",
    "I don't\nknow",
    "Ask again\nlater",
    "Definitely\nnot",
    "Certainly\nnot",
    "My\nsources\nsay no",
    "Can't\npredict\nnow",
    "Don't\ncount\non it"
];
 
let input = document.getElementById("input");
let eightBallContainer = document.getElementById('eight-ball');
let showAnswer = document.getElementById("showAnswer");
 
function changeMessage() {
    if(input.value){

        input.disabled = true;
        showAnswer.textContent = "wait..";

        let randomIndex = Math.random() * messages.length;
        let fortuneStr = messages[Math.floor(randomIndex)];
        
        eightBallContainer.classList.add("animate");
        
        setTimeout(function () {
            showAnswer.style.fontSize = "19px";
            if(Math.floor(randomIndex) > 15){
                showAnswer.style.paddingTop = "10px";
            }
            showAnswer.textContent = fortuneStr;
            eightBallContainer.classList.remove("animate");
            
            showAnswer.classList.add("animate");
        }, 3000);
        
        setTimeout(function () {
            showAnswer.classList.remove("animate");
            input.disabled = false;
        }, 2000);


    } else {
        alert("Input cannot be empty! Please enter a question.");
    }
}
 
eightBallContainer.addEventListener('click', changeMessage); 