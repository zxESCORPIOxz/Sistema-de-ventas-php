<?php
    class Proveedores extends Controller{
        public function __construct(){
            session_start();
            if(empty($_SESSION['activo'])){
                header('Location: '.base_url);
            }
            parent::__construct();
        }

        public function index(){
            $this->views->getView($this, "index");
        }

        public function listar(){
            $data = $this->model->getProveedores();
            for ($i=0; $i < count($data); $i++) { 
                if($data[$i]['estado'] == 1){
                    $data[$i]['estado'] = '<span class="badge badge-success">Activo</span>';
                    $data[$i]['acciones'] = '<div>
                    <button class="btn btn-primary" type="button" onclick="btnEditarProveedor('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger" type="button" onclick="btnEliminarProveedor('.$data[$i]['id'].');"><i class="fas fa-user-alt-slash"></i></button>
                    </div>';
                }else{
                    $data[$i]['estado'] = '<span class="badge badge-danger">Inactivo</span>';
                    $data[$i]['acciones'] = '<div>
                    <button class="btn btn-primary" type="button" onclick="btnEditarProveedor('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-success" type="button" onclick="btnReingresarProveedor('.$data[$i]['id'].');"><i class="fas fa-user-check"></i></button>
                    </div>';
                }
                
            }
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function registrar() {
            $ruc = $_POST['ruc'];
            $nombre = $_POST['nombre'];
            $direccion = $_POST['direccion'];
            $telefono = $_POST['telefono'];
            $id = $_POST['id'];
            if( empty($ruc) || empty($nombre) || empty($telefono)  || empty($direccion)){
                $msj = array('msj' => "Todos los campos son obligatorios", 'icono' => 'warning');
            }else{
                if($id == ""){
                    $data = $this->model->registrarProveedor($ruc, $nombre, $telefono, $direccion);
                    if($data == "ok"){
                        $msj = array('msj' => "ok", 'icono' => 'success');
                    }else if($data == "existe"){
                        $msj = array('msj' => "El RUC ya esta registrado", 'icono' => 'warning');
                    }else{
                        $msj = array('msj' => "Error al registrar el proveedor", 'icono' => 'warning');
                    }
                }else{
                    $data = $this->model->modificarProveedor($ruc, $nombre, $telefono, $direccion, $id);
                    if($data == "modificado"){
                        $msj = array('msj' => "modificado", 'icono' => 'success');
                    }else{
                        $msj = array('msj' => "Error al modificar el proveedor", 'icono' => 'warning');
                    }
                }
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function editar(int $id){
            $data = $this->model->editarProveedor($id);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function eliminar(int $id){
            $data = $this->model->accionProveedor(0, $id);
            if ($data == 1){
                $msj = array('msj' => "ok", 'icono' => 'success');
            }else{
                $msj = array('msj' => "Error al eliminar el provedor", 'icono' => 'warning');
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function reingresar(int $id){
            $data = $this->model->accionProveedor(1, $id);
            if ($data == 1){
                $msj = array('msj' => "ok", 'icono' => 'success');
            }else{
                $msj = array('msj' => "Error al reingresar el provedor", 'icono' => 'warning');
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
    }
    
?>