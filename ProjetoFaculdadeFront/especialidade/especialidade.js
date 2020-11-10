function listarEspecialidade() {
    var idEspecialidade = document.getElementById('idEspecialidade').value;
    console.log(idEspecialidade)

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var jsonRetornado = document.getElementById('jsonRetornado');
            jsonRetornado.textContent = this.responseText;
        }
    });

    xhr.open("GET", "http://localhost:8080/especialidades/" + idEspecialidade);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
    xhr.send();
}
