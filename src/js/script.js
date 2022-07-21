const myTerms = document.querySelector(".profile-termins-result");
// burger navigation
const main = document.getElementById("menu");
const burgerNavigation = document.querySelector(".burger-navigation");
const burgerOpenIcon = document.querySelector(".open-burger");
const burgerCloseIcon = document.querySelector(".close-burger");
if (burgerOpenIcon) {
  burgerOpenIcon.addEventListener("click", () => {
    burgerNavigation.classList.add("clicked");
    burgerOpenIcon.classList.add("hidden");
    burgerCloseIcon.classList.remove("hidden");
    main.classList.add("hidden");
  });
  burgerCloseIcon.addEventListener("click", () => {
    burgerNavigation.classList.remove("clicked");
    burgerCloseIcon.classList.add("hidden");
    burgerOpenIcon.classList.remove("hidden");
    main.classList.remove("hidden");
  });
}
// end of burger navigation
// gsap anymation
if (myTerms) {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  function animationFade(item) {
    // aniamate scene
    tl.fromTo(
      item,
      0.3,
      { opacity: 0, transform: "translateY(-40px)" },
      { opacity: 1, transform: "translateY(0)", stagger: 0.2 }
    );
    tl.play(); // animation execute
  }
}
// data of definitions
const dataMyDefinitions = [
  {
    id: 1,
    termin: "LOREM IPSUM 1",
    definition: "ათი შოკოლადი",
    date: "3 კვირის წინ",
  },
  {
    id: 2,
    termin: "LOREM IPSUM 2",
    definition: "ათი შოკოლადი",
    date: "3 კვირის წინ",
  },
  {
    id: 3,
    termin: "LOREM IPSUM 3",
    definition: "ათი შოკოლადი",
    date: "3 კვირის წინ",
  },
  {
    id: 4,
    termin: "LOREM IPSUM 4",
    definition: "ათი შოკოლადი",
    date: "3 კვირის წინ",
  },
];

// burger icon
// show more text function
if (!localStorage.getItem("auth")) {
  localStorage.setItem("auth", false);
}
const readMore = document.querySelector(".more-click");
const text = document.querySelector(".text");

if (readMore) {
  readMore.addEventListener("click", (e) => {
    text.classList.toggle("show-more");
    if (readMore.innerHTML === "წაიკითხეთ სრულად") {
      readMore.innerHTML = "შეამცირეთ ტექსტი";
    } else {
      readMore.innerHTML = "წაიკითხეთ სრულად";
    }
  });
}

const readMores = document.querySelector(".for-second-more");
const text2 = document.querySelector(".second-text-txt");

if (readMores) {
  readMores.addEventListener("click", (e) => {
    text2.classList.toggle("show-more");
    if (readMores.innerHTML === "წაიკითხეთ სრულად") {
      readMores.innerHTML = "შეამცირეთ ტექსტი";
    } else {
      readMores.innerHTML = "წაიკითხეთ სრულად";
    }
  });
}
// end of show more text function

// Form Validation

const sendButton = document.getElementById("sendButton");
if (sendButton) {
  sendButton.addEventListener("click", () => {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");
    const emptyValue = [nameField, emailField, messageField].filter(
      (item) => !item.value
    );
    const filledValue = [nameField, emailField, messageField].filter(
      (item) => item.value
    );
    emptyValue.forEach((item) => {
      item.classList.add("errorBorder");
      item.nextSibling.nextSibling.classList.remove("hidden");
    });
    filledValue.forEach((item) => {
      item.classList.remove("errorBorder");
      item.nextSibling.nextSibling.classList.add("hidden");
    });
  });
}

// End of Form Validation

// new term script
const newTermInput = document.getElementById("new-term");
const btnAddNewTerm = document.getElementById("addNewTerm");
if (newTermInput) {
  btnAddNewTerm.addEventListener("click", () => {
    if (!newTermInput.value) {
      newTermInput.classList.add("errorBorder");
      newTermInput.nextSibling.nextSibling.classList.remove("hidden");
    } else {
      newTermInput.classList.remove("errorBorder");
      newTermInput.nextSibling.nextSibling.classList.add("hidden");
    }
  });
}
// end of new term script

