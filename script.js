// 1. Button Click Event
const button = document.querySelector("#clickButton");
button.addEventListener("click", () => {
  alert("Button clicked!");
});

// 2. Hover Effects
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "lightblue";
});

button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "";
});

// 3. Keypress Detection
document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    console.log("Enter key pressed!");
  }
});

// 4. Bonus: Secret Action for Double-Click or Long Press
let pressTimer;

button.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    alert("Long press detected!");
  }, 1000);
});

button.addEventListener("mouseup", () => {
  clearTimeout(pressTimer);
});

button.addEventListener("dblclick", () => {
  alert("Double click detected!");
});

// 5. Real-time Password Feedback
const passwordField = document.querySelector("#password");
const feedback = document.querySelector("#feedback");

passwordField.addEventListener("input", () => {
  if (passwordField.value.length < 8) {
    feedback.textContent = "Password too short!";
  } else {
    feedback.textContent = "Password is good!";
  }
});
