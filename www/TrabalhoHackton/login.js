function login(){
    if(document.getElementById('senha').value != '' && document.getElementById('email').value != ''){
         window.location.replace("../Index.html");
         document.getElementById('span').style.visibility = 'hidden'
         document.getElementById('spans').style.visibility = 'hidden'
    }else{
        if(document.getElementById('senha').value == ''){
              document.getElementById('spans').style.visibility = 'visible'
        } else{
              document.getElementById('spans').style.visibility = 'hidden'
        }

         if(document.getElementById('email').value == ''){
             document.getElementById('span').style.visibility = 'visible'
        }else{
                document.getElementById('span').style.visibility = 'hidden'
        }
    }
   
}