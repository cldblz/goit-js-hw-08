import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form")
const emailRef = document.querySelector("input")
const messageRef = document.querySelector("textarea")
const data = {
    email: "",
    message: ""
}
const hasFeedback = localStorage.getItem("feedback-form-state")

if (hasFeedback) {
    const savedFeedback = localStorage.getItem("feedback-form-state")
    try {
        const parsedFeedback = JSON.parse(savedFeedback);
        emailRef.value = parsedFeedback.email;
        messageRef.value = parsedFeedback.message;
        data.email = parsedFeedback.email;
        data.message = parsedFeedback.message;
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

form.addEventListener("input", throttle(onInput, 500))
form.addEventListener("submit", onSubmit)


function onInput(e) {
    if (e.target.name === "email") {
        data.email = e.target.value
    } else {
        data.message = e.target.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
}

function onSubmit(e) {
    e.preventDefault()

    const {
        elements: { email, message }
    } = e.currentTarget;

    if (email.value === "" || message.value === "") {
        return alert("Please fill in all the fields!");
    }

    console.log(data);
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state")
}