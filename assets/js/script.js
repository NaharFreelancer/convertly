document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("newsletter-email");
  const errorMsg = document.getElementById("newsletter-error");
  const subscribeBtn = document.querySelector(".subscribe-btn");

  subscribeBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent page reload

    if (emailInput.value.trim() === "") {
      errorMsg.textContent = "Please enter your email address.";
      errorMsg.style.visibility = "visible";
      emailInput.classList.add("error");
    } else {
      errorMsg.style.visibility = "hidden";
      emailInput.classList.remove("error");
      // here you can submit to backend or show success message
      alert("Thank you for subscribing!");
    }
  });

  emailInput.addEventListener("input", function () {
    if (emailInput.value.trim() !== "") {
      errorMsg.style.visibility = "hidden";
      emailInput.classList.remove("error");
    }
  });
});


// ===================================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  hamburger.classList.toggle("active");
});
