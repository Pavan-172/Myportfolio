const navbar = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const closeBtn = document.querySelector('#close-btn')
const sidebar = document.querySelector('#sidebar')
const date = document.querySelector('#date')

//smooth scroll to href links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  })
})

// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar')
})
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})

// set year
date.innerHTML = new Date().getFullYear()

const formHeading = document.querySelector(".form-heading")
const formInputs= document.querySelectorAll(".contact-form-input");

formInputs.forEach(input=>{
    input.addEventListener("focus",()=>{
        formHeading.style.opacity="0"
        setTimeout(()=>{
            formHeading.textContent =`Your ${input.placeholder}`;
            formHeading.style.opacity="1"
        },300);
    });
    input.addEventListener("blur",()=>{
        formHeading.style.opacity="0"
        setTimeout(()=>{
            formHeading.textContent ="Let's Talk";
            formHeading.style.opacity="1"
        },300);
    });
});
 // Form
 const form=document.querySelector(".contact-form");
 const username=document.getElementById("name");
const email=document.getElementById("email");
const subject=document.getElementById("subject");
const message=document.getElementById("message");
const messages=document.querySelectorAll(".message");

const error=(input,message)=>{
    input.nextElementSibling.classList.add("error");
    input.nextElementSibling.textContent=message;
};

const success =(input)=>{
    input.nextElementSibling.classList.remove("error");
};
const checkInput =(inputArr)=>{
inputArr.forEach((input)=>{
    if(input.value.trim()===""){
        error(input,`${input.id} is required`);
    }else{
        success(input);
    }
});
};

const checkLength=(input,min)=>{
 if(input.value.trim().length<min){
    error(input,`${input.id} must be atleast ${min} characters`);
}
};

const checkEmail=(input)=>{
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(input.value.match(regex)){
        success(input);
    }else{
        error(input,"Email is not valid")
    }
}

 form.addEventListener("submit",(e)=>{
    checkInput([username,email,subject,message]);
      checkLength(username,2); 
     checkLength(subject,2); 
     checkLength(message,10);
  checkEmail(email); 
  

const notValid=Array.from(messages).find((message)=>{
    return message.classList.contains("error")
});
 notValid && e.preventDefault();
 });

