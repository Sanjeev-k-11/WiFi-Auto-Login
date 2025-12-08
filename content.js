chrome.storage.local.get(["username","password"], (data)=>{

  if(!data.username || !data.password) return;

  let userInput = document.querySelector('input[name="username"]');
  let passInput = document.querySelector('input[name="password"]');
  let policyBox = document.getElementById("agreepolicy");
  let loginBtn = document.getElementById("loginbtn");

  if(userInput) userInput.value = data.username;
  if(passInput) passInput.value = data.password;

  // auto check policy
  if(policyBox) policyBox.checked = true;

  // enable button
  if(loginBtn) loginBtn.disabled = false;

  // auto click login after small delay
  setTimeout(()=>{
    if(loginBtn) loginBtn.click();
  },1000)
});
