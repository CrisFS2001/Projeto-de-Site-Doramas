function pesquisar() {

    //Obtem a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //Se cmapoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "Nenhum resultado encontrado"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descrição = "";
    let tags = "";

    // para cada dado dentro da lista de dados queremos que algo aconteça
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.titulo.toLowerCase()
        tags = dado.tags.toLowerCase()

        //se tutilo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) | tags.includes(campoPesquisa)) {

            //Criar novo elemneto
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link}target="_blank">Mais informações</a>
            </div>
    `;
        }
        //então, faça
        console.log(dado.titulo.includes(campoPesquisa));

    }
    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado. Nenhuma busca realizada.</p>"
    }

    section.innerHTML = resultados;
}