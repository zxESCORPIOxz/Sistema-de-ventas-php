let tblusuarios, tblclientes, tblcajas, tblcategorias, tblmedidas, tblproductos, tblproveedores;
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
        }],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom:"<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
                //Botón para Excel
                extend: 'excelHtml5',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',
 
                //Aquí es donde generas el botón personalizado
                text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
            },
            //Botón para PDF
            {
                extend: 'pdfHtml5',
                download: 'open',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para copiar
            {
                extend: 'copyHtml5',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                filename: 'Export_File_print',
                text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
            },
            //Botón para cvs
            {
                extend: 'csvHtml5',
                footer: true,
                filename: 'Export_File_csv',
                text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
            },
            {
                extend: 'colvis',
                text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
                postfixButtons: ['colvisRestore']
            }
        ]
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
        }],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom:"<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
                //Botón para Excel
                extend: 'excelHtml5',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',
 
                //Aquí es donde generas el botón personalizado
                text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
            },
            //Botón para PDF
            {
                extend: 'pdfHtml5',
                download: 'open',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para copiar
            {
                extend: 'copyHtml5',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                filename: 'Export_File_print',
                text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
            },
            //Botón para cvs
            {
                extend: 'csvHtml5',
                footer: true,
                filename: 'Export_File_csv',
                text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
            },
            {
                extend: 'colvis',
                text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
                postfixButtons: ['colvisRestore']
            }
        ]
    } );

    // Tabla clientes

    tblproveedores = $('#tblproveedores').DataTable( {
        ajax: {
            url: base_url + "Proveedores/listar",
            dataSrc: ''
        },
        columns: [
        {
            'data' : 'id'
        },{
            'data' : 'ruc'
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
        }],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom:"<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
                //Botón para Excel
                extend: 'excelHtml5',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',
 
                //Aquí es donde generas el botón personalizado
                text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
            },
            //Botón para PDF
            {
                extend: 'pdfHtml5',
                download: 'open',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para copiar
            {
                extend: 'copyHtml5',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                filename: 'Export_File_print',
                text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
            },
            //Botón para cvs
            {
                extend: 'csvHtml5',
                footer: true,
                filename: 'Export_File_csv',
                text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
            },
            {
                extend: 'colvis',
                text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
                postfixButtons: ['colvisRestore']
            }
        ]
    } );

    // Tabla clientes

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
        }],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom:"<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
                //Botón para Excel
                extend: 'excelHtml5',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',
 
                //Aquí es donde generas el botón personalizado
                text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
            },
            //Botón para PDF
            {
                extend: 'pdfHtml5',
                download: 'open',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para copiar
            {
                extend: 'copyHtml5',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                filename: 'Export_File_print',
                text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
            },
            //Botón para cvs
            {
                extend: 'csvHtml5',
                footer: true,
                filename: 'Export_File_csv',
                text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
            },
            {
                extend: 'colvis',
                text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
                postfixButtons: ['colvisRestore']
            }
        ]
    } );

    // Tabla cajas

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
        }],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom:"<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
                //Botón para Excel
                extend: 'excelHtml5',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',
 
                //Aquí es donde generas el botón personalizado
                text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
            },
            //Botón para PDF
            {
                extend: 'pdfHtml5',
                download: 'open',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para copiar
            {
                extend: 'copyHtml5',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                filename: 'Export_File_print',
                text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
            },
            //Botón para cvs
            {
                extend: 'csvHtml5',
                footer: true,
                filename: 'Export_File_csv',
                text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
            },
            {
                extend: 'colvis',
                text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
                postfixButtons: ['colvisRestore']
            }
        ]
    } );

    // Tabla categorias

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
        }],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom:"<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
                //Botón para Excel
                extend: 'excelHtml5',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',
 
                //Aquí es donde generas el botón personalizado
                text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
            },
            //Botón para PDF
            {
                extend: 'pdfHtml5',
                download: 'open',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para copiar
            {
                extend: 'copyHtml5',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                filename: 'Export_File_print',
                text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
            },
            //Botón para cvs
            {
                extend: 'csvHtml5',
                footer: true,
                filename: 'Export_File_csv',
                text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
            },
            {
                extend: 'colvis',
                text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
                postfixButtons: ['colvisRestore']
            }
        ]
    } );

    // Tabla medidas

    tblproductos = $('#tblproductos').DataTable( {
        ajax: {
            url: base_url + "Productos/listar",
            dataSrc: ''
        },
        columns: [
        {
            'data' : 'id'
        },{
            'data' : 'imagen'
        },{
            'data' : 'codigo'
        },{
            'data' : 'descripcion'
        },{
            'data' : 'precio_venta'
        },{
            'data' : 'cantidad'
        },{
            'data' : 'estado'
        },{
            'data' : 'acciones'
        }],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom:"<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
                //Botón para Excel
                extend: 'excelHtml5',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',
 
                //Aquí es donde generas el botón personalizado
                text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
            },
            //Botón para PDF
            {
                extend: 'pdfHtml5',
                download: 'open',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para copiar
            {
                extend: 'copyHtml5',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                filename: 'Export_File_print',
                text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
            },
            //Botón para cvs
            {
                extend: 'csvHtml5',
                footer: true,
                filename: 'Export_File_csv',
                text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
            },
            {
                extend: 'colvis',
                text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
                postfixButtons: ['colvisRestore']
            }
        ]
    } );

    // Tabla productos

    tblhistorialcompra = $('#tblhistorialcompra').DataTable( {
        ajax: {
            url: base_url + "Compras/listarHistorial",
            dataSrc: ''
        },
        columns: [
        {
            'data' : 'id'
        },{
            'data' : 'ruc'
        },{
            'data' : 'nombre'
        },{
            'data' : 'total'
        },{
            'data' : 'fecha'
        },{
            'data' : 'nombre_usuario'
        },{
            'data' : 'acciones'
        }],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom:"<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
                //Botón para Excel
                extend: 'excelHtml5',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',
 
                //Aquí es donde generas el botón personalizado
                text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
            },
            //Botón para PDF
            {
                extend: 'pdfHtml5',
                download: 'open',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para copiar
            {
                extend: 'copyHtml5',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                filename: 'Export_File_print',
                text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
            },
            //Botón para cvs
            {
                extend: 'csvHtml5',
                footer: true,
                filename: 'Export_File_csv',
                text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
            },
            {
                extend: 'colvis',
                text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
                postfixButtons: ['colvisRestore']
            }
        ]
    } );

    // Tabla historial compras

    tblhistorialventa = $('#tblhistorialventa').DataTable( {
        ajax: {
            url: base_url + "Ventas/listarHistorial",
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
            'data' : 'total'
        },{
            'data' : 'fecha'
        },{
            'data' : 'nombre_usuario'
        },{
            'data' : 'acciones'
        }],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom:"<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [{
                //Botón para Excel
                extend: 'excelHtml5',
                footer: true,
                title: 'Archivo',
                filename: 'Export_File',
 
                //Aquí es donde generas el botón personalizado
                text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
            },
            //Botón para PDF
            {
                extend: 'pdfHtml5',
                download: 'open',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para copiar
            {
                extend: 'copyHtml5',
                footer: true,
                title: 'Reporte ',
                filename: 'Reporte ',
                text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            //Botón para print
            {
                extend: 'print',
                footer: true,
                filename: 'Export_File_print',
                text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
            },
            //Botón para cvs
            {
                extend: 'csvHtml5',
                footer: true,
                filename: 'Export_File_csv',
                text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
            },
            {
                extend: 'colvis',
                text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
                postfixButtons: ['colvisRestore']
            }
        ]
    } );

    // Tabla historial ventas


});


