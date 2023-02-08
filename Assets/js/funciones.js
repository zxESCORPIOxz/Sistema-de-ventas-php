let tblusuarios;
document.addEventListener("DOMContentLoaded",function(){
    tblusuarios = $('#tblusuarios').DataTable( {
        ajax: {
            url: base_url + "Usuarios/listar",
            dataSrc: ''
        },
        columns: [
        {
            'data' : 'id'
        },{
            'data' : 'usuario'
        },{
            'data' : 'nombre'
        },{
            'data' : 'caja'
        },{
            'data' : 'estado'
        },{
            'data' : 'acciones'
        }]
    } );
});
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
function frmusuario(){
    document.getElementById("title").innerHTML = "Nuevo Usuario";
    document.getElementById("btnAccion").innerHTML = "Registrar";

    document.getElementById('claves').classList.remove('d-none');

    document.getElementById('frmusuario').reset();

    $("#nuevo_usuario").modal("show");
    document.getElementById('id').value = "";
}
function registrarUser(e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario');
    const nombre = document.getElementById('nombre');
    const clave = document.getElementById('clave');
    const confirmar = document.getElementById('confirmar');
    const caja = document.getElementById('caja');
    if(usuario.value == ""  || nombre.value == ""){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Todos los campos son obligatorios',
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        clave.classList.remove("is-invalid");
        usuario.classList.remove("is-invalid");
        
        const url = base_url + "Usuarios/registrar";
        const frm = document.getElementById("frmusuario");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res == "si"){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Usuario registradado con exito', 
                        showConfirmButton: false,
                        timer: 3000
                      })
                      frm.reset();
                      $("#nuevo_usuario").modal("hide");
                      tblusuarios.ajax.reload();
                }else if(res == "modificado"){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Usuario modificado con exito', 
                        showConfirmButton: false,
                        timer: 3000
                      })
                      frm.reset();
                      $("#nuevo_usuario").modal("hide");
                      tblusuarios.ajax.reload();
                }else{
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: res,
                        showConfirmButton: false,
                        timer: 3000
                      })
                }
            }
        }
    }
    
}
function btnEditaruser(id){
    document.getElementById("title").innerHTML = "Editar usuario";
    document.getElementById("btnAccion").innerHTML = "Guardar cambios";

    const url = base_url + "Usuarios/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            
            document.getElementById('id').value = res.id;
            document.getElementById('usuario').value = res.usuario;
            document.getElementById('nombre').value = res.nombre;
            document.getElementById('caja').value = res.id_caja;

            document.getElementById('claves').classList.add('d-none');
    
            $("#nuevo_usuario").modal("show");


        }
    }
}
function btnEliminaruser(id){
    Swal.fire({
        title: 'Estas seguro de eliminar?',
        text: "El usuario no se eliminara de forma permanente!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy deacuerdo',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Usuarios/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const res = JSON.parse(this.responseText);
                    if (res == "ok"){
                        Swal.fire(
                            'Mensaje!',
                            'Usuario eliminado con exito',
                            'success'
                        )
                        tblusuarios.ajax.reload();
                    }else{
                        const res = JSON.parse(this.responseText);
                        Swal.fire(
                            'Mensaje!',
                            res,
                            'error'
                        )
                    }
                }
            }
        }
    })
}
function btnReingresaruser(id){
    Swal.fire({
        title: 'Estas seguro de reingresar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy deacuerdo',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Usuarios/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const res = JSON.parse(this.responseText);
                    if (res == "ok"){
                        Swal.fire(
                            'Mensaje!',
                            'Usuario reingresado con exito',
                            'success'
                        )
                        tblusuarios.ajax.reload();
                    }else{
                        Swal.fire(
                            'Mensaje!',
                            res,
                            'error'
                        )
                    }
                }
            }
        }
    })
}
