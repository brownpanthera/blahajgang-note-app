showNotes()
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {


    let addTxt = document.getElementById("addTxt")
    let notes = localStorage.getItem("yournotes")
    if (notes === null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    };
    notesObj.push(addTxt.value)
    localStorage.setItem("yournotes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes()
});

function showNotes() {
    let notes = localStorage.getItem("yournotes")
    if (notes === null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
        
        <div class="yournotes" id="notes">
        <form>
            <label for="fname">Note ${index + 1}</label><br>
            <textarea name="message"> ${element}</textarea><br>
            <button type="button">Delete Note</button>
        </form>
    </div>
        
        
         `
    });   
    let  notesElm = document.getElementById("notes");
    if(notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
}   