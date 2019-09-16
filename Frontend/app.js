console.log('app rodando!');
let $disciplinas = document.querySelector('div');


function fetch_disciplinas() {

    let URL = 'https://lab01-projsw-ufcg.herokuapp.com/api/disciplinas';
    fetch(URL)
    .then(response => response.json())
    .then (dados => {
        console.log(dados);
        window.disciplinas = dados;
        dados.forEach(element => {
            var content = document.createElement('p');
            content.innerText = 'id';
            $disciplinas.appendChild(content);
        });
            
    })
    
}