// ------ function for success send message ---------
function callIsEmpty() {
  const nameEl = document.getElementById("name").value;
  const emailEl = document.getElementById("email").value;
  const messageEl = document.getElementById("message").value;

  if (nameEl !== "" && emailEl !== "" && messageEl !== "") {
    localStorage.setItem("msg", "შეტყობინება წარმატებით გაიგზავნა");
    location.href = "success.html";
  }
}
const addNewTerm = document.getElementById("addNewTerm");
if (addNewTerm) {
  addNewTerm.addEventListener("click", () => {
    const newTerm = document.getElementById("new-term");
    if (newTerm.value) {
      localStorage.setItem("msg", "ტერმინი წარმატებით გაიგზავნა");
      location.href = "success.html";
    }
  });
}
const addNewDefinition = document.getElementById("addNewDefinition");
if (addNewDefinition) {
  addNewDefinition.addEventListener("click", () => {
    const newDefinition = document.getElementById("new-definition");
    if (newDefinition.value) {
      localStorage.setItem("msg", "განმარტება წარმატებით გაიგზავნა");
      location.href = "success.html";
    } else {
      newDefinition.nextElementSibling.classList.remove("hidden");
    }
  });
}
const successMessageBody = document.getElementById("success-message-body");
if (successMessageBody) {
  let msg = localStorage.getItem("msg");
  successMessageBody.onload = setSuccessMessage(msg);
}

function setSuccessMessage(msg) {
  const messageText = document.getElementById("success-message-text");
  messageText.innerText = msg;
}
// -------- end of isEMpty() function --------

// -------- toggle login and signup forms -------
// select elements
const signInBtn = document.querySelector(".btn-login");
const signUpBtn = document.querySelector(".btn-signup");
const signInForm = document.querySelector(".login");
const signUpForm = document.querySelector(".signup");
// click on buttons
if (signUpBtn) {
  signUpBtn.addEventListener("click", () => {
    signUpBtn.classList.add("active-tab");
    signUpBtn.classList.remove("inactive-tab");
    signUpForm.classList.remove("hidden");
    signInBtn.classList.remove("active-tab");
    signInBtn.classList.add("inactive-tab");
    signInForm.classList.add("hidden");
  });
}
if (signInBtn) {
  signInBtn.addEventListener("click", () => {
    signInBtn.classList.add("active-tab");
    signInBtn.classList.remove("inactive-tab");
    signInForm.classList.remove("hidden");
    signUpBtn.classList.remove("active-tab");
    signUpBtn.classList.add("inactive-tab");
    signUpForm.classList.add("hidden");
  });
}

// -------- end of toggle login and signup forms -------

// -------- change autorisation form to registration form --------
function changeAutoToRegistr() {
  signUpBtn.classList.add("active-tab");
  signUpBtn.classList.remove("inactive-tab");
  signUpForm.classList.remove("hidden");
  signInBtn.classList.remove("active-tab");
  signInBtn.classList.add("inactive-tab");
  signInForm.classList.add("hidden");
}
// -------- end of function --------

// Email validation
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// -------- Login Validation -------
const loginBtn = document.querySelector(".submit-login");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const usernameInput = document.querySelector(".username");
    const passwordInput = document.querySelector(".psw");
    const emailErrorTxt = document.querySelector(".change-text-error");
    const emptyInput = [usernameInput, passwordInput].filter(
      (item) => !item.value
    );
    const filledInput = [usernameInput, passwordInput].filter(
      (item) => item.value
    );
    emptyInput.forEach((item) => {
      item.classList.add("errorBorder");
      item.nextSibling.nextSibling.classList.remove("hidden");
    });
    filledInput.forEach((item) => {
      item.classList.remove("errorBorder");
      item.nextSibling.nextSibling.classList.add("hidden");
      if (usernameInput.value && !validateEmail(usernameInput.value)) {
        emailErrorTxt.innerText = "ელ.ფოსტა არ არის ვალიდური";
        item.classList.add("errorBorder");
        item.nextSibling.nextSibling.classList.remove("hidden");
      }
      if (passwordInput.value && passwordInput.value.length < 8) {
        passwordInput.nextSibling.nextSibling.children[0].children[1].innerText =
          "შეიყვანეთ მინიმუმ 8 სიმბოლო";
        passwordInput.classList.add("errorBorder");
        pswRegInput.nextSibling.nextSibling.classList.remove("hidden");
      }
    });
    if (
      usernameInput.nextSibling.nextSibling.classList.contains("hidden") &&
      passwordInput.nextSibling.nextSibling.classList.contains("hidden")
    ) {
      loginBtn.onclick = location.href = "profile.html";
      localStorage.setItem("auth", true);
    }
  });
}

