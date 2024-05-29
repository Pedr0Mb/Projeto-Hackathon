
function confirmarSenha(){

    if(document.getElementById('senha').value != '' && document.getElementById('email').value != '' && document.getElementById('Confirmarsenha').value != ''){

        if(document.getElementById('Confirmarsenha').value !=  document.getElementById('senha').value){

          document.getElementById('spanc').style.visibility = 'visible'
          document.getElementById('spancl').style.visibility = 'visible'

          document.getElementById('span').style.visibility = 'hidden'
          document.getElementById('spanl').style.visibility = 'hidden'
          document.getElementById('spans').style.visibility = 'hidden'
        }else{
            document.getElementById('senha').value = ''
            document.getElementById('Confirmarsenha').value = ''
            document.getElementById('email').value = ''
            document.getElementById('spanc').style.visibility = 'hidden'
            document.getElementById('spancl').style.visibility = 'hidden'
            window.location.replace("login.html");
        }
   }else{
       if(document.getElementById('senha').value == ''){

             document.getElementById('span').style.visibility = 'visible'

            if(document.getElementById('email').value == ''){
                document.getElementById('spans').style.visibility = 'visible'
            } else{
                document.getElementById('spans').style.visibility = 'hidden'
            }
            if(document.getElementById('Confirmarsenha').value == ''){
                document.getElementById('spanl').style.visibility = 'visible'
                console.log('ujhh')
            }  else{
                document.getElementById('spanl').style.visibility = 'hidden'
                console.log('jjj')
            }
       } else{
         document.getElementById('span').style.visibility = 'hidden'
       }
        
   }
}