function frmclave(){
    document.getElementById('frmclave').reset();

    $("#cambio_contraseña").modal("show");
}
function cambiarContraseña(e){
    
    e.preventDefault();
    const clave_actual = document.getElementById('clave_actual');
    const clave_nueva = document.getElementById('clave_nueva');
    const clave_confirmar = document.getElementById('clave_confirmar');
    if(clave_actual.value == "" || clave_nueva.value == "" || clave_confirmar.value == ""){
        mensajeEmergente('Todos los campos son obligatorios', 'warning');
    }else{
        const url = base_url + "Usuarios/cambiarContraseña";
        const frm = document.getElementById("frmclave");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res['msj'] == "ok"){
                    mensajeEmergente('Contraseña modificada con exito', res['icono']);
                    frm.reset();
                    $("#cambio_contraseña").modal("hide");
                }else{
                    mensajeEmergente(res['msj'], res['icono']);
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
        mensajeEmergente('Todos los campos son obligatorios', 'warning');
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
                if(res['msj'] == "ok"){
                    mensajeEmergente('Usuario registrado con exito', res['icono']);
                    frm.reset();
                    $("#nuevo_usuario").modal("hide");
                    tblusuarios.ajax.reload();
                }else if(res['msj'] == "modificado"){
                    mensajeEmergente('Usuario modificado con exito', res['icono']);
                    frm.reset();
                    $("#nuevo_usuario").modal("hide");
                    tblusuarios.ajax.reload();
                }else{
                    mensajeEmergente(res['msj'], res['icono']);
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
                    if (res['msj'] == "ok"){
                        mensajeEmergente('Usuario eliminado con exito', res['icono']);
                        tblusuarios.ajax.reload();
                    }else{
                        mensajeEmergente(res['msj'], res['icono']);
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
                    if (res['msj'] == "ok"){
                        mensajeEmergente('Usuario reingresado con exito', res['icono']);
                        tblusuarios.ajax.reload();
                    }else{
                        mensajeEmergente(res['msj'], res['icono']);
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
        mensajeEmergente('Todos los campos son obligatorios', 'warning');
    }else{
        const url = base_url + "Clientes/registrar";
        const frm = document.getElementById("frmcliente");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res['msj'] == "ok"){
                    mensajeEmergente('Cliente registrado con exito', res['icono']);
                    frm.reset();
                    $("#nuevo_cliente").modal("hide");
                    tblclientes.ajax.reload();
                }else if(res['msj'] == "modificado"){
                    mensajeEmergente('Cliente modificado con exito', res['icono']);
                    frm.reset();
                    $("#nuevo_cliente").modal("hide");
                    tblclientes.ajax.reload();
                }else{
                    mensajeEmergente(res['msj'], res['icono']);
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
                    
                    if (res['msj'] == "ok"){
                        mensajeEmergente('Cliente eliminado con exito', res['icono']);
                        tblclientes.ajax.reload();
                    }else{
                        mensajeEmergente(res['msj'], res['icono']);
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
                    
                    if (res['msj'] == "ok"){
                        mensajeEmergente('Cliente reingresado con exito', res['icono']);
                        tblclientes.ajax.reload();
                    }else{
                        mensajeEmergente(res['msj'], res['icono']);
                    }
                }
            }
        }
    })
}

