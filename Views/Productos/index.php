<?php
    include "Views/Templates/header.php";
?>
<ol class="breadcrumb mb-4">
    <li class="breadcrumb-item active">Productos</li>
</ol>
<button class="btn btn-primary mb-2" type="button" onclick="frmProducto()">Nuevo <i class="fas fa-plus"></i></button>
<div class="table-responsive">
    <table class="table table-light" id="tblproductos">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Imagen</th>
                <th>Codigo</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Estado</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
</div>
<div id="nuevo_producto" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title text-white" id="title">Nuevo Producto</h5>
                <button class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form method="post" id="frmProducto">

                    <input type="hidden" id="id" name="id"/>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="codigo">Código de barras</label>
                                <input id="codigo" class="form-control" type="text" name="codigo" placeholder="Código de barras">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="nombre">Descripción</label>
                                <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Descripción del Producto">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="precio_compra">Precio de compra</label>
                                <input id="precio_compra" class="form-control" type="text" name="precio_compra" placeholder="Precio de compra">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="precio_venta">Precio de venta</label>
                                <input id="precio_venta" class="form-control" type="text" name="precio_venta" placeholder="Precio de venta">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="medida">Medidas</label>
                                <select id="medida" class="form-control" name="medida">
                                    <?php foreach ($data['medidas'] as $row) { ?>
                                        <option value="<?php echo $row['id'] ?>"><?php echo $row['nombre'] ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="categoria">Categorias</label>
                                <select id="categoria" class="form-control" name="categoria">
                                    <?php foreach ($data['categorias'] as $row) { ?>
                                        <option value="<?php echo $row['id'] ?>"><?php echo $row['nombre'] ?></option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Text</label>
                                <div class="card border-primary">
                                    <div class="card-body">
                                        <label id="icon-image" for="imagen" class="btn btn-primary"><i class="fas fa-image"></i></label>
                                        <span id="icon-cerrar"></span>
                                        <input id="imagen" class="d-none" type="file" name="imagen" onchange="preview(event)"=>
                                        <input type="hidden" id="foto_actual" name="foto_actual">
                                        <img class="img-thumbnail" id="img-preview">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="button" onclick="registrarPro(event);" id="btnAccion">Registrar</button>
                    
                    <button class="btn btn-danger" type="button" data-dismiss="modal">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</div>
<div id="agregar_producto" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title text-white" id="title">Agregar Stock</h5>
                <button class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form method="post" id="frmProductoStock">

                    <input type="hidden" id="id_agregar" name="id_agregar"/>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="codigo_agregar">Código de barras</label>
                                <input id="codigo_agregar" class="form-control" type="text" name="codigo_agregar" placeholder="Código de barras" disabled>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="nombre_agregar">Descripción</label>
                                <input id="nombre_agregar" class="form-control" type="text" name="nombre_agregar" placeholder="Descripción del Producto" disabled>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="cantidad_actual">Cantidad Actual</label>
                                <input id="cantidad_actual" class="form-control" type="number" name="cantidad_actual" placeholder="Cantidad a actual" disabled>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="cantidad_agregar">Cantidad a ingresar</label>
                                <input id="cantidad_agregar" class="form-control" type="number" name="cantidad_agregar" placeholder="Cantidad a agregar">
                            </div>
                        </div>
                    </div>
                    
                    <button class="btn btn-primary" type="button" onclick="agregarStockPro(event);" id="btnAccion">Agregar</button>
                    
                    <button class="btn btn-danger" type="button" data-dismiss="modal">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</div>
<?php
    include "Views/Templates/footer.php";
?>