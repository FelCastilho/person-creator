function animeBattle(){

    function criarPersonagens(){

        let dbz = ['Goku', 'Vegeta', 'Kuririn', 'Gohan', 'Cell', 'Daishinkan', 'Whis', 'Bills']
    
        let naruto = ['Naruto', 'Minato', 'Sasuke', 'Kakashi', 'Boruto', 'Gaara', 'Sakura', 'Itachi']

        const animes = [dbz, naruto]
        
        return animes
    }

    
    
    //Criando a função de rodar
    function randomPerson(person){
        let index = Math.floor(Math.random() * person.length)
        return person[index]        
    }


    function createBtn(){
        let persongemCriado = criarPersonagens()
        //Criando o chamado para o button
        const btn = document.querySelector('.button')
        const res = document.querySelector('.result')
       
        btn.addEventListener('click', () =>{
            res.innerHTML = persongemCriado
        })
    }
    
    //chamando o botão
    return createBtn();    
}

animeBattle();