// Fun cliente

function frmproveedor(){
    document.getElementById("title").innerHTML = "Nuevo proveedor";
    document.getElementById("btnAccion").innerHTML = "Registrar";

    document.getElementById('frmproveedor').reset();

    $("#nuevo_proveedor").modal("show");
    document.getElementById('id').value = "";
}
function registrarProveedor(e) {
    e.preventDefault();
    const ruc = document.getElementById('ruc');
    const nombre = document.getElementById('nombre');
    const telefono = document.getElementById('telefono');
    const direccion = document.getElementById('direccion');
    if(ruc.value == ""  || nombre.value == "" || telefono.value == "" || direccion.value == ""){
        mensajeEmergente('Todos los campos son obligatorios', 'warning');
    }else{
        const url = base_url + "Proveedores/registrar";
        const frm = document.getElementById("frmproveedor");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res['msj'] == "ok"){
                    mensajeEmergente('Proveedor registrado con exito', res['icono']);
                    frm.reset();
                    $("#nuevo_proveedor").modal("hide");
                    tblproveedores.ajax.reload();
                }else if(res['msj'] == "modificado"){
                    mensajeEmergente('Proveedor modificado con exito', res['icono']);
                    frm.reset();
                    $("#nuevo_proveedor").modal("hide");
                    tblproveedores.ajax.reload();
                }else{
                    mensajeEmergente(res['msj'], res['icono']);
                }
            }
        }
    }
    
}
function btnEditarProveedor(id){
    document.getElementById("title").innerHTML = "Actualizar proveedor";
    document.getElementById("btnAccion").innerHTML = "Guardar cambios";

    const url = base_url + "Proveedores/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            
            document.getElementById('id').value = res.id;
            document.getElementById('ruc').value = res.ruc;
            document.getElementById('nombre').value = res.nombre;
            document.getElementById('telefono').value = res.telefono;
            document.getElementById('direccion').value = res.direccion;
    
            $("#nuevo_proveedor").modal("show");


        }
    }
}
function btnEliminarProveedor(id){
    Swal.fire({
        title: 'Estas seguro de eliminar?',
        text: "El proveedor no se eliminara de forma permanente!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy deacuerdo',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Proveedores/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const res = JSON.parse(this.responseText);
                    if (res['msj'] == "ok"){
                        mensajeEmergente('Proveedor eliminado con exito', res['icono']);
                        tblproveedores.ajax.reload();
                    }else{
                        mensajeEmergente(res['msj'], res['icono']);
                    }
                }
            }
        }
    })
}
function btnReingresarProveedor(id){
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
            const url = base_url + "Proveedores/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const res = JSON.parse(this.responseText);
                    if (res['msj'] == "ok"){
                        mensajeEmergente('Proveedor reingresado con exito', res['icono']);
                        tblproveedores.ajax.reload();
                    }else{
                        mensajeEmergente(res['msj'], res['icono']);
                    }
                }
            }
        }
    })
}

