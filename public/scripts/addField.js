// Procurar o botao
document.querySelector("#add-time")

// Quando clicar no botao
.addEventListener('click',cloneField)
//Executar uma acao
function cloneField () {

    //Duplicar os campos   que campo ?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos . que campos ?

    const fields = newFieldContainer.querySelectorAll('input')

    // fields[0].value = ""
    // fields[1].value = ""

    // Para cada campo, limpar
    fields.forEach(field =>  {

        console.log(field)
    });



    //Colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}


