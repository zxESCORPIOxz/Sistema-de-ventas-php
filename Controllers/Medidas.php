<?php
    class Medidas extends Controller{
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
            $data = $this->model->getMedidas();
            for ($i=0; $i < count($data); $i++) { 
                if($data[$i]['estado'] == 1){
                    $data[$i]['estado'] = '<span class="badge badge-success">Activo</span>';
                    $data[$i]['acciones'] = '<div>
                    <button class="btn btn-primary" type="button" onclick="btnEditarmedida('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger" type="button" onclick="btnEliminarmedida('.$data[$i]['id'].');"><i class="fas fa-user-alt-slash"></i></button>
                    </div>';
                }else{
                    $data[$i]['estado'] = '<span class="badge badge-danger">Inactivo</span>';
                    $data[$i]['acciones'] = '<div>
                    <button class="btn btn-primary" type="button" onclick="btnEditarmedida('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-success" type="button" onclick="btnReingresarmedida('.$data[$i]['id'].');"><i class="fas fa-user-check"></i></button>
                    </div>';
                }
                
            }
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function registrar() {
            $nombre = $_POST['nombre'];
            $nombre_corto = $_POST['nombre_corto'];
            $id = $_POST['id'];
            if( empty($nombre_corto) || empty($nombre)){
                $msj = "Todos los campos son obligatorios";
            }else{
                if($id == ""){
                    $data = $this->model->registrarMedida($nombre, $nombre_corto);
                    if($data == "ok"){
                        $msj = "si";
                    }else if($data == "existe"){
                        $msj = "La medida ya existe";
                    }else{
                        $msj = "Error al registrar la medida";
                    }
                }else{
                    $data = $this->model->modificarMedida($nombre, $nombre_corto, $id);
                    if($data == "modificado"){
                        $msj = "modificado";
                    }else{
                        $msj = "Error al modificar el medida";
                    }
                }
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function editar(int $id){
            $data = $this->model->editarMedida($id);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function eliminar(int $id){
            $data = $this->model->accionMedida(0, $id);
            if ($data == 1){
                $msj = "ok";
            }else{
                $msj = "Error no se pudo eliminar el Medida"; 
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function reingresar(int $id){
            $data = $this->model->accionMedida(1, $id);
            if ($data == 1){
                $msj = "ok";
            }else{
                $msj = "Error no se pudo reingresar el Medida"; 
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
    }
    
?>