// Fun proveedor

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
        mensajeEmergente('Todos los campos son obligatorios', 'warning');
    }else{
        const url = base_url + "Cajas/registrar";
        const frm = document.getElementById("frmcaja");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res['msj'] == "ok"){
                    mensajeEmergente('Caja registrada con exito', res['icono']);
                    frm.reset();
                    $("#nuevo_caja").modal("hide");
                    tblcajas.ajax.reload();
                }else if(res['msj'] == "modificado"){
                    mensajeEmergente('Caja modifico con exito', res['icono']);
                    frm.reset();
                    $("#nuevo_caja").modal("hide");
                    tblcajas.ajax.reload();
                }else{
                    
                    mensajeEmergente(res['msj'], res['icono']);
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
                    if (res['msj'] == "ok"){
                        mensajeEmergente('Caja eliminada con exito', res['icono']);
                        tblcajas.ajax.reload();
                    }else{
                        mensajeEmergente(res['msj'], res['icono']);
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
                    if (res['msj'] == "ok"){
                        mensajeEmergente('Caja reingresada con exito', res['icono']);
                        tblcajas.ajax.reload();
                    }else{
                        mensajeEmergente(res['msj'], res['icono']);
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
        mensajeEmergente('Todos los campos son obligatorios', 'warning');
    }else{
        const url = base_url + "Categorias/registrar";
        const frm = document.getElementById("frmcategoria");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res['msj'] == "ok"){
                    mensajeEmergente('Categoria registrada con exito', res['icono']);
                    frm.reset();
                    $("#nuevo_categoria").modal("hide");
                    tblcategorias.ajax.reload();
                }else if(res['msj'] == "modificado"){
                    mensajeEmergente('Categoria modificada con exito', res['icono']);
                    frm.reset();
                    $("#nuevo_categoria").modal("hide");
                    tblcategorias.ajax.reload();
                }else{
                    
                    mensajeEmergente(res['msj'], res['icono']);
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
                    if (res['msj'] == "ok"){
                        mensajeEmergente('Categoria eliminada con exito', res['icono']);
                        tblcategorias.ajax.reload();
                    }else{
                        mensajeEmergente(res['msj'], res['icono']);
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
                    if (res['msj'] == "ok"){
                        mensajeEmergente('Categoria reingresada con exito', res['icono']);
                        tblcategorias.ajax.reload();
                    }else{
                        mensajeEmergente(res['msj'], res['icono']);
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
        mensajeEmergente('Todos los campos son obligatorios', 'warning');
    }else{
        const url = base_url + "Medidas/registrar";
        const frm = document.getElementById("frmmedida");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res['msj'] == "ok"){
                    mensajeEmergente('Medida registrada con exito', res['icono']);
                      frm.reset();
                      $("#nuevo_medida").modal("hide");
                      tblmedidas.ajax.reload();
                }else if(res['msj'] == "modificado"){
                    mensajeEmergente('Medida modificada con exito', res['icono']);
                      frm.reset();
                      $("#nuevo_medida").modal("hide");
                      tblmedidas.ajax.reload();
                }else{
                    
                    mensajeEmergente(res['msj'], res['icono']);
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
                    if (res['msj'] == "ok"){
                        mensajeEmergente('Medida eliminada con exito', res['icono']);
                        tblmedidas.ajax.reload();
                    }else{
                        mensajeEmergente(res['msj'], res['icono']);
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
                    if (res['msj'] == "ok"){
                        mensajeEmergente('Medida reingresada con exito', res['icono']);
                        tblmedidas.ajax.reload();
                    }else{
                        mensajeEmergente(res['msj'], res['icono']);
                    }
                }
            }
        }
    })
}

// Fun medidas

function frmProducto(){
    document.getElementById("title").innerHTML = "Nuevo Producto";
    document.getElementById("btnAccion").innerHTML = "Registrar";

    document.getElementById('frmProducto').reset();

    document.getElementById('id').value = "";
    $("#nuevo_producto").modal("show");

    deleteImg();
}

