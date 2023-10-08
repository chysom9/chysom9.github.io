function scriptTest(){
    alert("My Website Works")
}
function showMessage() {
    const nameElement = document.getElementById('name');
    const feelElement = document.getElementById('feel');
    const info = document.getElementById("welcome");

    const name = nameElement.value;
    const feel = feelElement.value;

    info.textContent = `The NwosuRadioSlap welcomes you, ${name}!, we are glad you are doing ${feel}`;
}
function displayCurrentDateTime() {
    const currentDateTimeElement = document.getElementById('currentDateTime');
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const date = `Today is ${hour}:${minute}${hour >= 12 ? 'pm' : 'am'} ,${day} , ${month}, ${year}`;
    currentDateTimeElement.textContent = date;
}

// Call the function to display the current date and time when the page loads
window.addEventListener('load', displayCurrentDateTime);

function shape(){
    const num = parseInt(document.getElementById("number").value, 10);
    const result = document.getElementById("result");

    switch(num){
        case  1:
            result.textContent= "the shape with "+num+ " side  is a "+"Monogon.";
            break;
        case  2:
            result.textContent= "the shape with "+num+ " sides  is a "+"bigon";
            break;
        case  3:
            result.textContent= "the shape with "+num+ " sides  is a "+"triangle";
            break;
        case  4:
            result.textContent= "the shape with "+num+ " sides  is a "+"quadrilateral";
            break;
        case  5:
            result.textContent= "the shape with "+num+ " sides  is a "+"pentagon";
            break;
        case  6:
            result.textContent= "the shape with "+num+ " sides  is a "+"hexagon";
            break;
        case  7:
            result.textContent= "the shape with "+num+ " sides  is a "+"heptagon";
            break;
        case  8:
            result.textContent= "the shape with "+num+ " sides  is a "+"octagon";
            break;
        case  9:
            result.textContent= "the shape with "+num+ " sides  is a "+"enneagon";
            break;
        case  10:
            result.textContent= "the shape with "+num+ " sides  is a "+"decagon";
            break;
        default:
            result.textContent= "Yeaa... I dont know that one big G"
    }
}

