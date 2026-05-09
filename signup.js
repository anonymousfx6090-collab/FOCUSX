const loginForm = document.getElementById("loginForm");
const nameInput = document.getElementById("nameInput");

const overlay = document.getElementById("overlay");

const greetingText = document.getElementById("greetingText");
const messageText = document.getElementById("messageText");

const closeBtn = document.getElementById("closeBtn");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userName = nameInput.value.trim();

    const currentHour = new Date().getHours();

    let greeting = "";

    if (currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    greetingText.innerHTML = `${greeting}, ${userName}`;

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
    loginForm.reset();
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