function btnAgregarPro(id){
    const url = base_url + "Productos/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            
            document.getElementById('id_agregar').value = res.id;
            document.getElementById('codigo_agregar').value = res.codigo;
            document.getElementById('nombre_agregar').value = res.descripcion;
            document.getElementById('cantidad_actual').value = res.cantidad;
            $("#agregar_producto").modal("show");
        }
    }
}

function registrarPro(e) {
    e.preventDefault();
    const codigo = document.getElementById('codigo');
    const nombre = document.getElementById('nombre');
    const precio_compra = document.getElementById('precio_compra');
    const precio_venta = document.getElementById('precio_venta');
    const id_medida = document.getElementById('medida');
    const id_categoria = document.getElementById('categoria');
    if(codigo.value == ""  || nombre.value == "" || precio_compra.value == "" || precio_venta.value == "" ){
        mensajeEmergente('Todos los campos son obligatorios', 'warning');
    }else{
        const url = base_url + "Productos/registrar";
        const frm = document.getElementById("frmProducto");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res['msj'] == "ok"){
                    mensajeEmergente('Producto registrado con exito', res['icono']);
                    frm.reset();
                    $("#nuevo_producto").modal("hide");
                    tblproductos.ajax.reload();
                }else if(res['msj'] == "modificado"){
                    mensajeEmergente('Producto modificado con exito', res['icono']);
                    frm.reset();
                    $("#nuevo_producto").modal("hide");
                    tblproductos.ajax.reload();
                }else{
                    
                    mensajeEmergente(res['msj'], res['icono']);
                }
            }
        }
    }
    
}

function btnEditarPro(id){
    document.getElementById("title").innerHTML = "Editar Producto";
    document.getElementById("btnAccion").innerHTML = "Guardar cambios";

    const url = base_url + "Productos/editar/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            
            document.getElementById('id').value = res.id;
            document.getElementById('codigo').value = res.codigo;
            document.getElementById('nombre').value = res.descripcion;
            document.getElementById('precio_compra').value = res.precio_compra;
            document.getElementById('precio_venta').value = res.precio_venta;
            document.getElementById('medida').value = res.id_medida;
            document.getElementById('categoria').value = res.id_categoria;
            document.getElementById('img-preview').src = base_url + 'Assets/img/' + res.foto;
            document.getElementById("icon-cerrar").innerHTML = `
            <button class="btn btn-danger" onclick="deleteImg()"><i class="fas fa-times"></i></button>
            `;
            document.getElementById("icon-image").classList.add("d-none");
            document.getElementById("foto_actual").value = res.foto;
            $("#nuevo_producto").modal("show");


        }
    }
}

function btnEliminarPro(id){
    Swal.fire({
        title: 'Estas seguro de eliminar?',
        text: "El producto no se eliminara de forma permanente!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy deacuerdo',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            const url = base_url + "Productos/eliminar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const res = JSON.parse(this.responseText);
                    if (res['msj'] == "ok"){
                        mensajeEmergente('Producto eliminado con exito', res['icono']);
                        tblproductos.ajax.reload();
                    }else{
                        mensajeEmergente(res['msj'], res['icono']);
                    }
                }
            }
        }
    })
}

function btnReingresarPro(id){
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
            const url = base_url + "Productos/reingresar/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const res = JSON.parse(this.responseText);
                    if (res['msj'] == "ok"){
                        mensajeEmergente('Producto reingresado con exito', res['icono']);
                        tblproductos.ajax.reload();
                    }else{
                        mensajeEmergente(res['msj'], res['icono']);
                    }
                }
            }
        }
    })
}

function preview(e){
    const url = e.target.files[0];
    const urltmp = URL.createObjectURL(url);
    document.getElementById("img-preview").src = urltmp;
    document.getElementById("icon-image").classList.add("d-none");
    document.getElementById("icon-cerrar").innerHTML = `
    <button class="btn btn-danger" onclick="deleteImg()"><i class="fas fa-times"></i></button>
    ${url['name']}
    `;
}

function deleteImg(){
    document.getElementById("icon-cerrar").innerHTML = ``;
    document.getElementById("icon-image").classList.remove("d-none");
    document.getElementById("img-preview").src = '';
    document.getElementById("imagen").value = '';
    document.getElementById("foto_actual").value = '';
}

