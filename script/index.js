var prox_cor = 'dark'
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
