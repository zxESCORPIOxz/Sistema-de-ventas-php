<?php
    class AdministracionModel extends Query{
        private $id, $nombre, $ruc, $telefono, $direccion, $mensaje;
        public function __construct() {
            parent::__construct();
        }

        public function getEmpresa() {
            $sql = "SELECT * FROM configuracion";
            $data = $this->select($sql);
            return $data;
        }

        public function getDataAdmin(string $tabla) {
            $sql = "SELECT COUNT(*) AS total FROM $tabla";
            $data = $this->select($sql);
            return $data;
        }

        public function getDataAdminAvg() {
            $sql = "SELECT COUNT(*) AS total,SUM(ventas.total) AS totalGanancias FROM ventas WHERE fecha > CURDATE()";
            $data = $this->select($sql);
            return $data;
        }

        public function modificarEmpresa(int $id, string $nombre, string $ruc, string $telefono, string $direccion, string $mensaje){
            $this->id = $id;
            $this->nombre = $nombre;
            $this->ruc = $ruc;
            $this->telefono = $telefono;
            $this->direccion = $direccion;
            $this->mensaje = $mensaje;
            $sql = "UPDATE configuracion 
            SET ruc = ?,
            nombre = ?, telefono = ?,
            direccion = ?, mensaje = ? 
            WHERE id = ?";
            $datos = array($this->ruc, $this->nombre, $this->telefono, $this->direccion, $this->mensaje, $this->id);
            $data = $this->save($sql, $datos);
            if($data == 1){
                $res = "modificado";
            }else{
                $res = "error";
            }
            return $res;
        }

        public function reporteStockMinimo(){
            $sql = "SELECT * FROM productos WHERE cantidad < 15 ORDER BY cantidad DESC LIMIT 10";
            $data = $this->selectAll($sql);
            return $data;
        }

        public function reporteProductosVendidos(){
            $sql = "SELECT DISTINCT detalle_ventas.id, SUM(detalle_ventas.cantidad) AS cantidadTotal, productos.descripcion 
            FROM detalle_ventas
            INNER JOIN productos
            ON detalle_ventas.id_producto = productos.id
            GROUP BY detalle_ventas.id_producto
            ORDER BY cantidadTotal DESC LIMIT 10";
            $data = $this->selectAll($sql);
            return $data;
        }
    }

?>