function agregarStockPro(e){
    e.preventDefault();
    const cantidad = document.getElementById('cantidad_agregar');
    if(cantidad.value == "" ){
        mensajeEmergente('Todos los campos son obligatorios', 'warning');
    }else{
        const url = base_url + "Productos/agregarStock";
        const frm = document.getElementById("frmProductoStock");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res['msj'] == "ok"){
                    mensajeEmergente('Stock actualizado con exito', res['icono']);
                    frm.reset();
                    $("#agregar_producto").modal("hide");
                    tblproductos.ajax.reload();
                }else{
                    mensajeEmergente(res['msj'], res['icono']);
                }
            }
        }
    }
}

// Fun productos

if(document.getElementById('tbldetalle')){
    cargardetalle();
}

function buscarCodigo(event) {
    event.preventDefault();
    if(event.which == 13){
        const cod = document.getElementById("codigo").value;

        const url = base_url + "Compras/buscarCodigo/" + cod;
        const http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.send();
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if (res) {
                    document.getElementById("nombre").value = res.descripcion;
                    document.getElementById("precio").value = res.precio_compra;
                    document.getElementById("id").value = res.id;
                    document.getElementById("cantidad").focus();

                    cargardetalle();
                } else {
                    mensajeEmergente('El producto no existe', 'warning');
                    document.getElementById("codigo").value = '';
                    document.getElementById("codigo").focus();

                    cargardetalle();
                }
            }
        }
    }
}

function calcularSubtotal(event){
    event.preventDefault();
    const cant = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;
    document.getElementById("sub_total").value = cant * precio;
    if( event.which == 13){
        if( cant > 0 ){
            const url = base_url + "Compras/ingresar";
            const frm = document.getElementById("frmcompra");
            const http = new XMLHttpRequest();
            http.open("POST", url, true);
            http.send(new FormData(frm));
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const res = JSON.parse(this.responseText);
                    if(res['msj'] == "ok"){
                        frm.reset();
                        cargardetalle();
                        document.getElementById("codigo").focus();
                    }else{
                        mensajeEmergente(res['msj'], res['icono']);
                    }

                    cargardetalle();
                }
            }
        }
    }
}

function cargardetalle(){
    const url = base_url + "Compras/listar";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            let html = '';
            res['detalle'].forEach(row => {
                html += `
                <tr>
                    <td>${row['id']}</td>
                    <td>${row['codigo']}</td>
                    <td>${row['descripcion']}</td>
                    <td>${row['cantidad']}</td>
                    <td>${row['precio']}</td>
                    <td>${row['sub_total']}</td>
                    <td>
                        <button class="btn btn-danger" type="button" onclick="deleteDetalle(${row['id']})">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>`;
            });
            document.getElementById("tbldetalle").innerHTML = html;
            document.getElementById("total").value = res['total'].total;
        }
    }
}

function deleteDetalle(id){
    const url = base_url + "Compras/delete/" + id;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            if (res['msj'] == "ok"){
                cargardetalle();
            }else{
                mensajeEmergente(res['msj'], res['icono']);
            }
        }
    }
}

function frmproveedorvalidar(ruc){
    document.getElementById("title").innerHTML = "Nuevo Proveedor";
    document.getElementById("btnAccion").innerHTML = "Registrar";

    document.getElementById('frmproveedor').reset();

    document.getElementById('ruc').value = ruc;

    $("#nuevo_proveedor").modal("show");
    document.getElementById('id').value = "";
}

function verificarProveedor(e) {
    e.preventDefault();
    const ruc = document.getElementById("empresa").value;

    const url = base_url + "Compras/verificarProveedor/" + ruc;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            if (res['msj'] == "ok") {
                mensajeEmergente('El proveedor fue validado correctamente', res['icono']);
                document.getElementById("estadoproveedor").value =  document.getElementById("empresa").value;
            } else if(res == "inactivo"){
                mensajeEmergente('El proveedor esta betado de la tienda', res['icono']);
                document.getElementById("estadoproveedor").value = "inactivo";
            } else {
                document.getElementById("estadoproveedor").value = "inactivo";
                frmproveedorvalidar(ruc);
            }

            cargardetalle();
        }
    }
}

