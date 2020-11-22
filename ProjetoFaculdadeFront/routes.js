const routes = [
    {
        path: '/index',
        templateUrl: getTemplate('/index', './index/index.html'),
    },
    {
        path: '/cadastro-usuario',
        templateUrl: getTemplate('/cadastro-usuario', './cadastro-usuario/cadastro-usuario.html'),
    },
    {
        path: '/contact',
        templateUrl: 'adasd',
    },
];

function getTemplate(path, templateUrl) {
    var request = new XMLHttpRequest();

    request.open('GET', templateUrl, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var resp = request.responseText;
            routes.forEach(rota => {
                if (rota.path === path) {
                    rota.templateUrl = resp;
                }
            });
        }
    };

    request.send();
}