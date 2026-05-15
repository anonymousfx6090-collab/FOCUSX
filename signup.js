const signUpForm = document.getElementById("signUpForm");
const nameInput = document.getElementById("nameInput");
const errorMessage = document.getElementById('error');

const overlay = document.getElementById("overlay");

const greetingText = document.getElementById("greetingText");
const messageText = document.getElementById("messageText");

const closeBtn = document.getElementById("closeBtn");

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const signUpFormData = new FormData(signUpForm);
    const {name, confirm,password,email} = Object.fromEntries(signUpFormData.entries());
    
    if (password !== confirm){
       errorMessage.innerText = "Passwords do not match" 
       return
    }

    const currentHour = new Date().getHours();

    let greeting = "";

    if (currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    greetingText.innerHTML = `${greeting}, ${name}`;

    messageText.innerHTML = `
        We have successfully collected your information
        and added you to the FocusX watch list.

        FocusX is currently under construction,
        and you will be notified through your email
        once the platform officially launches.

        Thank you so much for partnering with us.
        Thank you for believing in FocusX.
        We truly appreciate your support.
    `;

    overlay.classList.add("active");

    // optional: clear form after submit
    signUpForm.reset();
    error.innerText=''
});

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
});

// optional: click outside popup closes it
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.remove("active");
    }
});
