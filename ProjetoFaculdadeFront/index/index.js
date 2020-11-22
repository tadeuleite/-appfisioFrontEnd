
function timeoutOcultar() {
    setTimeout(() => {
        display = document.getElementById("ocultarLogo").style.display = "none";
        display = document.getElementById("exibirGrid").style.display = "";
    }, 700);
}

// Modal
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);