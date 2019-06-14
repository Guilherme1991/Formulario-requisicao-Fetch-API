let form = document.getElementById('form'),
       name = document.getElementById('nome'),
       job = document.getElementById('job'),
       btn = document.querySelector('.submit')

       form.addEventListener('submit', function(event){
         event.preventDefault()

        let dados ={
           nome: name.value,
           job: job.value
        }
        if(nome.value ==='' && job.value ===''){
            let adiciona = document.createElement('div')
            adiciona.innerHTML='<p>Você precisa digitar nos campos do formulário!!</p>';
            adiciona.classList.add('ativa')
            form.appendChild(adiciona)
            btn.setAttribute('disabled', 'disabled');
        }
        console.log(dados)

         //Conexão por FETCH API
         fetch('https://reqres.in/api/users',{
             method: 'post',
             body: JSON.stringify(dados)
         })

         .then(function(response){
             // Se o status da requisição for estritamente igual!
             if(response.status === 201){
                let adiciona = document.createElement('div')
                adiciona.innerHTML='<p>Olá '+dados.nome+', Seu Job é: '+dados.job+',<br>seus dados foram enviados com sucesso!!</p>';
                adiciona.classList.add('ativa')
                form.appendChild(adiciona)
                btn.setAttribute('disabled', 'disabled');
                return response.json()
             } 
             else{
                let adiciona = document.createElement('div')
                adiciona.classList.add('ativa')
                adiciona.innerHTML='<p>Olá '+dados.nome+', Seu Job é: '+dados.job+',<br>Infelizmente não foi possivel enviar sua solicitação<br>Contate: gui23091991@gmail.com</p>';
                form.appendChild(adiciona)
                btn.setAttribute('disabled', 'disabled');
                return response.json()

                }
         })
         //Retorna a resposta do Servidor no DevTools!
         .then(function(response){
             console.log(response)
         })
       })