// --------- Registration Validation ------------
const registrationBtn = document.querySelector(".submit-registration");
if (registrationBtn) {
  // registrationBtn.setAttribute("onclick", "location.href='profile.html'");
  registrationBtn.addEventListener("click", () => {
    const emailRegInput = document.querySelector(".email-reg");
    const nameRegInput = document.querySelector(".name-reg");
    const phoneRegInput = document.querySelector(".phone-reg");
    const pswRegInput = document.querySelector(".psw-reg");
    const pswRepeatRegInput = document.querySelector(".psw-repeat-reg");
    const emailErrorP = document.querySelector("#email-error-text");

    const emptyRegInputs = [
      emailRegInput,
      nameRegInput,
      phoneRegInput,
      pswRegInput,
      pswRepeatRegInput,
    ].filter((item) => !item.value);
    const FilledRegInputs = [
      emailRegInput,
      nameRegInput,
      phoneRegInput,
      pswRegInput,
      pswRepeatRegInput,
    ].filter((item) => item.value);
    emptyRegInputs.forEach((item) => {
      item.nextSibling.nextSibling.children[0].children[1].innerText =
        "ველი სავალდებულოა";
      item.classList.add("errorBorder");
      item.nextSibling.nextSibling.classList.remove("hidden");
    });
    FilledRegInputs.forEach((item) => {
      item.classList.remove("errorBorder");
      item.nextSibling.nextSibling.classList.add("hidden");

      if (emailRegInput.value && !validateEmail(emailRegInput.value)) {
        emailErrorP.innerText = "ელ.ფოსტა არ არის ვალიდური";
        item.classList.add("errorBorder");
        item.nextSibling.nextSibling.classList.remove("hidden");
        // registrationBtn.removeAttribute("onclick");
      }
      if (phoneRegInput.value && phoneRegInput.value.length != 9) {
        phoneRegInput.nextSibling.nextSibling.children[0].children[1].innerText =
          "ნომერი არ არის ვალიდური";
        phoneRegInput.classList.add("errorBorder");
        phoneRegInput.nextSibling.nextSibling.classList.remove("hidden");
        // registrationBtn.removeAttribute("onclick");
      }
      if (pswRegInput.value && pswRegInput.value.length < 8) {
        pswRegInput.nextSibling.nextSibling.children[0].children[1].innerText =
          "შეიყვანეთ მინიმუმ 8 სიმბოლო";
        pswRegInput.classList.add("errorBorder");
        pswRegInput.nextSibling.nextSibling.classList.remove("hidden");
        // registrationBtn.removeAttribute("onclick");
      }
      if (
        pswRepeatRegInput.value &&
        pswRegInput.value !== pswRepeatRegInput.value
      ) {
        pswRepeatRegInput.nextSibling.nextSibling.children[0].children[1].innerText =
          "პაროლები არ ემთხვევა";
        pswRepeatRegInput.classList.add("errorBorder");
        pswRepeatRegInput.nextSibling.nextSibling.classList.remove("hidden");
        // registrationBtn.removeAttribute("onclick");
      }
    });
    if (
      emailRegInput.nextSibling.nextSibling.classList.contains("hidden") &&
      nameRegInput.nextSibling.nextSibling.classList.contains("hidden") &&
      phoneRegInput.nextSibling.nextSibling.classList.contains("hidden") &&
      pswRegInput.nextSibling.nextSibling.classList.contains("hidden") &&
      pswRepeatRegInput.nextSibling.nextSibling.classList.contains("hidden")
    ) {
      registrationBtn.onclick = location.href = "profile.html";
    }
  });
}

