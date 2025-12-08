document.getElementById("save").addEventListener("click", () => {
    const u = document.getElementById("user").value;
    const p = document.getElementById("pass").value;

    chrome.storage.local.set({ username: u, password: p }, () => {
        alert("Saved successfully!");
    });
});
