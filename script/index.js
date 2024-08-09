var prox_cor = 'dark'
var ativo_popUp = false
const div_popUp  = document.getElementById('#')


// Fuction mudar de tema 

function mudarcores(){
  if (prox_cor == 'dark'){
      document.getElementById('container').className = 'estilo-2'
      prox_cor = 'light'
  }
  else{
      document.getElementById('container').className = 'estilo-1'
      prox_cor = 'dark'
  }

}

// Fuction for open popUp

const popUp = ()=>{

  if (ativo_popUp == false){
    div_popUp.className('popUp_ativo')

    ativo_popUp = true
  }
}

// Function for close popUp

const fechar_popUp = ()=> {
  if (ativo_popUp == true){

    div_popUp.className('remove')
  }
  }
