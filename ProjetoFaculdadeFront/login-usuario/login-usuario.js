function entrar() {
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        var avisoLogin = document.getElementById('aviso-login');
        if (this.status !== 0) {
            if (this.readyState === 4 && this.status === 200) {
                avisoLogin.style.backgroundColor = 'green';
                avisoLogin.style.display = 'block';
                avisoLogin.innerHTML = '<span class="closebtn">&times;</span>';
                avisoLogin.innerHTML += 'Você se logou com sucesso';
            } else {
                avisoLogin.style.backgroundColor = 'red';
                avisoLogin.style.display = 'block';
                avisoLogin.innerHTML = '<span class="closebtn">&times;</span>';
                avisoLogin.innerHTML += 'Erro ao logar, verifique suas credenciais';
            }
        }
    });

    xhr.open("GET", "http://localhost:8080/logins/" + login + "/" + password);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    xhr.send();
}

function fecharAviso() {
    var avisoLogin = document.getElementById('aviso-login');
    avisoLogin.style.display = 'none';
}
