let form = document.querySelector("form");
let textarea = document.getElementById("#textarea");
let color = document.querySelector("#color")
let submit = document.querySelector("#submit");
let notesContainer = document.querySelector(".notesContainer");
let undo = document.querySelector(".undo-btn");
let deletedNotes = [];

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    let store = e.target.textarea;

    let note = document.createElement("div");
    note.classList.add("notes");
    note.innerText= store.value;
    note.style.backgroundColor = color.value ;
    notesContainer.append(note);


    let noteObject = {};
    noteObject.timer = new Date().toLocaleString();
    let dateTime = document.createElement("span");
    dateTime.classList.add("timestamp");
    dateTime.innerText = noteObject.timer;
    note.append(dateTime);


    let close = document.createElement("span");
    close.classList.add("close");
    close.innerHTML = "&times;" ; 
    close.addEventListener("click" ,(e) => {
        deletedNotes.push(e.target.closest(".notes"));
        e.target.closest(".notes").remove();
        // console.log(deletedNotes);
    })
    note.append(close);


    undo.addEventListener("click" , ()=> {
        if(deletedNotes.length > 0){
            let lastDeletedNote = deletedNotes.pop() ;
            notesContainer.appendChild(lastDeletedNote);
        } 
    })
})