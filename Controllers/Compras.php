<?php
    class Compras extends Controller{
        public function __construct(){
            session_start();
            parent::__construct();
        }

        public function index(){
            $this->views->getView($this, "index");
        }

        public function buscarCodigo($codigo){
            $data = $this->model->getProductoCodigo($codigo); 
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }
        
        public function ingresar(){
            $id = $_POST['id'];
            $datos = $this->model->getProductosCompra($id);
            $id_producto = $datos['id'];
            $id_usuario = $_SESSION['id_usuario'];
            $precio = $datos['precio_compra'];
            $cantidad = $_POST['cantidad'];
            $subtotal = $precio * $cantidad;

            $validar = $this->model->validarProducto($id_producto, $id_usuario);
            if (empty($validar)) {
                $data = $this->model->registrarDetalle($id_producto, $id_usuario, $precio, $cantidad, $subtotal);
            } else {
                $cantidad = $validar['cantidad'] + $cantidad;
                $subtotal = $precio * $cantidad;
                $id_detalle = $validar['id'];
                $data = $this->model->modificarDetalle($cantidad, $subtotal, $id_detalle);
            }
            
            if ($data == "ok") {
                $msj = "ok";
            } else {
                $msj = "Error al ingresar el producto";
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function listar(){
            $id_usuario = $_SESSION["id_usuario"];
            $data['detalle'] = $this->model->getDetalle($id_usuario);
            $data['total'] = $this->model->calcularTotal($id_usuario);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function delete(int $id){
            $data = $this->model->deleteDetalle($id);
            if ($data == "ok") {
                $msj = "ok";
            } else {
                $msj = "No se pudo eliminar el producto";
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function completarCompras(){
            $data = $this->model->completarCompras();
        }

        public function verificarCliente(string $dni){
            $data = $this->model->verificarCliente($dni);
            if (!empty($data)) {
                if($data['estado'] == 1){
                    $msj = "ok";
                }else{
                    $msj = "inactivo";
                }
            } else {
                $msj = "no";
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function registrar() {
            $dni = $_POST['dni'];
            $nombre = $_POST['nombre_cliente'];
            $direccion = $_POST['direccion'];
            $telefono = $_POST['telefono'];
            $id = $_POST['id'];
            if( empty($dni) || empty($nombre) || empty($telefono)  || empty($direccion)){
                $msj = "Todos los campos son obligatorios";
            }else{
                $data = $this->model->registrarCliente($dni, $nombre, $telefono, $direccion);
                if($data == "ok"){
                    $msj = "si";
                }else if($data == "existe"){
                    $msj = "El DNI ya existe";
                }else{
                    $msj = "Error al registrar el cliente";
                }
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
    }
?>