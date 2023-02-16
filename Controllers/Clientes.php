<?php
    class Clientes extends Controller{
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
            $data = $this->model->getClientes();
            for ($i=0; $i < count($data); $i++) { 
                if($data[$i]['estado'] == 1){
                    $data[$i]['estado'] = '<span class="badge badge-success">Activo</span>';
                    $data[$i]['acciones'] = '<div>
                    <button class="btn btn-primary" type="button" onclick="btnEditarcli('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger" type="button" onclick="btnEliminarcli('.$data[$i]['id'].');"><i class="fas fa-user-alt-slash"></i></button>
                    </div>';
                }else{
                    $data[$i]['estado'] = '<span class="badge badge-danger">Inactivo</span>';
                    $data[$i]['acciones'] = '<div>
                    <button class="btn btn-primary" type="button" onclick="btnEditarcli('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-success" type="button" onclick="btnReingresarcli('.$data[$i]['id'].');"><i class="fas fa-user-check"></i></button>
                    </div>';
                }
                
            }
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function registrar() {
            $dni = $_POST['dni'];
            $nombre = $_POST['nombre'];
            $direccion = $_POST['direccion'];
            $telefono = $_POST['telefono'];
            $id = $_POST['id'];
            if( empty($dni) || empty($nombre) || empty($telefono)  || empty($direccion)){
                $msj = array('msj' => "Todos los campos son obligatorios", 'icono' => 'warning');
            }else{
                if($id == ""){
                    $data = $this->model->registrarCliente($dni, $nombre, $telefono, $direccion);
                    if($data == "ok"){
                        $msj = array('msj' => "ok", 'icono' => 'success');
                    }else if($data == "existe"){
                        $msj = array('msj' => "El DNI ya esta registrado", 'icono' => 'warning');
                    }else{
                        $msj = array('msj' => "Error al registrar el cliente", 'icono' => 'warning');
                    }
                }else{
                    $data = $this->model->modificarCliente($dni, $nombre, $telefono, $direccion, $id);
                    if($data == "modificado"){
                        $msj = array('msj' => "modificado", 'icono' => 'success');
                    }else{
                        $msj = array('msj' => "Error al modificar el cliente", 'icono' => 'warning');
                    }
                }
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function editar(int $id){
            $data = $this->model->editarCli($id);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function eliminar(int $id){
            $data = $this->model->accionCliente(0, $id);
            if ($data == 1){
                $msj = array('msj' => "ok", 'icono' => 'success');
            }else{
                $msj = array('msj' => "Error al eliminar el cliente", 'icono' => 'warning');
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function reingresar(int $id){
            $data = $this->model->accionCliente(1, $id);
            if ($data == 1){
                $msj = array('msj' => "ok", 'icono' => 'success');
            }else{
                $msj = array('msj' => "Error al reingresar el cliente", 'icono' => 'warning');
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
    }
    
?>