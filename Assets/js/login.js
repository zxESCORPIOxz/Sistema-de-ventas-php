
function frmLogin(e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario');
    const clave = document.getElementById('clave');
    if(usuario.value == ""){
        usuario.classList.add("is-invalid");
        usuario.focus();
    }else if(clave.value == ""){
        clave.classList.add("is-invalid");
        clave.focus();
    }else{
        clave.classList.remove("is-invalid");
        usuario.classList.remove("is-invalid");
        
        const url = base_url + "Usuarios/validar";
        const frm = document.getElementById("frmLogin");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                
                const res = JSON.parse(this.responseText);
                if(res == "OK"){
                    window.location = base_url + "Usuarios";
                }else{
                    document.getElementById("alerta").classList.remove("d-none");
                    document.getElementById("alerta").innerHTML = res;
                    console.log("Usuario o contraseña incorrecta");
                }
            }
        }
    }
    
}