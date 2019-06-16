       let form = document.getElementById('form');
       let btn = document.querySelector('.submit');
      
       form.addEventListener('submit', event =>{
        let name = document.getElementById('nome');
        let job = document.getElementById('job');
        let adiciona = document.createElement('div');
         //Previne a atualizaçao do Browser!
         event.preventDefault()

        let dados ={
           nome: name.value,
           job: job.value
        }
        console.log(dados)
         //Conexão por FETCH API
         fetch('https://reqres.in/api/users',{
             method: 'post',
             body: JSON.stringify(dados)
         })

         .then(response=>{ 
            if(nome.value =='' || job.value ==''){
               name.style.border="1px solid red";
               job.style.border="1px solid red";
               let adiciona = document.createElement('div')
               adiciona.innerHTML='<p>Você precisa digitar nos campos do formulário!!</p>';
               adiciona.classList.add('ativa')
               form.appendChild(adiciona)
               btn.setAttribute('disabled', 'disabled')
             }
             // Se o status da requisição for estritamente igual!
             else if(response.status === 201){
                adiciona.innerHTML='<p>Olá '+dados.nome+',<br>seus dados foram enviados com sucesso!!</p>';
                adiciona.classList.add('ativa')
                form.appendChild(adiciona)
                btn.setAttribute('disabled', 'disabled')
                return response.json()
             } 
             else{
                adiciona.classList.add('ativa')
                adiciona.innerHTML='<p>Infelizmente não foi possivel enviar sua solicitação porque houve um erro no sistema,<br>Contate: gui23091991@gmail.com</p>';
                form.appendChild(adiciona)
                btn.setAttribute('disabled', 'disabled')
                return response.json()
                }      
         })
         //Retorna a resposta do Servidor no DevTools!
         .then(response=>{
             console.log(response)
         })
       })