function registrarProveedorCompra(e) {
    e.preventDefault();
    const ruc = document.getElementById('ruc');
    const nombre = document.getElementById('nombre_proveedor');
    const telefono = document.getElementById('telefono');
    const direccion = document.getElementById('direccion');
    if(ruc.value == ""  || nombre.value == "" || telefono.value == "" || direccion.value == ""){
        mensajeEmergente('Todos los campos son obligatorios', 'warning');
    }else{
        const url = base_url + "Compras/registrarProveedor";
        const frm = document.getElementById("frmproveedor");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res['msj'] == "ok"){
                    mensajeEmergente('Proveedor registrado con exito', res['icono']);
                    frm.reset();
                    $("#nuevo_proveedor").modal("hide");          
                    document.getElementById("estadoproveedor").value =  document.getElementById("empresa").value;
                }else{
                    
                    mensajeEmergente(res['msj'], res['icono']);
                }
            }
        }

        cargardetalle();
    }
    
}

function completarCompras(e) {
    e.preventDefault();
    const empresa = document.getElementById("estadoproveedor").value;
    if (empresa != 'inactivo') {
        const url = base_url + "Compras/completarCompras/" + empresa;
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send();
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res['msj']=='ok'){
                    mensajeEmergente('Compra registrada con exito', res['icono']);
                    cargardetalle(); 
                    document.getElementById("estadoproveedor").value = 'inactivo';  
                    document.getElementById("empresa").value = ''; 
                    const ruta = base_url + 'Compras/generarPDF/' + res['id_compra'];
                    window.open(ruta);
                    setTimeout(() => {
                    window.location.reload();
                    }, 300
                    );
                }else{
                    mensajeEmergente(res['msj'], res['icono']);
                }
            }
        }
    } else {
        mensajeEmergente('Ingrese el proveedor primero', 'warning');
    }

    cargardetalle();
}

function cancelarCompra(){
    const url = base_url + "Compras/cancelarCompra";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            if (res['msj'] == "ok"){
                cargardetalle();
                document.getElementById("estadoproveedor").value = 'inactivo';  
                document.getElementById("empresa").value = ''; 
            }else{
                mensajeEmergente(res['msj'], res['icono']);
            }
        }
    }

    cargardetalle();
}

// fun compras

function buscarCodigoVenta(event) {
    event.preventDefault();
    if(event.which == 13){
        const cod = document.getElementById("codigo").value;

        const url = base_url + "Ventas/buscarCodigo/" + cod;
        const http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.send();
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if (res) {
                    document.getElementById("nombre").value = res.descripcion;
                    document.getElementById("precio").value = res.precio_venta;
                    document.getElementById("id").value = res.id;
                    document.getElementById("cantidad").focus();

                    cargardetalle();
                } else {
                    mensajeEmergente('El producto no existe', 'warning');
                    document.getElementById("codigo").value = '';
                    document.getElementById("codigo").focus();

                    cargardetalle();
                }
            }
        }
    }
}

function calcularSubtotalVenta(event){
    event.preventDefault();
    const cant = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;
    document.getElementById("sub_total").value = cant * precio;
    if( event.which == 13){
        if( cant > 0 ){
            const url = base_url + "Ventas/ingresar";
            const frm = document.getElementById("frmventa");
            const http = new XMLHttpRequest();
            http.open("POST", url, true);
            http.send(new FormData(frm));
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const res = JSON.parse(this.responseText);
                    if(res['msj'] == "ok"){
                        frm.reset();
                        cargardetalle();
                        document.getElementById("codigo").focus();
                    }else{
                        mensajeEmergente(res['msj'], res['icono']);
                    }

                    cargardetalle();
                }
            }
        }
    }
}

function frmclientevalidar(dni){
    document.getElementById("title").innerHTML = "Nuevo cliente";
    document.getElementById("btnAccion").innerHTML = "Registrar";

    document.getElementById('frmcliente').reset();

    document.getElementById('dni').value = dni;

    $("#nuevo_cliente").modal("show");
    document.getElementById('id').value = "";
}

function verificarCliente(e) {
    e.preventDefault();
    const dni = document.getElementById("cliente").value;

    const url = base_url + "Ventas/verificarCliente/" + dni;
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            if (res['msj'] == "ok") {
                mensajeEmergente('El cliente fue validado correctamente', res['icono']);
                document.getElementById("estadocliente").value =  document.getElementById("cliente").value;
            } else if(res == "inactivo"){
                mensajeEmergente('El cliente esta betado de la tienda', res['icono']);
                document.getElementById("estadocliente").value = "inactivo";
            } else {
                document.getElementById("estadocliente").value = "inactivo";
                frmclientevalidar(dni);
            }

            cargardetalle();
        }
    }
}

