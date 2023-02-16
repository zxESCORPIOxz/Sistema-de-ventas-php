<?php
    include "Views/Templates/header.php";
?>
<ol class="breadcrumb mb-4">
    <li class="breadcrumb-item active">Proveedores</li>
</ol>
<button class="btn btn-primary mb-2" type="button" onclick="frmproveedor()">Nuevo <i class="fas fa-plus"></i></button>
<table class="table table-light" id="tblproveedores">
    <thead class="thead-dark">
        <tr>
            <th>Id</th>
            <th>RUC</th>
            <th>Empresa</th>
            <th>Telefono</th>
            <th>Correo</th>
            <th>Estado</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
<div id="nuevo_proveedor" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title text-white" id="title">Nuevo Proveedor</h5>
                <button class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form method="post" id="frmproveedor">

                    <input type="hidden" id="id" name="id"/>

                    <div class="form-group">
                        <label for="ruc">RUC</label>
                        <input id="ruc" class="form-control" type="text" name="ruc" placeholder="RUC de la empresa">
                    </div>
                    <div class="form-group">
                        <label for="nombre">Empresa</label>
                        <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Nombre de la empresa">
                    </div>
                    <div class="form-group">
                        <label for="telefono">Telefono</label>
                        <input id="telefono" class="form-control" type="text" name="telefono" placeholder="Telefono">
                    </div>
                    <div class="form-group">
                        <label for="direccion">Dirección</label>
                        <textarea id="direccion" class="form-control" name="direccion"  placeholder="Dirección" rows="3"></textarea>
                    </div>
                    <button class="btn btn-primary" type="button" onclick="registrarProveedor(event);" id="btnAccion">Registrar</button>
                    <button class="btn btn-danger" type="button" data-dismiss="modal">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</div>
<?php
    include "Views/Templates/footer.php";
?>