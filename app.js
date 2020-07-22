// first declare variables
const resultBtn = document.querySelector('.result-btn');
const inputField = document.querySelector("#input-field");

// start again button restart 
const startAgain = document.querySelector('.start-again');

// Event controller call
EventsControllerFun();
// Event Controller function
function EventsControllerFun() {
    resultBtn.addEventListener('click', ChechResult);
    startAgain.addEventListener('click', restartAgain);
}


// chech result if field empty or not empty then do that
function ChechResult(e) {

    if (inputField.value === '') {
        alertFunCall(type = "alert-danger", "Enter The Number..");
        setTimeout(clearaAlert, 1000);
    } else {
        // generate random number from 1 to 10
        const randomRumber = Math.floor(Math.random() * 10 + 1);
        // check if input number is equal to random number than alert
        
        if (parseInt(inputField.value) === randomRumber) {
            alertFunCall(
                (type =
                    "alert-success"),
                "Great Best Guessing Guy"
            );
            // setTimeout(clearaAlert, 1000);
            // End Guess Game function
            EndGuessFn();
        } else if (parseInt(inputField.value) >= randomRumber) {
            
            alertFunCall((type = "alert-danger"), "High Number You choose");
            setTimeout(clearaAlert, 1000);

        } else if (parseInt(inputField.value) <= randomRumber) {
            
            alertFunCall((type = "alert-danger"), "Less Number You choose");
            setTimeout(clearaAlert, 1000);

        } else {
            alertFunCall((type = "alert-danger"), "Something Wrong");
            setTimeout(clearaAlert, 1000);
        }
    }
    
    e.preventDefault();
}


// Error or Succes  Alert fun
function alertFunCall(type, string) {
    // below two variables row and jumbo for where we can show our alert
    const row = document.querySelector('#row-data');
    const jumbo = document.querySelector('.jumbotron');

    const div = document.createElement('div');
    div.className = `alert ${type} font-weight-bold`;
    const textNode = div.appendChild(document.createTextNode(string));
    div.appendChild(textNode);
    if (type === 'alert-danger') {
        inputField.style.border = '1px solid red';
    }
    else {
        inputField.style.border = "1px solid green";
    }
    row.insertBefore(div, jumbo);
}

// below function for clear alert
function clearaAlert() {
    document.querySelector('.alert').remove();
    inputField.style.border = "none";
}

// stop playing guessing game
function EndGuessFn() {
    document.querySelector(".result-btn").disabled = true;
    document.querySelector("#input-field").disabled = true;
    startAgain.classList.remove('d-none');
}

// restart game function
function restartAgain() {
    document.querySelector(".result-btn").disabled = false;
	document.querySelector("#input-field").disabled = false;
    startAgain.classList.add("d-none");
    inputField.value = '';
    clearaAlert();
}