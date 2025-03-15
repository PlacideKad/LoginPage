document.querySelector(".signin-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement
  });
document.querySelector(".signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement
  });
document.addEventListener("click",function(event){
    let signinForm=document.querySelector(".signin-form");
    let signupForm=document.querySelector(".signup-form");
    let signin=document.querySelector(".signin");
    let signup=document.querySelector(".signup");

    if(signup.contains(event.target)){
        signinForm.style.transform="translateX(-600px)";
        signupForm.style.transform="translateX(-600px)";
    }
    else if(signin.contains(event.target)){
        signinForm.style.transform="translateX(0px)";
        signupForm.style.transform="translateX(0px)";

    }
});

