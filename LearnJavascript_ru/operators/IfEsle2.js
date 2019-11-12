let message;
let login = 'Director';
message = (login == 'Sotrudnik') ? 'Hello' :
    (login == 'Director') ? 'Hello Director' :
        (login == '') ? 'Login is empty' :
            'login error';
alert(message)