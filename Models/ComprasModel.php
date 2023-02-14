<?php
    class ComprasModel extends Query{

        private $nombre, $estado;

        public function __construct() {
            parent::__construct();
        }

        public function getProductoCodigo(string $codigo){
            $sql = "SELECT * FROM productos WHERE codigo = '$codigo' AND estado = 1";
            $data = $this->select($sql);
            return $data;
        }

        public function getProductosCompra(int $id){
            $sql = "SELECT * FROM productos WHERE codigo = $id AND estado = 1";
            $data = $this->select($sql);
            return $data;
        }

        public function registrarDetalle(int $id_producto, int $id_usuario, string $precio, int $cantidad, string $subtotal){
            $sql = "INSERT INTO detalle(id_producto, id_usuario, precio, cantidad, sub_total) VALUES(?,?,?,?,?)";
            $datos = array($id_producto, $id_usuario, $precio, $cantidad, $subtotal);
            $data = $this->save($sql, $datos);
            if ($data == 1) {
                $res = "ok";
            } else {
                $res = "error";
            }
            
            return $res;
        }

        public function getDetalle(int $id){
            $sql = "SELECT detalle.*,  productos.descripcion, productos.codigo
            FROM detalle 
            INNER JOIN productos
            ON detalle.id_producto = productos.id
            WHERE id_usuario = $id";
            $data = $this->selectAll($sql);
            return $data;
        }

        public function calcularTotal(int $id){
            $sql = "SELECT SUM(sub_total) AS total
            FROM detalle 
            WHERE id_usuario = $id";
            $data = $this->select($sql);
            return $data;
        }

        public function deleteDetalle(int $id){
            $sql = "DELETE FROM detalle 
            WHERE id = ?";
            $datos = array($id);
            $data = $this->save($sql, $datos);
            if ($data == 1) {
                $res = "ok";
            } else {
                $res = "error";
            }
            
            return $res;
        }

        public function validarProducto(int $id_producto, int $id_usuario){
            $sql = "SELECT *
            FROM detalle 
            WHERE id_usuario = $id_usuario AND id_producto = $id_producto";
            $data = $this->select($sql);
            return $data;
        }

        public function modificarDetalle(string $cantidad, string $subtotal, int $id_detalle){
            $sql = "UPDATE detalle SET cantidad = ?, sub_total = ? WHERE id = ?";
            $datos = array($cantidad, $subtotal, $id_detalle);
            $data = $this->save($sql, $datos);
            if ($data == 1) {
                $res = "ok";
            } else {
                $res = "error";
            }
            
            return $res;
        }

        public function verificarCliente(string $dni){
            $sql = "SELECT *
            FROM clientes 
            WHERE dni = '$dni'";
            $data = $this->select($sql);
            return $data;
        }

        public function registrarCliente(String $dni, string $nombre, string $telefono, string $direccion){
            $this->dni = $dni;
            $this->nombre = $nombre;
            $this->telefono = $telefono;
            $this->direccion = $direccion;
            $verificar = "SELECT * FROM clientes WHERE dni = '$this->dni'";
            $existe = $this->select($verificar);
            if(empty($existe)){
                $sql = "INSERT INTO clientes(dni, nombre, telefono, direccion) VALUES (?,?,?,?)";
                $datos = array($this->dni, $this->nombre, $this->telefono, $this->direccion);
                $data = $this->save($sql, $datos);
                if($data == 1){
                    $res = "ok";
                }else{
                    $res = "error";
                }
            }else{
                $res = "existe";
            }
            return $res;
        }

        public function completarCompras(string $total, string $cliente, string $id_usario){
            $sql = "CALL I_COMPRA(?, ?, ?)";
            $datos = array($total, $cliente, $id_usario);
            $data = $this->ejecutar($sql, $datos);
            
            return $data;
        }

        public function cancelarCompra(int $id){
            $sql = "DELETE FROM detalle 
            WHERE id_usuario = ?";
            $datos = array($id);
            $data = $this->save($sql, $datos);
            if ($data == 1) {
                $res = "ok";
            } else {
                $res = "error";
            }
            
            return $res;
        }

        public function getEmpresa(){
            $sql = "SELECT * FROM configuracion";
            $data = $this->select($sql);
            
            return $data;
        }

        public function getDetalleCompra(int $id_compra){
            
            $sql = "SELECT compras.* , detalle_compras.* , productos.id AS id_d_productos , productos.descripcion , clientes.dni , clientes.nombre
            FROM compras
            INNER JOIN detalle_compras
            ON compras.id = detalle_compras.id_compra
            INNER JOIN productos
            ON detalle_compras.id_producto = productos.id
            INNER JOIN clientes
            ON compras.id_cliente = clientes.id
            WHERE compras.id =  $id_compra";
            $data = $this->selectAll($sql);
            
            return $data;
        }

        public function gethistorialcompra(){
            $sql = "SELECT compras.*, clientes.dni, clientes.nombre, usuarios.nombre AS nombre_usuario FROM compras
            INNER JOIN clientes
            ON clientes.id = compras.id_cliente
            INNER JOIN usuarios
            ON usuarios.id = compras.id_usuario";
            $data = $this->selectAll($sql);
            return $data;
        }
    }
?>