//------------- recovery password validation--------------//
const recoveryButton = document.querySelector(".submit-recovery");
if (recoveryButton) {
  recoveryButton.addEventListener("click", () => {
    const recoverPass = document.querySelector(".psw-recovery");
    const recoveryPassRpt = document.querySelector(".psw-recovery-rpt");
    const emptyValue = [recoverPass, recoveryPassRpt].filter(
      (item) => !item.value
    );
    const filledValue = [recoverPass, recoveryPassRpt].filter(
      (item) => item.value
    );
    emptyValue.forEach((item) => {
      item.classList.add("errorBorder");
      item.nextSibling.nextSibling.classList.remove("hidden");
    });
    filledValue.forEach((item) => {
      item.classList.remove("errorBorder");
      item.nextSibling.nextSibling.classList.add("hidden");

      if (recoverPass.value && recoverPass.value.length < 8) {
        recoverPass.nextSibling.nextSibling.children[0].children[1].innerText =
          "შეიყვანეთ მინიმუმ 8 სიმბოლო";
        recoverPass.classList.add("errorBorder");
        recoverPass.nextSibling.nextSibling.classList.remove("hidden");
      }
      if (
        recoveryPassRpt.value &&
        recoverPass.value !== recoveryPassRpt.value
      ) {
        recoveryPassRpt.nextSibling.nextSibling.children[0].children[1].innerText =
          "პაროლები არ ემთხვევა";
        recoveryPassRpt.classList.add("errorBorder");
        recoveryPassRpt.nextSibling.nextSibling.classList.remove("hidden");
      }
    });
    if (
      recoverPass.nextSibling.nextSibling.classList.contains("hidden") &&
      recoveryPassRpt.nextSibling.nextSibling.classList.contains("hidden")
    ) {
      recoveryButton.onclick = location.href = "profile.html";
    }
  });
}
// click text "პაროლის აღდგენა"
const tglFrom = document.querySelector(".toggle-form");
const recPassForm = document.querySelector(".recovery-password");
function showRecPass() {
  tglFrom.classList.add("click-recovery");
  recPassForm.classList.add("show-recovery-form");
}

// Dropdown menu
const profile = document.getElementById("profile");
const profileMenu = document.getElementById("profile-menu");
if (profile) {
  profile.addEventListener("click", () => {
    profileMenu.classList.toggle("hidden");
  });
}

// Profile menu
const definitionHeader = document.querySelectorAll(".definition-header");
definitionHeader.forEach((item) => {
  item.addEventListener("click", () => {
    if (!item.parentElement.classList.contains("active")) {
      item.parentElement.classList.add("active");
      item.lastElementChild.classList.toggle("rotate");
    } else {
      item.parentElement.classList.remove("active");
      item.lastElementChild.classList.toggle("rotate");
    }
  });
});

