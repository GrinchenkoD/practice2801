import "./css/styles.css";
import profiles from "./dataBases/ghProfiles.json";
import personTemplate from "./templates/template.hbs";
import modalTemplate from "./templates/modal.hbs";
// import "./shop.js";

// =======================================================
const cont = document.querySelector(".container");
const markupCards = personTemplate(profiles);

function openModal(event) {
  if (event.target.nodeName === "UL") return;
  let id = event.target.dataset.key;
  const user = profiles.find((item) => item.id == id);
  const markupModal = modalTemplate(user);
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="modal">${markupModal}</div>`,
  );
  localStorage.setItem("modal", markupModal);
  closeBtnHandler();
}

const savedValue = localStorage.getItem("modal");

if (savedValue) {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="modal">${savedValue}</div>`,
  );

  closeBtnHandler();
}

function closeBtnHandler() {
  const closeBtn = document.querySelector(".modal-close");
  closeBtn.addEventListener("click", () => {
    localStorage.removeItem("modal");
    document.querySelector(".modal").remove();
  });
}

cont.insertAdjacentHTML("beforeend", markupCards);
cont.addEventListener("click", openModal);
