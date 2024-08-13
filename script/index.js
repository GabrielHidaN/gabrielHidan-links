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
