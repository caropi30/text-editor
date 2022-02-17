let btnSave = document.querySelector("#btnSave");
let titleTxt = document.querySelector("#title");
let formControl = document.querySelector(".formControl");
let paragraphTxt = document.querySelector("#paragraph");
let titleSize = document.querySelector("#titleSize");
let editedTitle = document.querySelector(".edited h1");
let editedParagraph = document.querySelector(".edited p");
let infoAlert = document.querySelector("#infoAlert");
let titleColor;

function formValidation() {
  titleColor = document.querySelector("input[name=titleColor]:checked");
  console.log("Click");
  console.log(
    titleTxt.value,
    paragraphTxt.value,
    titleSize.value,
    titleColor.value
  );
  if (
    titleTxt.value !== "" &&
    paragraphTxt.value !== "" &&
    titleSize.value !== ""
  ) {
    console.log("Los campos se llenaron con éxito");
    infoAlert.insertAdjacentHTML(
      "beforeend",
      `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Perfecto!</strong> Creaste tu texto correctamente.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
    );
  } else {
    console.log("Validar ingreso de datos. Existen campos sin data");
    infoAlert.insertAdjacentHTML(
      "beforeend",
      `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        Existen errores en el ingreso de la data. Favor validar campos.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
    );
  }
}

function edition() {
  editedTitle.textContent = titleTxt.value;
  editedTitle.style.fontSize = titleSize.value + "rem";
  editedParagraph.textContent = paragraphTxt.value;
  editedTitle.style.color = titleColor.value;
}

btnSave.addEventListener("click", function (event) {
  event.preventDefault();
  formValidation();
  edition();
  document.querySelector("form").reset();
});
