const form = document.querySelector('form');
debugger
form.addEventListener('submit',(ev)=>{
  ev.preventDefault();
    const inputUsu =  document.getElementById('usuario'); 
    const inputPss =  document.getElementById('contrasena');
    debugger
      if(inputUsu.value == "1007240613" && inputPss.value == "2021"){debugger
        location.href ="http://localhost:3000/";
      }else{
        alert("datos incorrectos");
        location.href ="http://127.0.0.1:5500/vistas/login.html";
      }
});