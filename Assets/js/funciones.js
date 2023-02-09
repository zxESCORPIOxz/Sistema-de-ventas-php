let tblusuarios, tblclientes, tblcajas, tblcategorias, tblmedidas;
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

    // Tabla usuario

    tblclientes = $('#tblclientes').DataTable( {
        ajax: {
            url: base_url + "Clientes/listar",
            dataSrc: ''
        },
        columns: [
        {
            'data' : 'id'
        },{
            'data' : 'dni'
        },{
            'data' : 'nombre'
        },{
            'data' : 'telefono'
        },{
            'data' : 'direccion'
        },{
            'data' : 'estado'
        },{
            'data' : 'acciones'
        }]
    } );

    // Tabla caja

    tblcajas = $('#tblcajas').DataTable( {
        ajax: {
            url: base_url + "Cajas/listar",
            dataSrc: ''
        },
        columns: [
        {
            'data' : 'id'
        },{
            'data' : 'caja'
        },{
            'data' : 'estado'
        },{
            'data' : 'acciones'
        }]
    } );

    // Tabla categorias

    tblcategorias = $('#tblcategorias').DataTable( {
        ajax: {
            url: base_url + "Categorias/listar",
            dataSrc: ''
        },
        columns: [
        {
            'data' : 'id'
        },{
            'data' : 'nombre'
        },{
            'data' : 'estado'
        },{
            'data' : 'acciones'
        }]
    } );

    // Tabla medidas

    tblmedidas = $('#tblmedidas').DataTable( {
        ajax: {
            url: base_url + "Medidas/listar",
            dataSrc: ''
        },
        columns: [
        {
            'data' : 'id'
        },{
            'data' : 'nombre'
        },{
            'data' : 'nombre_corto'
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

// Fun usuario

function frmcliente(){
    document.getElementById("title").innerHTML = "Nuevo Cliente";
    document.getElementById("btnAccion").innerHTML = "Registrar";

    document.getElementById('frmcliente').reset();

    $("#nuevo_cliente").modal("show");
    document.getElementById('id').value = "";
}
function registrarCli(e) {
    e.preventDefault();
    const dni = document.getElementById('dni');
    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('telefono');
    const direccion = document.getElementById('direccion');
    if(dni.value == ""  || nombre.value == "" || telefono.value == "" || direccion.value == ""){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Todos los campos son obligatorios',
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Clientes/registrar";
        const frm = document.getElementById("frmcliente");
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
                        title: 'Cliente registradado con exito', 
                        showConfirmButton: false,
                        timer: 3000
                      })
                      frm.reset();
                      $("#nuevo_cliente").modal("hide");
                      tblclientes.ajax.reload();
                }else if(res == "modificado"){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Cliente modificado con exito', 
                        showConfirmButton: false,
                        timer: 3000
                      })
                      frm.reset();
                      $("#nuevo_cliente").modal("hide");
                      tblclientes.ajax.reload();
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
function btnEditarcli(id){
    document.getElementById("title").innerHTML = "Actualizar cliente";
    document.getElementById("btnAccion").innerHTML = "Guardar cambios";

    const url = base_url + "Clientes/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            
            document.getElementById('id').value = res.id;
            document.getElementById('dni').value = res.dni;
            document.getElementById('nombre').value = res.nombre;
            document.getElementById('telefono').value = res.telefono;
            document.getElementById('direccion').value = res.direccion;
    
            $("#nuevo_cliente").modal("show");


        }
    }
}
function btnEliminarcli(id){
    Swal.fire({
        title: 'Estas seguro de eliminar?',
        text: "El cliente no se eliminara de forma permanente!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy deacuerdo',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Clientes/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const res = JSON.parse(this.responseText);
                    if (res == "ok"){
                        Swal.fire(
                            'Mensaje!',
                            'Cliente eliminado con exito',
                            'success'
                        )
                        tblclientes.ajax.reload();
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
function btnReingresarcli(id){
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
            const url = base_url + "Clientes/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const res = JSON.parse(this.responseText);
                    if (res == "ok"){
                        Swal.fire(
                            'Mensaje!',
                            'Cliente reingresado con exito',
                            'success'
                        )
                        tblclientes.ajax.reload();
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

// Fun cliente

function frmcaja(){
    document.getElementById("title").innerHTML = "Nueva caja";
    document.getElementById("btnAccion").innerHTML = "Registrar";

    document.getElementById('frmcaja').reset();

    $("#nuevo_caja").modal("show");
    document.getElementById('id').value = "";
}
function registrarCaja(e) {
    e.preventDefault();
    const nombre = document.getElementById('caja');
    if( nombre.value == "" ){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Todos los campos son obligatorios',
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Cajas/registrar";
        const frm = document.getElementById("frmcaja");
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
                        title: 'Caja registrada con exito', 
                        showConfirmButton: false,
                        timer: 3000
                      })
                      frm.reset();
                      $("#nuevo_caja").modal("hide");
                      tblcajas.ajax.reload();
                }else if(res == "modificado"){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Caja modificada con exito', 
                        showConfirmButton: false,
                        timer: 3000
                      })
                      frm.reset();
                      $("#nuevo_caja").modal("hide");
                      tblcajas.ajax.reload();
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
function btnEditarcaja(id){
    document.getElementById("title").innerHTML = "Actualizar caja";
    document.getElementById("btnAccion").innerHTML = "Guardar cambios";

    const url = base_url + "Cajas/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            
            document.getElementById('id').value = res.id;
            document.getElementById('caja').value = res.caja;
    
            $("#nuevo_caja").modal("show");


        }
    }
}
function btnEliminarcaja(id){
    Swal.fire({
        title: 'Estas seguro de eliminar?',
        text: "La caja no se eliminara de forma permanente!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy deacuerdo',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Cajas/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const res = JSON.parse(this.responseText);
                    if (res == "ok"){
                        Swal.fire(
                            'Mensaje!',
                            'Caja eliminada con exito',
                            'success'
                        )
                        tblcajas.ajax.reload();
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
function btnReingresarcaja(id){
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
            const url = base_url + "Cajas/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const res = JSON.parse(this.responseText);
                    if (res == "ok"){
                        Swal.fire(
                            'Mensaje!',
                            'Caja reingresada con exito',
                            'success'
                        )
                        tblcajas.ajax.reload();
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

// Fun caja

function frmcategoria(){
    document.getElementById("title").innerHTML = "Nueva categoria";
    document.getElementById("btnAccion").innerHTML = "Registrar";

    document.getElementById('frmcategoria').reset();

    $("#nuevo_categoria").modal("show");
    document.getElementById('id').value = "";
}
function registrarCategoria(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    if( nombre.value == "" ){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Todos los campos son obligatorios',
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Categorias/registrar";
        const frm = document.getElementById("frmcategoria");
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
                        title: 'Categoria registrada con exito', 
                        showConfirmButton: false,
                        timer: 3000
                      })
                      frm.reset();
                      $("#nuevo_categoria").modal("hide");
                      tblcategorias.ajax.reload();
                }else if(res == "modificado"){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Categoria modificada con exito', 
                        showConfirmButton: false,
                        timer: 3000
                      })
                      frm.reset();
                      $("#nuevo_categoria").modal("hide");
                      tblcategorias.ajax.reload();
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
function btnEditarcategoria(id){
    document.getElementById("title").innerHTML = "Actualizar categoria";
    document.getElementById("btnAccion").innerHTML = "Guardar cambios";

    const url = base_url + "Categorias/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            
            document.getElementById('id').value = res.id;
            document.getElementById('nombre').value = res.nombre;
    
            $("#nuevo_categoria").modal("show");
        }
    }
}
function btnEliminarcategoria(id){
    Swal.fire({
        title: 'Estas seguro de eliminar?',
        text: "La caja no se eliminara de forma permanente!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy deacuerdo',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Categorias/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const res = JSON.parse(this.responseText);
                    if (res == "ok"){
                        Swal.fire(
                            'Mensaje!',
                            'Caja eliminada con exito',
                            'success'
                        )
                        tblcategorias.ajax.reload();
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
function btnReingresarcategoria(id){
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
            const url = base_url + "Categorias/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const res = JSON.parse(this.responseText);
                    if (res == "ok"){
                        Swal.fire(
                            'Mensaje!',
                            'Caja reingresada con exito',
                            'success'
                        )
                        tblcategorias.ajax.reload();
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

// Fun categorias

function frmmedida(){
    document.getElementById("title").innerHTML = "Nueva medida";
    document.getElementById("btnAccion").innerHTML = "Registrar";

    document.getElementById('frmmedida').reset();

    $("#nuevo_medida").modal("show");
    document.getElementById('id').value = "";
}
function registrarMedida(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const nombre_corto = document.getElementById('nombre_corto');
    if( nombre.value == "" ){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Todos los campos son obligatorios',
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Medidas/registrar";
        const frm = document.getElementById("frmmedida");
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
                        title: 'Medida registrada con exito', 
                        showConfirmButton: false,
                        timer: 3000
                      })
                      frm.reset();
                      $("#nuevo_medida").modal("hide");
                      tblmedidas.ajax.reload();
                }else if(res == "modificado"){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Categoria modificada con exito', 
                        showConfirmButton: false,
                        timer: 3000
                      })
                      frm.reset();
                      $("#nuevo_medida").modal("hide");
                      tblmedidas.ajax.reload();
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
function btnEditarmedida(id){
    document.getElementById("title").innerHTML = "Actualizar medida";
    document.getElementById("btnAccion").innerHTML = "Guardar cambios";

    const url = base_url + "Medidas/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            
            document.getElementById('id').value = res.id;
            document.getElementById('nombre').value = res.nombre;
            document.getElementById('nombre_corto').value = res.nombre_corto;
    
            $("#nuevo_medida").modal("show");
        }
    }
}
function btnEliminarmedida(id){
    Swal.fire({
        title: 'Estas seguro de eliminar?',
        text: "La medida no se eliminara de forma permanente!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy deacuerdo',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Medidas/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const res = JSON.parse(this.responseText);
                    if (res == "ok"){
                        Swal.fire(
                            'Mensaje!',
                            'Caja eliminada con exito',
                            'success'
                        )
                        tblmedidas.ajax.reload();
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
function btnReingresarmedida(id){
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
            const url = base_url + "Medidas/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const res = JSON.parse(this.responseText);
                    if (res == "ok"){
                        Swal.fire(
                            'Mensaje!',
                            'Medida reingresada con exito',
                            'success'
                        )
                        tblmedidas.ajax.reload();
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

// Fun medidas