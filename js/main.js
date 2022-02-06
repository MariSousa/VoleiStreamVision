var bttInformacoes = window.document.querySelector('button#bttInformacoes')
        
        bttInformacoes.addEventListener('click', function(){
            var informacoes = window.document.getElementById('informacoes')

            if(informacoes.style.visibility != 'visible'){

                informacoes.style.visibility = 'visible'
                bttInformacoes.innerHTML = `<i class="fas fa-info-circle"></i>Fechar informações`

            } 
            else {

                informacoes.style.visibility = 'hidden'
                bttInformacoes.innerHTML = `<i class="fas fa-info-circle"></i>Mais informações`
            }
})
