var account = document.querySelector(".account");
var signupClose = document.querySelector(".signup_close");
var signinClose = document.querySelector(".signin_close");
var UptoIn = document.querySelector(".UptoIn");
var IntoUp = document.querySelector(".IntoUp");
var showOptions = document.querySelector(".showOptions");
var signupForm = document.querySelector(".signupForm");
var signinForm = document.querySelector(".signinForm");
var MobileSign = document.querySelector(".MobileSign")
var mobilesignup = document.querySelector(".mobilesignup")
var mobilesignin = document.querySelector(".mobilesignin");
var mobilesignupclose = document.querySelector(".mobile_signup_close");
var mobilesigninclose = document.querySelector(".mobile_signin_close");

function SignupSignin()
{
    account.addEventListener("click",()=>{
   
        document.querySelector(".signup_signin").classList.add("open");
    
    })
    
    signupClose.addEventListener("click",()=>{
        document.querySelector(".signup_signin").classList.remove("open");
    })
    
    signinClose.addEventListener("click",()=>{
        document.querySelector(".signup_signin").classList.remove("open");
        document.querySelector(".signup").classList.remove("close");
        document.querySelector(".signin").classList.remove("signinopen");
    })
    
    UptoIn.addEventListener("click",()=>{
        document.querySelector(".signup").classList.add("close");
        document.querySelector(".signin").classList.add("signinopen");
    })
    
    IntoUp.addEventListener("click",()=>{
        document.querySelector(".signup").classList.remove("close");
        document.querySelector(".signin").classList.remove("signinopen");
    })
    
    showOptions.addEventListener("click",()=>{
        document.querySelector(".options").classList.toggle("show");
    })
}
SignupSignin();

function HandleLogin(e)
{
    e.preventDefault();
    document.querySelector(".userDetails").classList.add("login");
    account.classList.add("hide");
    document.querySelector(".groups").classList.add("block");
    document.querySelector(".defaultLoaction").classList.add("none");
    document.querySelector(".Location").classList.add("Location_login");
    document.querySelector(".signup_signin").classList.remove("open");
}

signupForm.addEventListener("submit", HandleLogin)
signinForm.addEventListener("submit", HandleLogin)

MobileSign.addEventListener("click",()=>{
    document.querySelector(".signup_signin").classList.add("open");
})

mobilesignup.addEventListener("click",()=>{
    document.querySelector(".signup").classList.add("close");
    document.querySelector(".signin").classList.add("signinopen");
})

mobilesignin.addEventListener("click",()=>{
    document.querySelector(".signup").classList.remove("close");
    document.querySelector(".signin").classList.remove("signinopen");
})

mobilesignupclose.addEventListener("click",()=>{
    document.querySelector(".signup_signin").classList.remove("open");
})

mobilesigninclose.addEventListener("click",()=>{
    document.querySelector(".signup_signin").classList.remove("open");
    document.querySelector(".signup").classList.remove("close");
    document.querySelector(".signin").classList.remove("signinopen");
})