if (document.querySelector("ul.nav-ul")) {
  const profileMenuItems = document
    .querySelector("ul.nav-ul")
    .querySelectorAll(".profile-edit");

  const definitionUl = document.querySelector(".sub-ul-definition");
  const termUl = document.querySelector(".sub-ul-termin");
  function closeDefinitionUL() {
    if (!definitionUl.classList.contains("hidden")) {
      definitionUl.classList.toggle("hidden");
    }
  }
  function closeTermUL() {
    if (!termUl.classList.contains("hidden")) {
      termUl.classList.toggle("hidden");
    }
  }

  profileMenuItems.forEach((item, index) => {
    itemSpan = item.children[0];
    itemSpan.addEventListener("click", () => {
      const profileActiveItem = document.querySelector(".profile-active-nav");
      const rightInnerActive = document
        .querySelector(".right-inner")
        .querySelector(".active");

      profileActiveItem.classList.remove("profile-active-nav");

      item.children[0].classList.add("profile-active-nav");
      if (index === 1 || index === 2) {
        item.children[1].classList.remove("hidden");
      }
      if (index === 0) {
        closeDefinitionUL();
        closeTermUL();
        const myTerms = document
          .querySelector(".right-inner")
          .querySelector(".profile-edit");
        rightInnerActive.classList.toggle("active");
        rightInnerActive.classList.toggle("hidden");

        myTerms.classList.toggle("active");
        myTerms.classList.toggle("hidden");
      }
      if (index === 1) {
        console.log("hey");
        dataMyDefinitions.forEach((el) => {
          const postElement = document.createElement("div");
          postElement.classList.add("result");
          postElement.innerHTML = `
          <div class="termin-tag-social">
            <h2>${el.termin}</h2>
            <div class="tagandsocial">
              <div class="fb-icon">
                <img src="../../assets/images/fb.svg" alt="fb" />
              </div>
            </div>
          </div>
          <div class="description">
            <div class="like">
              <img src="../../assets/images/chat.svg" alt="like" />
            </div>
            <h2>${el.definition}</h2>
            <div class="spans">
              <span class="date">${el.date}</span>
            </div>
          </div>
          `;
          animationFade(postElement);
          myTerms.appendChild(postElement);
          // animationFade(myDefRow);
        });
        closeTermUL();
        rightInnerActive.classList.remove("active");
        rightInnerActive.classList.toggle("hidden");
        myTerms.classList.toggle("hidden");
        myTerms.classList.toggle("active");
      }
      if (index === 2) {
        closeDefinitionUL();
        rightInnerActive.classList.remove("active");
        rightInnerActive.classList.toggle("hidden");
        const myTerms = document.querySelector(".my-terms");
        myTerms.classList.toggle("hidden");
        myTerms.classList.toggle("active");
      }
    });
  });
}
// profile fields edit
const saveButton = document.querySelector(".submit-profile-edit");

if (saveButton) {
  saveButton.addEventListener("click", () => {
    const email = document.querySelector(".email-reg");
    const name = document.querySelector(".name-reg");
    const phone = document.querySelector(".phone-reg");
    const password = document.querySelector(".psw-reg");
    const passwordRepeat = document.querySelector(".psw-repeat-reg");

    email.nextElementSibling.classList.add("hidden");
    name.nextElementSibling.classList.add("hidden");
    phone.nextElementSibling.classList.add("hidden");
    password.parentElement.nextElementSibling.classList.add("hidden");
    passwordRepeat.parentElement.nextElementSibling.classList.add("hidden");
    if (!email.value || !validateEmail(email.value)) {
      email.nextElementSibling.classList.remove("hidden");
    }
    if (!name.value) {
      name.nextElementSibling.classList.remove("hidden");
    }
    if (!phone.value) {
      phone.nextElementSibling.classList.remove("hidden");
    }
    if (!password.value || password.value.length < 8) {
      password.parentElement.nextElementSibling.classList.remove("hidden");
    }
    if (!passwordRepeat.value || password.value != passwordRepeat.value) {
      passwordRepeat.parentElement.nextElementSibling.classList.remove(
        "hidden"
      );
    }
  });
}

// change password input type
const eyes = document.querySelectorAll(".show-password");
eyes.forEach((item) => {
  item.addEventListener("click", () => {
    x = item.previousElementSibling;
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  });
});
// add photo
function addPhoto() {
  const uploadBtn = document.getElementById("img-input");
  const uploadPhoto = document.querySelector(".my-photo");
  const headerPhoto = document.querySelector(".header-photo");
  uploadBtn.onchange = (evt) => {
    const [file] = uploadBtn.files;
    if (file) {
      uploadPhoto.src = URL.createObjectURL(file);
      headerPhoto.src = URL.createObjectURL(file);
    }
    uploadPhoto.classList.add("change-photo");
    headerPhoto.classList.add("image-size");
  };
}
// definitions
const terms = document.querySelectorAll(".block-div");
if (terms) {
  const auth = localStorage.getItem("auth");
  terms.forEach((item) => {
    item.children[0].addEventListener("click", () => {
      if (auth === "true") {
        item.children[0].href = "src/pages/definition.html";
      } else {
        item.children[0].href = "./src/pages/new_term.html";
      }
    });
  });
}
// scroll alphabet
const prevLetter = document.querySelectorAll(".letters-left");
const nextLetter = document.querySelectorAll(".letters-right");
if (document.querySelector(".collect-letters")) {
  const letter = document
    .querySelector(".collect-letters")
    .getElementsByTagName("span");
}
