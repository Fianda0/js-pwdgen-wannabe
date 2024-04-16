let inserireNome = prompt('inserire il tuo nome')
document.getElementById("nome").innerHTML = inserireNome

let inserireCognome = prompt('Inserire il tuo cognome')
document.getElementById("cognome").innerHTML = inserireCognome

let inserireColore = prompt('Inserire il tuo colore preferito')
document.getElementById("colore").innerHTML = inserireColore

let password = inserireNome + inserireCognome + inserireColore + '#24'
alert(password);
document.getElementById('password').innerHTML = password