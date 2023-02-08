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
            if( empty($dni) || empty($nombre) || empty($telefono || empty($direccion)) ){
                $msj = "Todos los campos son obligatorios";
            }else{
                if($id == ""){
                    $data = $this->model->registrarCliente($dni, $nombre, $telefono, $direccion);
                    if($data == "ok"){
                        $msj = "si";
                    }else if($data == "existe"){
                        $msj = "El DNI ya existe";
                    }else{
                        $msj = "Error al registrar el cliente";
                    }
                }else{
                    $data = $this->model->modificarCliente($dni, $nombre, $telefono, $direccion, $id);
                    if($data == "modificado"){
                        $msj = "modificado";
                    }else{
                        $msj = "Error al modificar el cliente";
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
                $msj = "ok";
            }else{
                $msj = "Error no se pudo eliminar el Cliente"; 
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function reingresar(int $id){
            $data = $this->model->accionCliente(1, $id);
            if ($data == 1){
                $msj = "ok";
            }else{
                $msj = "Error no se pudo reingresar el Cliente"; 
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
    }
    
?>