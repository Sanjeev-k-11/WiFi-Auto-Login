const form = document.getElementById("form");
const savedSection = document.getElementById("savedSection");

const userInput = document.getElementById("user");
const passInput = document.getElementById("pass");
const saveBtn   = document.getElementById("save");

const updateBtn = document.getElementById("updateBtn");
const removeBtn = document.getElementById("removeBtn");


chrome.storage.local.get(["username","password"], (data)=>{

    if(data.username){
        form.style.display = "none";
        savedSection.style.display = "block";
    }
});

// save
saveBtn.addEventListener("click", ()=>{
    chrome.storage.local.set({
        username: userInput.value,
        password: passInput.value
    },()=>{
        form.style.display = "none";
        savedSection.style.display = "block";
    });
});

// update
updateBtn.addEventListener("click", ()=>{
    form.style.display = "block";
    savedSection.style.display = "none";
});

// remove
removeBtn.addEventListener("click", ()=>{
    chrome.storage.local.remove(["username","password"], ()=>{
        form.style.display = "block";
        savedSection.style.display = "none";
        userInput.value="";
        passInput.value="";
    });
});
