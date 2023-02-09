<?php
    class Categorias extends Controller{
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
            $data = $this->model->getCategorias();
            for ($i=0; $i < count($data); $i++) { 
                if($data[$i]['estado'] == 1){
                    $data[$i]['estado'] = '<span class="badge badge-success">Activo</span>';
                    $data[$i]['acciones'] = '<div>
                    <button class="btn btn-primary" type="button" onclick="btnEditarcategoria('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger" type="button" onclick="btnEliminarcategoria('.$data[$i]['id'].');"><i class="fas fa-user-alt-slash"></i></button>
                    </div>';
                }else{
                    $data[$i]['estado'] = '<span class="badge badge-danger">Inactivo</span>';
                    $data[$i]['acciones'] = '<div>
                    <button class="btn btn-primary" type="button" onclick="btnEditarcategoria('.$data[$i]['id'].');"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-success" type="button" onclick="btnReingresarcategoria('.$data[$i]['id'].');"><i class="fas fa-user-check"></i></button>
                    </div>';
                }
                
            }
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function registrar() {
            $nombre = $_POST['nombre'];
            $id = $_POST['id'];
            if( empty($nombre) ){
                $msj = "Todos los campos son obligatorios";
            }else{
                if($id == ""){
                    $data = $this->model->registrarCategoria($nombre);
                    if($data == "ok"){
                        $msj = "si";
                    }else if($data == "existe"){
                        $msj = "El DNI ya existe";
                    }else{
                        $msj = "Error al registrar la categoria";
                    }
                }else{
                    $data = $this->model->modificarCategoria($nombre, $id);
                    if($data == "modificado"){
                        $msj = "modificado";
                    }else{
                        $msj = "Error al modificar la categoria";
                    }
                }
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function editar(int $id){
            $data = $this->model->editarCategoria($id);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function eliminar(int $id){
            $data = $this->model->accionCategoria(0, $id);
            if ($data == 1){
                $msj = "ok";
            }else{
                $msj = "Error no se pudo eliminar la categoria"; 
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function reingresar(int $id){
            $data = $this->model->accionCategoria(1, $id);
            if ($data == 1){
                $msj = "ok";
            }else{
                $msj = "Error no se pudo reingresar la categoria"; 
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
    }
?>