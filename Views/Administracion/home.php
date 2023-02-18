<?php
    include "Views/Templates/header.php";
?>

<div class="row">
    <div class="col-xl-3 col-md-6 mt-2 mb-2">
        <div class="card bg-primary">
            <div class="card-body d-flex text-white">
                Usuarios
                <i class="fas fa-user fa-2x ml-auto"></i>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <a href="<?php echo base_url; ?>Usuarios" class="text-white">Ver Detalle</a>
                <span class="text-white">
                    <?php
                        echo $data['usuarios']['total'];
                    ?>
                </span>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 mt-2 mb-2">
        <div class="card bg-success">
            <div class="card-body d-flex text-white">
                Clientes
                <i class="fas fa-users fa-2x ml-auto"></i>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <a href="<?php echo base_url; ?>Clientes" class="text-white">Ver Detalle</a>
                <span class="text-white">
                    <?php
                        echo $data['clientes']['total'];
                    ?>
                </span>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 mt-2 mb-2">
        <div class="card bg-dark">
            <div class="card-body d-flex text-white">
                Proveedores
                <i class="fas fa-industry fa-2x ml-auto"></i>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <a href="<?php echo base_url; ?>Usuarios" class="text-white">Ver Detalle</a>
                <span class="text-white">
                    <?php
                        echo $data['proveedores']['total'];
                    ?>
                </span>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-md-6 mt-2 mb-2">
        <div class="card bg-danger">
            <div class="card-body d-flex text-white">
                Productos
                <i class="fab fa-product-hunt fa-2x ml-auto"></i>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <a href="<?php echo base_url; ?>Usuarios" class="text-white">Ver Detalle</a>
                <span class="text-white">
                    <?php
                        echo $data['productos']['total'];
                    ?>
                </span>
            </div>
        </div>
    </div>
    <div class="col-xl-6 col-md-12 mt-2 mb-2">
        <div class="card bg-secondary">
            <div class="card-body d-flex text-white">
                Ventas por dia
                <i class="fas fa-shopping-cart fa-2x ml-auto"></i>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <a href="<?php echo base_url; ?>Ventas/historial" class="text-white">Ver Detalle</a>
                <span class="text-white">
                    <?php
                        echo $data['ventasdia']['total'];
                    ?>
                </span>
            </div>
        </div>
    </div>
    <div class="col-xl-6 col-md-12 mt-2 mb-2">
        <div class="card bg-info">
            <div class="card-body d-flex text-white">
                Entradas del dia
                <i class="fas fa-money-bill-wave fa-2x ml-auto"></i>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <a href="<?php echo base_url; ?>Ventas/historial" class="text-white">Ver Detalle</a>
                <span class="text-white">
                    <?php
                        echo $data['ventasdia']['totalGanancias'];
                    ?> S/.
                </span>
            </div>
        </div>
    </div>
</div>
<div class="row mt-2">
    <div class="col-xl-6">
        <div class="card">
            <div class="card-header bg-dark text-white">
                Productos con Stock minimo
            </div>
            <div class="card-body">
                <canvas id="Stock_minimo" width="400" height="400"></canvas>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="card">
            <div class="card-header bg-dark text-white">
                Productos mas vendidos
            </div>
            <div class="card-body">
                <canvas id="Productos_vendidos" width="400" height="400"></canvas>
            </div>
        </div>
    </div>
</div>
<?php
    include "Views/Templates/footer.php";
?>