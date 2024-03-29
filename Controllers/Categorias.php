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
                $msj = array('msj' => "Todos los campos son obligatorios", 'icono' => 'warning');
            }else{
                if($id == ""){
                    $data = $this->model->registrarCategoria($nombre);
                    if($data == "ok"){
                        $msj = array('msj' => "ok", 'icono' => 'success');
                    }else if($data == "existe"){
                        $msj = array('msj' => "La categoria ya esta registrado", 'icono' => 'warning');
                    }else{
                        $msj = array('msj' => "Error al registrar la categoria", 'icono' => 'warning');
                    }
                }else{
                    $data = $this->model->modificarCategoria($nombre, $id);
                    if($data == "modificado"){
                        $msj = array('msj' => "modificado", 'icono' => 'success');
                    }else{
                        $msj = array('msj' => "Error al modificar la caja", 'icono' => 'warning');
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
                $msj = array('msj' => "ok", 'icono' => 'success');
            }else{
                $msj = array('msj' => "Error al eliminar la categoria", 'icono' => 'warning');
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
        public function reingresar(int $id){
            $data = $this->model->accionCategoria(1, $id);
            if ($data == 1){
                $msj = array('msj' => "ok", 'icono' => 'success');
            }else{
                $msj = array('msj' => "Error al reingresar la categoria", 'icono' => 'warning');
            }
            echo json_encode($msj, JSON_UNESCAPED_UNICODE);
            die();
        }
    }
?>