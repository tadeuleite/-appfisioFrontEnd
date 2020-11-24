function timeoutOcultar() {
    setTimeout(() => {
        document.getElementById("ocultarLogo").style.display = "none";
        document.getElementById("exibirGrid").style.display = "";
    }, 700);
}

function toggleModal() {
    var modal = document.querySelector(".modal");
    var closeButton = document.querySelector(".close-button");

    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    var modal = document.querySelector(".modal");
    var closeButton = document.querySelector(".close-button");

    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
    if (event.target === modal) {
        toggleModal();
    }
}
