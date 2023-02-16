<?php
    include "Views/Templates/header.php";
?>
<div class="card">
    <div class="card-header bg-primary text-white">
        <h4>Nueva compra</h4>
    </div>
    <input type="hidden" id="estadoproveedor" name="estadoproveedor" value="inactivo">
    <div class="card-body">
        <form id="frmcompra">
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="codigo"><i class="fas fa-barcode"></i> Codigo de barras</label>
                        <input type="hidden" id="id" name="id">
                        <input id="codigo" class="form-control" type="text" name="codigo" placeholder="Codigo de barras" onkeyup="buscarCodigo(event);">
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="form-group">
                        <label for="nombre">Descripción</label>
                        <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Descripción del producto" disabled>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="cantidad">Canti</label>
                        <input id="cantidad" class="form-control" type="number" name="cantidad" placeholder="Cantidad" onkeyup="calcularSubtotal(event);">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="precio">Precio</label>
                        <input id="precio" class="form-control" type="text" name="precio" placeholder="Precio de compra" disabled>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="sub_total">Sub total</label>
                        <input id="sub_total" class="form-control" type="text" name="sub_total" placeholder="Sub total" disabled>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
<table class="table table-light table-bordered table-haver">
    <thead class="thead-dark" >
        <tr>
            <th>Id</th>
            <th>Codigo</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Sub total</th>
            <th></th>
        </tr>
    </thead>
    <tbody id="tbldetalle">
        
    </tbody>
</table>
<div class="row">
    <div class="col-md-4 ml-auto">
        <div class="form-group">
            <label for="empresa" class="font-weight-bold"><i id="labelcliente" class="d-none"></i> Empresa</label>
            <input id="empresa" class="form-control" type="text" name="empresa" placeholder="Ingresar el RUC de la empresa">
            <button id="btnverificar" name="btnverificar" class="btn btn-primary mt-2 btn-block" type="button" onclick="verificarProveedor(event);" >Verificar Cliente</button>
        </div>
    </div>
    <div class="col-md-4 ml-auto">
        <div class="form-group">
            <label for="total" class="font-weight-bold">Total</label>
            <input id="total" class="form-control" type="text" name="total" placeholder="Total" disabled>
            <div class="row">
                <div class="col-md-6">
                    <button class="btn btn-primary mt-2 btn-block" type="button" onclick="completarCompras(event);">Registrar compra</button>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-danger mt-2 btn-block" type="button" onclick="cancelarCompra();">Cancelar compra</button>
                </div>
            </div>
        </div>
    </div>
</div>

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
                        <label for="nombre_proveedor">Empresa</label>
                        <input id="nombre_proveedor" class="form-control" type="text" name="nombre_proveedor" placeholder="Nombre de la empresa">
                    </div>
                    <div class="form-group">
                        <label for="telefono">Telefono</label>
                        <input id="telefono" class="form-control" type="text" name="telefono" placeholder="Telefono">
                    </div>
                    <div class="form-group">
                        <label for="direccion">Dirección</label>
                        <textarea id="direccion" class="form-control" name="direccion"  placeholder="Dirección" rows="3"></textarea>
                    </div>
                    <button class="btn btn-primary" type="button" onclick="registrarProveedorCompra(event);" id="btnAccion">Registrar</button>
                    <button class="btn btn-danger" type="button" data-dismiss="modal">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</div>
<?php
    include "Views/Templates/footer.php";
?>