function registrarClienteVenta(e) {
    e.preventDefault();
    const dni = document.getElementById('dni');
    const nombre = document.getElementById('nombre_cliente');
    const telefono = document.getElementById('telefono');
    const direccion = document.getElementById('direccion');
    if(dni.value == ""  || nombre.value == "" || telefono.value == "" || direccion.value == ""){
        mensajeEmergente('Todos los campos son obligatorios', 'warning');
    }else{
        const url = base_url + "Ventas/registrarCliente";
        const frm = document.getElementById("frmcliente");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                console.log(this.responseText);
                const res = JSON.parse(this.responseText);
                if(res['msj'] == "ok"){
                    mensajeEmergente('Cliente registrado con exito', res['icono']);
                    frm.reset();
                    $("#nuevo_cliente").modal("hide");          
                    document.getElementById("estadocliente").value =  document.getElementById("cliente").value;
                }else{
                    
                    mensajeEmergente(res['msj'], res['icono']);
                }
            }
        }

        cargardetalle();
    }
    
}

function completarVentas(e) {
    e.preventDefault();
    const cliente = document.getElementById("estadocliente").value;
    if (cliente != 'inactivo') {
        const url = base_url + "Ventas/completarVentas/" + cliente;
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send();
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                console.log(this.responseText);
                const res = JSON.parse(this.responseText);
                if(res['msj']=='ok'){
                    mensajeEmergente('Venta registrada con exito', res['icono']);
                    cargardetalle(); 
                    document.getElementById("estadocliente").value = 'inactivo';  
                    document.getElementById("cliente").value = ''; 
                    const ruta = base_url + 'Ventas/generarPDF/' + res['id_venta'];
                    window.open(ruta);
                    setTimeout(() => {
                    window.location.reload();
                    }, 300
                    );
                }else{
                    mensajeEmergente(res['msj'], res['icono']);
                }
            }
        }
    } else {
        mensajeEmergente('Ingrese el cliente primero', 'warning');
    }

    cargardetalle();
}

function cancelarVenta(){
    const url = base_url + "Ventas/cancelarVenta";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            if (res['msj'] == "ok"){
                cargardetalle();
                document.getElementById("estadocliente").value = 'inactivo';  
                document.getElementById("cliente").value = ''; 
            }else{
                mensajeEmergente(res['msj'], res['icono']);
            }
        }
    }

    cargardetalle();
}

// fun ventas

function modificarEmpresa(){
    const url = base_url + "Administracion/modificarEmpresa";
    const frm = document.getElementById("frmempresa");
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(frm));
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            if(res['msj'] == "modificado"){
                mensajeEmergente('Datos modificados con exito', res['icono']);
            }else{
                mensajeEmergente(res['msj'], res['icono']);
            }
        }
    }
}

// fun datos empresa

function mensajeEmergente(mensaje, icono){
    Swal.fire({
        position: 'center',
        icon: icono,
        title: mensaje,
        showConfirmButton: false,
        timer: 3000
      })
}

// fun utiles

function reporteStockMinimo(){
    const url = base_url + "Administracion/reporteStockMinimo";
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            let nombres = [];
            let cantidades = [];
            for(let i = 0; i < res.length; i++){
                nombres.push(res[i]['descripcion']);
                cantidades.push(res[i]['cantidad']);
            }

            var ctx = document.getElementById("Stock_minimo");
            var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: nombres,
                datasets: [{
                data: cantidades,
                backgroundColor: ['#003049', '#d62828', '#f77f00', '#fcbf49', '#eae2b7', 
                '#dad7cd', '#a3b18a', '#588157', '#3a5a40', '#344e41'],
                }],
            },
            });
        }
    }
}
function reporteProductosVendidos(){
    const url = base_url + "Administracion/reporteProductosVendidos";
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const res = JSON.parse(this.responseText);
            let nombres = [];
            let cantidades = [];
            for(let i = 0; i < res.length; i++){
                nombres.push(res[i]['descripcion']);
                cantidades.push(res[i]['cantidadTotal']);
            }

            var ctx = document.getElementById("Productos_vendidos");
            var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: nombres,
                datasets: [{
                data: cantidades,
                backgroundColor: ['#003049', '#d62828', '#f77f00', '#fcbf49', '#eae2b7', 
                                '#dad7cd', '#a3b18a', '#588157', '#3a5a40', '#344e41'],
                }],
            },
            });
        }
    }
}

if(document.getElementById('Stock_minimo')){
    reporteStockMinimo();
}

if(document.getElementById('Productos_vendidos')){
    reporteProductosVendidos();
}

// Pie Chart
