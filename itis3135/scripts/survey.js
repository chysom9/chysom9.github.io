function addCourse(){
    const courseContainer = document.getElementById('course_block');
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'courseInput';
    newInput.name = 'coursesTaking';
    newInput.required = true;

    const br = document.createElement('br');
    br.id='break';

    const deleteButton = document.createElement('button');
    deleteButton.id='delete'
    deleteButton.textContent='Delete'
    deleteButton.onclick= function(){
        deleteCourse(this);
    }
    let div = document.createElement("div");
    div.id = "input_delete";
    div.append(newInput);
    div.append(deleteButton);
    courseContainer.appendChild(div);
    

    
}
function deleteCourse(button){
button.parentElement.remove();


}
function generateForm(){
    let main = document.createElement("main");

    let name = document.getElementById('name').value;
    let mascot = document.getElementById('mascot').value;
    let name_mascot = document.createElement('h2');
    name_mascot.innerText = name + " || " + mascot + ": Introduction";

    main.append(name_mascot);
    
    let figure = document.createElement('figure');
    let img = document.createElement('img');
    img.src= createImage(document.getElementById('image')); 
    img.className = 'profilePic';
    img.width = "600";
    figure.append(img);
    main.append(figure);
    

    let capt = document.getElementById("caption").value;
    let caption = document.createElement("figcaption");
    caption.innerText = capt;
    caption.id = "photo_caption";

    main.append(caption);
    let ul = document.createElement("ul");
    ul.className = "about";
    ul.append(inner("personal_background","Personal Background: "));
    ul.append(inner("professional_background","Professional Background: "));
    ul.append(inner("academic_background","Academic Background: "));
    ul.append(inner("background","Background in Web-Development: "));
    ul.append(inner("platform","Primary Computer Platform: "));
    ul.append(innerList());
    ul.append(inner("funny","Funny/Interesting thing to remember me by: "));
    ul.append(inner("other","Other: "));

    main.append(ul);


    document.getElementById('main').replaceWith(main); 
    
}

function innerList(){
    let list = document.createElement("li");
    let bold = document.createElement("strong");
    bold.innerText = "Courses Currently taking: ";
    list.append(bold);
    let ul = document.createElement("ul");
    ul.className = "about";
    let child_nodes = document.getElementById("course_block").children;
    for(let i = 0; i < child_nodes.length; i++){  
        let textVal = child_nodes[i].children[0].value;
        let li = document.createElement("li");
        li.innerText = textVal;
        ul.append(li);
        }
        list.append(ul);
        
    return list;


}
function inner(input, title){
    let list= document.createElement("li");

    let strong = document.createElement("strong");
    strong.innerText = title + document.getElementById(input).value;
    list.append(strong);

    
    return list;
}
function createImage(event){
    let img = event.files[0];
    let url = URL.createObjectURL(img);
    console.log(url);
    return(url);


}